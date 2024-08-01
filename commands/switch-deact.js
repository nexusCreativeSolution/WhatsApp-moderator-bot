const { sck, getAdmin, tlang } = require('../lib')
const { Module } = require('../lib/commands')

Module(
 {
  name: 'deact',
  info: 'Switches various functionalities in the group.',
  type: 'mode',
 },
 async (message, match, args, { isCreator }) => {
  if (!match.isGroup) return match.reply(tlang().group)

  const groupAdmins = await getAdmin(message.bot, match)
  const botNumber = await message.bot.decodeJid(match.user)
  const isBotAdmin = match.isGroup ? groupAdmins.includes(botNumber) : false
  const isAdmin = match.isGroup ? groupAdmins.includes(match.sender) : false

  if (!args) {
   return match.reply(`Please provide a term like:\n1-antilink\n2-economy\n3-events\n4-nsfw`)
  }

  if (isCreator) {
   console.log('Bot is the creator.')
  } else if (!isAdmin) {
   return match.reply('This command is only for admins.')
  }

  const validTerms = ['antilink', 'economy', 'events', 'nsfw']
  const term = args.split(' ')[0].toLowerCase()

  if (!validTerms.includes(term)) {
   return match.reply(`Please provide a valid term like:\n1-antilink\n2-economy\n3-events\n4-nsfw`)
  }

  try {
   const groupSettings = (await sck.findOne({ id: match.chat })) || new sck({ id: match.chat }).save()

   if (!groupSettings[term]) {
    groupSettings[term] = 'false'
    await groupSettings.save()
   } else if (groupSettings[term] === 'false') {
    return match.reply(`${term.charAt(0).toUpperCase() + term.slice(1)} was already disabled.`)
   } else {
    groupSettings[term] = 'false'
    await groupSettings.save()
    return match.reply(`Successfully disabled ${term.charAt(0).toUpperCase() + term.slice(1)}.`)
   }
  } catch (error) {
   console.error('Error in deact module:', error)
   return match.reply('An error occurred while processing your request.')
  }
 }
)
