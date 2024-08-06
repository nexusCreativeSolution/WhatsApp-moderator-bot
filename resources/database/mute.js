const config = require('../../config')
const { DataTypes } = require('sequelize')

// Mute Model
const MuteModel = config.DATABASE.define('mute', {
 chat: { type: DataTypes.STRING, allowNull: false },
 context: { type: DataTypes.TEXT, allowNull: false },
})

// Schedule Model
const ScheduleModel = config.DATABASE.define('schedule', {
 chat: { type: DataTypes.STRING, allowNull: false },
 time: { type: DataTypes.TEXT, allowNull: false },
 msg: { type: DataTypes.TEXT, allowNull: false },
})

// Mute Operations
exports.setMute = async (chat, type, enabled, hour, minute, message) => {
 const existingMute = await MuteModel.findOne({ where: { chat } })

 if (!existingMute) {
  if (!minute) return false

  const muteData = {
   mute: { hour: '', minute: '', enabled: false, msg: '' },
   unmute: { hour: '', minute: '', enabled: false, msg: '' },
  }

  muteData[type] = {
   hour,
   minute,
   enabled: enabled ?? false,
   msg: message ?? 'null',
  }

  return await MuteModel.create({
   chat,
   context: JSON.stringify(muteData),
  })
 } else {
  const muteContext = JSON.parse(existingMute.context)
  muteContext[type] = {
   hour: hour ?? muteContext[type].hour,
   minute: minute ?? muteContext[type].minute,
   enabled: enabled ?? muteContext[type].enabled,
   msg: message ?? muteContext[type].msg ?? 'null',
  }

  await existingMute.update({
   chat,
   context: JSON.stringify(muteContext),
  })
  return true
 }
}

exports.getMute = async (chat, type) => {
 const mute = await MuteModel.findOne({ where: { chat } })
 if (!mute) return false
 return JSON.parse(mute.context)[type]
}

exports.getAllMute = async () => await MuteModel.findAll()

// Schedule Operations
exports.setScheduleMessage = async (chat, time, messageContext) => {
 chat = chat.trim()
 time = time.trim()

 try {
  const replyMessage = messageContext.reply_message?.message?.message
  let messageType = Object.keys(replyMessage)[0]

  if (messageType === 'conversation') {
   replyMessage.extendedTextMessage = { text: replyMessage[messageType] }
   delete replyMessage.conversation
   messageType = 'extendedTextMessage'
  }

  if (messageType !== 'extendedTextMessage') {
   replyMessage[messageType].contextInfo = {}
  }

  await ScheduleModel.create({
   chat,
   time,
   msg: JSON.stringify(replyMessage),
  })

  return replyMessage
 } catch (error) {
  console.error('Error setting schedule message:', error)
 }
}

const timeRegex = /(\\*\/\d{1,2}|\d{1,2}-\d{1,2}|\d{1,2})/g

exports.getScheduleMessage = async (chat, fullDetails = false) => {
 if (chat) {
  return await ScheduleModel.findOne({ where: { chat } })
 }

 const allSchedules = await ScheduleModel.findAll()

 if (fullDetails) {
  return allSchedules
 }

 return allSchedules.map(schedule => ({
  jid: schedule.chat,
  time: schedule.time.match(timeRegex)?.join('-'),
 }))
}

exports.delScheduleMessage = async (chat, time) => {
 chat = chat.trim()
 time = time.trim()

 const schedule = await ScheduleModel.findOne({ where: { chat, time } })
 if (!schedule) return false

 await schedule.destroy()
 return true
}

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
