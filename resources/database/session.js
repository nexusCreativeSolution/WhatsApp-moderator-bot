const { DataTypes } = require('sequelize')
const config = require('../../config')
const { BufferJSON } = require('baileys')

// Define the 'key' model
const KeyModel = config.DATABASE.define('key', {
 type: { type: DataTypes.STRING },
 key: { type: DataTypes.STRING },
 value: { type: DataTypes.TEXT },
})

// Define the 'cred' model
const CredModel = config.DATABASE.define('cred', {
 type: { type: DataTypes.STRING },
 value: { type: DataTypes.TEXT },
})

// Get the count of keys
exports.getCount = async () => {
 try {
  const count = await KeyModel.count()
  return { count }
 } catch (error) {
  console.error('Error getting count:', error)
  return { count: 0 }
 }
}

// Set credentials
exports.setCreds = async creds => {
 const existingCreds = await CredModel.findAll({ where: { type: 'creds' } })
 const credData = {
  type: 'creds',
  value: JSON.stringify(creds, BufferJSON.replacer),
 }

 if (existingCreds.length === 0) {
  await CredModel.create(credData)
 } else {
  await existingCreds[0].update(credData)
 }
}

// Get credentials
exports.getCreds = async () => {
 const creds = await CredModel.findAll({ where: { type: 'creds' } })
 if (creds.length === 0) return null
 return JSON.parse(creds[0].dataValues.value, BufferJSON.reviver)
}

// Delete credentials
exports.deleteCreds = async () => await CredModel.drop()

// Get keys
exports.getKeys = async (type, key) => {
 const keys = await KeyModel.findAll({ where: { type, key } })
 if (keys.length === 0) return null
 return JSON.parse(keys[0].dataValues.value, BufferJSON.reviver)
}

// Set keys
exports.setKeys = async (type, key, value) => {
 const existingKeys = await KeyModel.findAll({ where: { type, key } })
 const keyData = {
  type,
  key,
  value: JSON.stringify(value, BufferJSON.replacer),
 }

 if (existingKeys.length === 0) {
  await KeyModel.create(keyData)
 } else {
  await existingKeys[0].update(keyData)
 }
}

// Delete specific keys
exports.delKeys = async (type, key) => {
 const keys = await KeyModel.findAll({ where: { type, key } })
 if (keys.length > 0) {
  await keys[0].destroy()
 }
}

// Delete all keys
exports.deleteKeys = async () => await KeyModel.drop()

// Restore all keys
exports.restoreKeys = async () => await KeyModel.findAll({ where: {} })

// Note: The following function is an obfuscated anti-debugging mechanism.
// It's generally not recommended to include such code in production environments.
// I've left it commented out for reference, but it's advisable to remove it.

/*
function antiDebug(trigger) {
  function nestedFunction(counter) {
    if (typeof counter === "string") {
      return function () {}.constructor("while (true) {}").apply("counter");
    } else if (('' + counter / counter).length !== 1 || counter % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    nestedFunction(++counter);
  }
  
  try {
    if (trigger) {
      return nestedFunction;
    } else {
      nestedFunction(0);
    }
  } catch (error) {}
}
*/
