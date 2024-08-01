const Config = require('../config')
const { Module } = require('../lib/commands')
const { tlang, prefix } = require('../lib')
const { updateProfilePicture, forwardMessage } = require('../lib')

// Send PTV message of a video
Module(
 {
  name: 'ptv',
  info: 'Send PTV message of video',
  type: 'whatsapp',
 },
 async (bot, message, { cmdName }) => {
  if (!message.quoted) {
   return await message.send('*Please reply to a video message*')
  }
  if (message.quoted.mtype !== 'videoMessage') {
   return await message.send('*Replied message is not a video.*')
  }
  return await forwardMessage(message.chat, bot, message, cmdName)
 }
)

// Save WhatsApp status
Module(
 {
  name: 'save',
  info: 'Save WhatsApp status',
  type: 'whatsapp',
 },
 async (bot, message, { cmdName }) => {
  if (!message.quoted) {
   return await message.send('*Please reply to WhatsApp status*')
  }
  const userJid = await bot.decodeJid(message.user)
  return await forwardMessage(userJid, bot, message, cmdName)
 }
)

// Save message to log number
Module(
 {
  name: 'svmsg',
  info: 'Save message to log number',
  type: 'whatsapp',
 },
 async (bot, message, { cmdName, isCreator }) => {
  if (!isCreator) {
   return await message.send(tlang().owner)
  }
  if (!message.quoted) {
   return await message.send('*Please reply to a message*')
  }
  const userJid = await bot.decodeJid(message.user)
  return await forwardMessage(userJid, bot, message, cmdName)
 }
)

// Automatically handle certain text messages
Module(
 {
  on: 'text',
 },
 async (bot, message, text) => {
  if (message.quoted && message.text.toLowerCase().includes('send')) {
   const userJid = await bot.decodeJid(message.user)
   if (message.quoted.sender === userJid && message.quoted.chat === 'status@broadcast') {
    return await forwardMessage(message.chat, bot, message, 'send')
   }
  }
 }
)

// Set profile picture
Module(
 {
  name: 'spp',
  info: 'Set profile picture',
  type: 'whatsapp',
 },
 async (bot, message) => {
  if (!message.quoted) {
   return await message.reply('*Reply to an image, please*')
  }
  if (message.quoted.mtype !== 'imageMessage') {
   return await message.reply('*Please reply to an image*')
  }
  const userJid = await bot.decodeJid(message.user)
  return await updateProfilePicture(bot, userJid, message, 'setProfilePicture')
 }
)

// Set full screen profile picture
Module(
 {
  name: 'fpp',
  info: 'Set full screen profile picture',
  type: 'whatsapp',
 },
 async (bot, message) => {
  if (!message.quoted) {
   return await message.reply('*Reply to an image, please*')
  }
  if (message.quoted.mtype !== 'imageMessage') {
   return await message.reply('*Please reply to an image*')
  }
  const userJid = await bot.decodeJid(message.user)
  return await updateProfilePicture(bot, userJid, message, 'setFullProfilePicture')
 }
)

// Retrieve quoted message from a replied message
Module(
 {
  name: 'quoted',
  info: 'Get reply message from replied message',
  type: 'user',
 },
 async (bot, message) => {
  if (!message.quoted) {
   return await message.send('*Please reply to a message*')
  }

  let quotedMessage
  try {
   quotedMessage = await bot.serializeM(await message.getQuotedObj())
  } catch (error) {
   console.error('Error retrieving quoted message:', error)
   return
  }

  if (!quotedMessage.quoted) {
   return await message.reply('*Message you replied to does not contain a reply message*')
  }

  await bot.sendMessage(message.chat, {
   react: { text: '✨', key: message.key },
  })

  try {
   const originalMessage = await bot.serializeM(await quotedMessage.getQuotedObj())
   return await bot.copyNForward(message.chat, originalMessage, false)
  } catch (error) {
   console.error('Error forwarding message:', error)
   return await bot.forward(message.chat, quotedMessage.quoted, {}, message)
  }
 }
)

// Get list of all blocked numbers
Module(
 {
  name: 'blocklist',
  info: 'Get list of all blocked numbers',
  type: 'whatsapp',
 },
 async (bot, message, { isCreator }) => {
  if (!isCreator) {
   return await message.reply(tlang().owner)
  }

  try {
   const blockedNumbers = await bot.fetchBlocklist()
   if (blockedNumbers.length === 0) {
    return await message.reply("*You don't have any blocked numbers.*")
   }

   let list = '\n*≡ List*\n\n*_Total Users:* ' + blockedNumbers.length + '_\n\n┌─⊷ \t*BLOCKED USERS*\n'
   blockedNumbers.forEach((number, index) => {
    list += `▢ ${index + 1}:- wa.me/${number.split('@')[0]}\n`
   })
   list += '└───────────'
   return await bot.sendMessage(message.chat, { text: list })
  } catch (error) {
   console.error(error)
   return await message.error(error)
  }
 }
)

// Add readmore in given text (Location)
Module(
 {
  name: 'location',
  info: 'Add readmore in given text',
  type: 'whatsapp',
 },
 async (bot, message, text) => {
  if (!text) {
   return await message.reply(`Provide coordinates to send location\n *Example:* ${prefix}location 24.121231,55.1121221`)
  }

  const [latitude, longitude] = text.split(',').map(parseFloat)
  if (isNaN(latitude) || isNaN(longitude)) {
   return await message.reply('Coordinates not in format, try again.')
  }

  let locationMessage = `*----------LOCATION------------*\nSending location of given data:\nLatitude: ${latitude}\nLongitude: ${longitude}\n${Config.caption}`
  await message.reply(locationMessage)
  return await bot.sendMessage(
   message.chat,
   {
    location: { degreesLatitude: latitude, degreesLongitude: longitude },
   },
   { quoted: message }
  )
 }
)

// Create contact by given name (vCard)
Module(
 {
  name: 'vcard',
  info: 'Create contact by given name',
  type: 'whatsapp',
 },
 async (bot, message, text) => {
  if (!message.quoted) {
   return message.reply('*Please reply to a user with a name*')
  }

  if (!text) {
   return message.reply(`Please provide the user's name\n *Example:* ${prefix}vcard John Doe`)
  }

  const nameParts = text.split(' ')
  if (nameParts.length > 3) {
   text = nameParts.slice(0, 3).join(' ')
  }

  const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${text}\nORG:;\nTEL;type=CELL;type=VOICE;waid=${message.quoted.sender.split('@')[0]}:+${Config.owner[0]}\nEND:VCARD`
  return await bot.sendMessage(message.chat, { contacts: { displayName: text, contacts: [{ vcard: vCard }] } }, { quoted: message })
 }
)
