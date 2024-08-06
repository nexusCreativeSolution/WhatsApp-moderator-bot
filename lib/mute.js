const cron = require('node-cron')
const utils = require('./utils')

const taskStore = {
 mute: {},
 unmute: {},
 schedule: [],
}

const { getAllMute, getScheduleMessage, setScheduleMessage } = require('../resources/database/mute')

exports.validateTime = timeString => {
 if (!timeString || !timeString.length) {
  return timeString
 }

 const timeParts = timeString.split('-')
 const cronParts = ['*', '*', '*', '*', '*'].map((part, index) => {
  const timePart = timeParts[index]
  return !timePart || (isNaN(timePart) && !timePart.includes('*/')) ? '*' : timePart.trim()
 })

 const cronString = cronParts.join(' ')
 return cron.validate(cronString) ? cronString : false
}

const scheduleTask = (chatId, type, hour, minute, message) => {
 if (type === 'off') {
  if (!taskStore[type][chatId]) {
   return false
  }
  taskStore[type][chatId].task.stop()
  delete taskStore[type][chatId]
  return true
 }

 const cronExpression = `${minute} ${hour} * * *`
 if (!cron.validate(cronExpression) || (type !== 'mute' && type !== 'unmute')) {
  return
 }

 const task = cron.schedule(
  cronExpression,
  () => {
   console.log(`${type.replace('e', 'ing')} ${chatId}`)
   const action = type === 'mute' ? 'announcement' : 'not_announcement'
   utils.levanter.emit(type, { chat: chatId, msg: message, action })
  },
  {
   scheduled: true,
   timezone: process.env.TZ || 'Asia/Kolkata',
  }
 )

 if (taskStore[type][chatId]) {
  taskStore[type][chatId].task.stop()
  delete taskStore[type][chatId]
 }

 taskStore[type][chatId] = { task }
 return true
}

exports.addTask = scheduleTask

exports.groupMuteTask = async () => {
 const allMuteTasks = await getAllMute()
 for (const task of allMuteTasks) {
  const { mute, unmute } = JSON.parse(task.context)
  if (mute.enabled) {
   scheduleTask(task.chat, 'mute', mute.hour, mute.minute, mute.msg)
  }
  if (unmute.enabled) {
   scheduleTask(task.chat, 'unmute', unmute.hour, unmute.minute, unmute.msg)
  }
 }
}

const emitScheduleEvent = eventData => utils.levanter.emit('schedule', eventData)

const createScheduleTask = async (chatId, cronTime, message, shouldPersist) => {
 if (shouldPersist) {
  message = await setScheduleMessage(chatId, cronTime, message)
 }

 const task = cron.schedule(cronTime, () => emitScheduleEvent({ chat: chatId, msg: message }), {
  scheduled: true,
  timezone: process.env.TZ || 'Asia/Kolkata',
 })

 taskStore.schedule.push({ chat: chatId, time: cronTime, task })
}

exports.scheduleMessageTask = async () => {
 const scheduledMessages = await getScheduleMessage(0, 1)
 for (const msg of scheduledMessages) {
  await createScheduleTask(msg.chat, msg.time, JSON.parse(msg.msg))
 }
}

exports.deleteScheduleTask = async (chatId, cronTime) => {
 const taskIndex = taskStore.schedule.findIndex(task => task.chat === chatId && task.time === cronTime)
 if (taskIndex === -1) {
  return
 }
 taskStore.schedule[taskIndex].task.stop()
 taskStore.schedule.splice(taskIndex, 1)
}

exports.createSchedule = createScheduleTask

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
