const { bot, isPrivate } = require('../../lib/')
const { aiImage } = require('../../lib/functions')
bot(
 {
  pattern: 'genimage',
  fromMe: isPrivate,
  desc: 'Generate image from text',
  type: 'image',
 },
 async (message, match) => {
  match = match || message.reply_message.text
  if (!match) return await message.sendMessage(message.jid, 'Provide a text')
  let buff = await aiImage(match)
  if (!Buffer.isBuffer(buff)) return await message.sendMessage(message.jid, buff)
  return await message.sendMessage(
   message.jid,
   buff,
   {
    mimetype: 'image/jpeg',
    caption: 'fx-bot Dall-E Interface',
   },
   'image'
  )
 }
)
