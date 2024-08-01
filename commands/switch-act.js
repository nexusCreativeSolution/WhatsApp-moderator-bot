const { sck, getAdmin, tlang } = require('../lib')
const { Module } = require('../lib/commands')

Module(
 {
  name: 'act',
  info: 'Switches various functionalities in the group.',
  type: 'mode',
 },
 async (Suhail, msg, text, { isCreator }) => {
  if (!msg.isGroup) return msg.reply(tlang().group)

  const groupAdmins = await getAdmin(Suhail.bot, msg)
  const botNumber = await Suhail.bot.decodeJid(msg.user)
  const isAdmin = msg.isGroup ? groupAdmins.includes(msg.sender) : false

  if (!text) {
   return msg.reply(`Please provide a term like:\n1-antilink\n2-economy\n3-events\n4-nsfw`)
  }

  if (isCreator) {
   console.log('This is a Bot Number in Act Functions')
  } else if (!isAdmin) {
   return msg.reply('This command is only for admins.')
  }

  const validTerms = ['antilink', 'economy', 'events', 'nsfw']
  const term = text.split(' ')[0].toLowerCase()

  if (!validTerms.includes(term)) {
   return msg.reply(`Please provide a valid term like:\n1-antilink\n2-economy\n3-events\n4-nsfw`)
  }

  try {
   const groupSettings = (await sck.findOne({ id: msg.chat })) || new sck({ id: msg.chat }).save()

   if (groupSettings[term] === 'true') {
    return msg.reply(`${term.charAt(0).toUpperCase() + term.slice(1)} was already enabled.`)
   }

   groupSettings[term] = 'true'
   await groupSettings.save()
   return msg.reply(`Successfully enabled ${term.charAt(0).toUpperCase() + term.slice(1)}.`)
  } catch (error) {
   console.error('Error in act module:', error)
   return msg.reply('An error occurred while processing your request.')
  }
 }
)
