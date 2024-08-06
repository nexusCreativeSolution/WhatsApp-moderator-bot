const plugins = require('../../lib/plugins')
const { bot, isPrivate, clockString, runtime } = require('../../lib')
const { OWNER_NAME, BOT_NAME } = require('../../config')
const { hostname, platform } = require('os')
const config = require('../../config')
const { tiny } = require('../../lib/fancy')
const packageVersion = require('../../package.json').version
bot(
 {
  pattern: 'menu',
  fromMe: isPrivate,
  desc: 'Show All Commands',
  dontAddCommandList: true,
  type: 'user',
 },
 async (message, match) => {
  if (match) {
   for (let i of plugins.commands) {
    if (i.pattern instanceof RegExp && i.pattern.test(message.prefix + match)) {
     const cmdName = i.pattern.toString().split(/\W+/)[1]
     message.reply(`\`\`\`Command: ${message.prefix}${cmdName.trim()}
Description: ${i.desc}\`\`\``)
    }
   }
  } else {
   let { prefix } = message
   let [date, time] = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(',')
   let menu = `\`\`\`╭━━━ ${BOT_NAME} ━━━⊷
┃✷╭──────────────
┃✷│ Prefix: ${prefix}
┃✷│ User: ${message.pushName}
┃✷│ Platform: ${platform}
┃✷│ Date ${date}
┃✷│ Time: ${time}
┃✷│ Plugins: ${plugins.commands.length} 
┃✷│ Uptime: ${runtime(process.uptime())} 
┃✷│ Version: ${packageVersion}
┃✷╰───────────────
╰━━━━━━━━━━━━━━━\`\`\`\n`
   let cmnd = []
   let cmd
   let category = []
   plugins.commands.map((command, num) => {
    if (command.pattern instanceof RegExp) {
     cmd = command.pattern.toString().split(/\W+/)[1]
    }

    if (!command.dontAddCommandList && cmd !== undefined) {
     let type = command.type ? command.type.toLowerCase() : 'misc'

     cmnd.push({ cmd, type })

     if (!category.includes(type)) category.push(type)
    }
   })
   cmnd.sort()
   category.sort().forEach(categories => {
    menu += `\n╭─❏ \`\`\`${tiny(categories)}\`\`\` ❏`
    let comad = cmnd.filter(({ type }) => type == categories)
    comad.forEach(({ cmd }) => {
     menu += `\n│  _${tiny(cmd.trim())}_ `
    })
    menu += `\n╰─────────────────`
   })

   menu += `\n`
   menu += `_🔖Send ${prefix}menu <command name> to get detailed information of a specific command._\n*📍Eg:* _${prefix}menu plugin_`
   return await message.sendMessage(message.jid, menu)
  }
 }
)

bot(
 {
  pattern: 'list',
  fromMe: isPrivate,
  desc: 'Show All Commands',
  type: 'user',
  dontAddCommandList: true,
 },
 async (message, match, { prefix }) => {
  let menu = '\t\t```Command List```\n'

  let cmnd = []
  let cmd, desc
  plugins.commands.map(command => {
   if (command.pattern) {
    cmd = command.pattern.toString().split(/\W+/)[1]
   }
   desc = command.desc || false

   if (!command.dontAddCommandList && cmd !== undefined) {
    cmnd.push({ cmd, desc })
   }
  })
  cmnd.sort()
  cmnd.forEach(({ cmd, desc }, num) => {
   menu += `\`\`\`${(num += 1)} ${cmd.trim()}\`\`\`\n`
   if (desc) menu += `Use: \`\`\`${desc}\`\`\`\n\n`
  })
  menu += ``
  return await message.reply(menu)
 }
)
