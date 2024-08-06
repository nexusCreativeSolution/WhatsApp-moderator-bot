const { SESSION_ID } = require('../config')
const { setSession, getSession, delSession } = require('../resources/database/session')
const { proto, initAuthCreds, BufferJSON } = require('@whiskeysockets/baileys')

const MultiFileAuthState = async () => {
 const saveSession = (data, key) => {
  return setSession(JSON.stringify(data, BufferJSON.replacer), key, SESSION_ID)
 }

 const loadSession = async key => {
  try {
   const sessionData = await getSession(key, SESSION_ID)
   return JSON.parse(sessionData, BufferJSON.reviver)
  } catch (error) {
   return null
  }
 }

 const removeSession = async key => {
  try {
   await delSession(key, SESSION_ID)
  } catch (error) {
   /** Handle Silently & Gracefully */
  }
 }

 const credentials = (await loadSession('creds.json')) || initAuthCreds()

 return {
  state: {
   creds: credentials,
   keys: {
    get: async (prefix, keys) => {
     const result = {}
     await Promise.all(
      keys.map(async key => {
       let data = await loadSession(`${prefix}-${key}.json`)
       if (prefix === 'app-state-sync-key' && data) {
        data = proto.Message.AppStateSyncKeyData.fromObject(data)
       }
       result[key] = data
      })
     )
     return result
    },
    set: async data => {
     const tasks = []
     for (const prefix in data) {
      for (const key in data[prefix]) {
       const value = data[prefix][key]
       const sessionKey = `${prefix}-${key}.json`
       tasks.push(value ? saveSession(value, sessionKey) : removeSession(sessionKey))
      }
     }
     await Promise.all(tasks)
    },
   },
  },
  saveCreds: () => {
   return saveSession(credentials, 'creds.json')
  },
 }
}

module.exports = {
 MultiFileAuthState,
}
