const { BufferJSON, initAuthCreds, WAProto } = require('baileys')
const { getBuffer } = require('./index')
const { setKeys, getCreds, setCreds } = require('../resources/database/session')
const config = require('../config')
const { delKeys, getKeys } = require('./db/session')

const KEY_MAP = {
 'pre-key': 'preKeys',
 session: 'sessions',
 'sender-key': 'senderKeys',
 'app-state-sync-key': 'appStateSyncKeys',
 'app-state-sync-version': 'appStateVersions',
 'sender-key-memory': 'senderKeyMemory',
}

const extractUrl = (text = 'null') => {
 const urlRegex = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g
 const matches = text.match(urlRegex)
 return matches ? matches[0] : false
}

const createKeyStore = (storageHandler, logger) => {
 let inTransaction = false
 let cache = {}
 let mutations = {}

 const prefetchKeys = async (type, ids) => {
  if (!inTransaction) {
   throw new Error('Cannot prefetch without transaction')
  }
  const typeCache = cache[type] || {}
  const missingIds = ids.filter(id => !(id in typeCache))
  if (missingIds.length) {
   const fetched = await storageHandler.get(type, missingIds)
   cache[type] = { ...typeCache, ...fetched }
  }
 }

 return {
  get: async (type, ids) => {
   if (inTransaction) {
    await prefetchKeys(type, ids)
    return ids.reduce((result, id) => {
     const value = cache[type]?.[id]
     if (value) result[id] = value
     return result
    }, {})
   } else {
    return storageHandler.get(type, ids)
   }
  },
  set: data => {
   if (inTransaction) {
    logger.trace({ types: Object.keys(data) }, 'caching in transaction')
    for (const type in data) {
     cache[type] = { ...cache[type], ...data[type] }
     mutations[type] = { ...mutations[type], ...data[type] }
    }
   } else {
    return storageHandler.set(data)
   }
  },
  isInTransaction: () => inTransaction,
  prefetch: (type, ids) => {
   logger.trace({ type, ids }, 'prefetching')
   return prefetchKeys(type, ids)
  },
  transaction: async operation => {
   if (inTransaction) {
    await operation()
   } else {
    logger.debug('entering transaction')
    inTransaction = true
    try {
     await operation()
     if (Object.keys(mutations).length) {
      logger.debug('committing transaction')
      await storageHandler.set(mutations)
     } else {
      logger.debug('no mutations in transaction')
     }
    } finally {
     inTransaction = false
     cache = {}
     mutations = {}
    }
   }
  },
 }
}

const initAuthSystem = async (sessionId, logger) => {
 let creds
 let isNewAuth = false
 const savedCreds = await getCreds()

 if (!savedCreds) {
  logger.info('Initiating New AuthState.')
 }

 if (!savedCreds && !config.SESSION_ID && config.VPS) {
  logger.info('Generating Qr...')
  creds = initAuthCreds()
 } else if (!savedCreds && config.SESSION_ID) {
  logger.info('loading auth file')
  let fileContent = false
  let errorMessage = ''

  try {
   const response = await getBuffer(sessionId, false)
   fileContent = response.buffer ? response.buffer : response
  } catch (error) {
   errorMessage = error.message
  }

  if (!fileContent) {
   errorMessage = JSON.stringify(errorMessage)
   const currentUrl = extractUrl(errorMessage)
   errorMessage = errorMessage.replace(currentUrl, config.SESSION_ID)
   logger.error(`${errorMessage}\n\n\n${config.SESSION_ID} INVALID SESSION ID, SCAN AGAIN!!!\n`.repeat(3))
   return { state: false }
  } else {
   isNewAuth = true
   const jsonStr = fileContent.toString()
   const json = JSON.parse(jsonStr, BufferJSON.reviver)
   creds = json.auth.creds
   const keys = json.auth.keys

   for (const keyType in keys) {
    for (const keyId in keys[keyType]) {
     await setKeys(keyType, keyId, keys[keyType][keyId])
    }
   }

   await setCreds(creds)
   logger.info('session restored')
  }
 } else if (savedCreds) {
  creds = savedCreds
 } else {
  return { state: false }
 }

 return {
  state: {
   creds,
   keys: {
    get: async (type, ids) => {
     const keyName = KEY_MAP[type] || type
     const result = {}
     await Promise.all(
      ids.map(async id => {
       let value = await getKeys(keyName, id)
       if (type === 'app-state-sync-key' && value) {
        value = WAProto.Message.AppStateSyncKeyData.fromObject(value)
       }
       result[id] = value
      })
     )
     return result
    },
    set: async data => {
     const promises = []
     for (const type in data) {
      const keyName = KEY_MAP[type] || type
      for (const id in data[type]) {
       const value = data[type][id]
       promises.push(value ? setKeys(keyName, id, value) : delKeys(keyName, id))
      }
     }
     await Promise.all(promises)
    },
   },
  },
  saveState: async () => await setCreds(creds),
  isNew: isNewAuth,
 }
}

exports.initAuthSystem = initAuthSystem
exports.createKeyStore = createKeyStore
