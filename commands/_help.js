const os = require('os')
const moment = require('moment-timezone')
const fs = require('fs')
const Config = require('../config')
const { commands } = require('../lib/commands')
let { fancytext, tlang, tiny, runtime, formatp, send, botpic, prefix, sck1, smd } = require('../lib')
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')
const util = require('util')
const config = require('../config')

//---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'setcmd',
  info: 'To check ping',
  type: 'general',
 },
 async (Suhail, msg, text, { isCreator }) => {
  if (!isCreator) {
   return await msg.reply(tlang().owner)
  }
  if (!text) {
   return await msg.send('*_Please provide cmd name by replying a Sticker_*')
  }
  let a = text.split(',')
  var cmdName
  var newAlias
  let isSticker = false
  if (msg.quoted) {
   let mime = msg.quoted.mtype
   if (mime == 'stickerMessage' && text) {
    isSticker = true
    cmdName = text.split(' ')[0]
    newAlias = 'sticker-' + msg.quoted.fileSha256
   }
  }
  if (!isSticker && a.length > 1) {
   newAlias = a[0].trim().toLowerCase()
   cmdName = a[1].trim().toLowerCase()
  } else if (!isSticker) {
   return await msg.send('*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*')
  }
  if (newAlias.length < 1) {
   return await msg.reply('*_Uhh Please, Provide New_Cmd Name First_*')
  }
  if (global.setCmdAlias[newAlias]) {
   return await msg.send('*_"' + (isSticker ? 'Given Sticker' : newAlias) + '" Already set for "' + global.setCmdAlias[newAlias] + '" Cmd, Please try another ' + (isSticker ? 'Sticker' : 'Name') + '_*')
  }
  const cmd = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x258c2d => _0x258c2d.pattern === cmdName) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x23f1c1 => _0x23f1c1.alias && _0x23f1c1.alias.includes(cmdName))
  if (cmd) {
   global.setCmdAlias[newAlias] = cmd.pattern
   return await msg.send('*_Cmd "' + global.setCmdAlias[newAlias] + '" Succesfully set to "' + (isSticker ? 'Sticker' : newAlias) + '"._*\n*_These all names are reset, If bot restart_*')
  } else {
   return await msg.send('*_Provided Cmd( ' + cmdName + ') not found in bot cmds. Please Provide Valid cmd Name_*')
  }
 }
)
//---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'delcmd',
  info: 'To check ping',
  type: 'general',
 },
 async (Suhail, msg, text, { isCreator }) => {
  if (!isCreator) {
   return await msg.reply(tlang().owner)
  }
  let Alias = text ? text.split(' ').trim().toLowerCase() : ''
  let isSticker = false
  if (msg.quoted) {
   if (msg.quoted.mtype == 'stickerMessage') {
    isSticker = true
    Alias = 'sticker-' + msg.quoted.fileSha256
   } else if (!text) {
    return await msg.send('*_Please reply to a Sticker that set for a Cmd_*')
   }
  } else if (!text) {
   return await msg.send('*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*')
  }
  if (global.setCmdAlias[Alias]) {
   await msg.send('*_"' + (isSticker ? 'Given Sticker' : Alias) + '" deleted Succesfully at "' + global.setCmdAlias[Alias] + '" cmd_*')
   delete global.setCmdAlias[Alias]
   return
  } else {
   return await msg.send('*_"' + (isSticker ? 'Given Sticker' : Alias) + '" not Set for any cmd._*\n *_Please Provide Valid ' + (isSticker ? 'Sticker' : 'cmd Name') + ' to delete_*')
  }
 }
)

//------------------------------------------------------------------------------------

sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'ping',
  info: 'To check ping',
  type: 'general',
 },
 async (Suhail, citel) => {
  var inital = new Date().getTime()
  const { key } = await citel.reply('*Testing Ping!!!*')
  var final = new Date().getTime()
  return await citel.send(
   '*Pong*\n *' + (final - inital) + ' ms* ',
   {
    edit: key,
   },
   '',
   citel
  )
 }
)
smd(
 {
  name: 'menus',
  info: 'MENU list',
  type: 'general',
  dontAddCommandList: true,
 },
 async (_0x207496, _0x213af9) => {
  try {
   const _0x5dfddc = moment(moment()).format('HH:mm:ss')
   moment.tz.setDefault('' + global.timezone).locale('id')
   const _0x49d829 = moment.tz('' + global.timezone).format('DD/MM/YYYY')
   let _0x450b66 = (
    '\n*🦄 ᴜᴘ ᴛɪᴍᴇ :* ' +
    runtime(process.uptime()) +
    '\n*🍁 ᴛᴏᴅᴀʏ ɪs :* ' +
    _0x49d829 +
    '\n*🎗 ɴᴏᴡ ᴛɪᴍᴇ :* ' +
    _0x5dfddc +
    '\n        \n➮Fᴏᴜɴᴅᴇʀ- SuhailTechInfo𝛁\n➮Oᴡɴᴇʀ - ' +
    Config.ownername +
    '\n➮Nᴜᴍ - ' +
    owner.split(',')[0] +
    '\n➮Mᴇᴍᴏ - ' +
    formatp(os.totalmem() - os.freemem()) +
    '/' +
    formatp(os.totalmem()) +
    '\n    \n *🧑‍💻 :*  Sᴜʜᴀɪʟ-Mᴜʟᴛɪᴅᴇᴠɪᴄᴇ ɪꜱ ɴᴏᴡ Aᴠᴀɪʟᴀʙʟᴇ\n\n' +
    readmore +
    '\n╭──❰ *ALL MENU* ❱\n│🏮 Lɪꜱᴛ\n│🏮 Cᴀᴛᴇɢᴏʀʏ\n│🏮 Hᴇʟᴘ\n│🏮 Aʟɪᴠᴇ\n│🏮 Uᴘᴛɪᴍᴇ\n│🏮 Wᴇᴀᴛʜᴇʀ\n│🏮 Lɪɴᴋ\n│🏮 Cᴘᴜ\n│🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ\n╰─────────────⦁'
   ).trim()
   try {
    return await _0x207496.bot.sendMessage(_0x213af9.chat, {
     image: {
      url: await botpic(),
     },
     caption: _0x450b66,
    })
   } catch {
    return await send(_0x213af9, _0x450b66, {}, '', _0x213af9)
   }
  } catch {}
 }
)
smd(
 {
  name: 'category',
  alias: ['categories', 'ctgry'],
  info: 'category list',
  type: 'general',
  dontAddCommandList: true,
 },
 async (_0x50b2c8, _0x3c91d0) => {
  try {
   const { commands: _0x58e4f6 } = require('../lib')
   const _0x3b5e61 = {}
   _0x58e4f6.map(async (_0x505a28, _0x27fc98) => {
    if (_0x505a28.dontAddCommandList === false && _0x505a28.pattern !== undefined) {
     if (!_0x3b5e61[_0x505a28.category]) {
      _0x3b5e61[_0x505a28.category] = []
     }
     _0x3b5e61[_0x505a28.category].push(_0x505a28.pattern)
    }
   })
   let _0x18a6b4 = '╭───《 *CATEGORY LIST* 》───⊷\n'
   for (const _0x54e2d7 in _0x3b5e61) {
    _0x18a6b4 += '│ *' + tiny(_0x54e2d7.toLowerCase() + ' menu') + '* \n'
   }
   _0x18a6b4 += '╰━━━━━━━━━━━━━━──⊷\n\n'
   try {
    return await _0x50b2c8.bot.sendMessage(_0x3c91d0.chat, {
     image: {
      url: await botpic(),
     },
     caption: _0x18a6b4,
    })
   } catch {
    return await send(_0x3c91d0, _0x18a6b4, {}, '', _0x3c91d0)
   }
  } catch {}
 }
)
//------------------------------------------------------------------------------------

sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'help',
  alias: ['menu'],
  info: 'Help list',
  type: 'general',
 },
 async (Suhail, msg, text) => {
  if (text.split(' ')[0]) {
   const cmdName = text.split(' ')[0].toLowerCase()
   const cmd = commands.find(c => c.pattern === cmdName)

   if (cmd) {
    const arr = []
    arr.push(`*🍁Command:* ${cmd.pattern}`)
    if (cmd.category) arr.push(`*🧩type:* ${cmd.category}`)
    if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`)
    if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias.join(', ')}`)
    if (cmd.usage) arr.push(`*〽️Usage:*\n\`\`\`${cmd.usage}\`\`\``)

    return await msg.reply(arr.join('\n'))
   }
  }

  let up_up, up_mid, up_btm, ctgry_L, ctgry_R, cmd_L, ctgry_end
  let default_menu = 0

  if (!Config.menu) {
   default_menu = Math.floor(Math.random() * 3) + 1
  }

  if (default_menu === 1 || Config.menu.startsWith('1') || Config.menu.toLowerCase().includes('1')) {
   up_up = `┏━━⟪ *${Config.botname}* ⟫━━⦿`
   up_mid = '┃ ✗'
   up_btm = '┗━━━━━━━━━━━━━━━⦿'
   ctgry_L = '╭────《  '
   ctgry_R = '  》────⊷'
   cmd_L = '├ '
   ctgry_end = '╰━━━━━━━━━━━━━━──⊷'
  } else if (default_menu === 2 || Config.menu.startsWith('2') || Config.menu.toLowerCase().includes('2')) {
   up_up = `┌───═[ *${Config.botname}* ]═──▸`
   up_mid = '⬡│▸'
   up_btm = '└───────────────···▸'
   ctgry_L = '┌───〈'
   ctgry_R = '〉───◆'
   cmd_L = '⬡│▸ '
   ctgry_end = '┬│▸\n│╰────────────···▸\n└───────────────···▸'
  } else {
   up_up = `╭────❏ *${Config.botname}* ❏`
   up_mid = '│ │'
   up_btm = '╰───────────────────❏'
   ctgry_L = '╭────❏'
   ctgry_R = '❏'
   cmd_L = '│'
   ctgry_end = '╰───────────────────'
  }

  const cmds = {}
  commands.forEach(command => {
   if (command.dontAddCommandList === false && command.pattern) {
    if (!cmds[command.category]) cmds[command.category] = []
    cmds[command.category].push(command.pattern)
   }
  })

  const time = moment().format('HH:mm:ss')
  const date = moment().format('DD/MM/YYYY')

  let str = `${up_up}\n${up_mid} Uptime:- ${runtime(process.uptime())}\n${up_mid} Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n${up_mid} Time:- ${time}\n${up_mid} Date:- ${date}\n${up_btm}\n\n`

  for (const category in cmds) {
   str += `${ctgry_L} *${category}* ${ctgry_R}\n`
   cmds[category].forEach(plugin => {
    str += `${cmd_L} ${plugin}\n`
   })
   str += `${ctgry_end}\n`
  }

  str += Config.footer

  const buttonMessaged = {
   image: { url: await botpic() },
   caption: str,
   footer: tlang().footer,
   headerType: 4,
  }

  try {
   return await Suhail.bot.sendMessage(msg.chat, buttonMessaged, { quoted: msg })
  } catch {
   return await send(msg, str, {}, '', msg)
  }
 }
)

//---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'list',
  info: 'list menu',
  type: 'general',
  react: '🥀',
 },
 async (Suhail, msg) => {
  const { commands } = require('../lib')
  let str = `
  ╭━━〘 *${Config.botname}* 〙────⊷     
  ┃ ✭ Theme: ${tlang().title}
  ┃ ✭ Prefix: ${prefix}
  ┃ ✭ Owner: ${Config.ownername}
  ┃ ✭ Commands: ${commands.length}
  ┃ ✭ Uptime: ${runtime(process.uptime())}
  ┃ ✭ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
  ╰━━━━━━━━━━━━━━⊷\n`
  for (let i = 0; i < commands.length; i++) {
   if (commands[i].pattern == undefined) {
    continue
   }
   str += `*${i + 1} ${fancytext(commands[i].pattern, 1)}*\n` // ${i+1}
   str += `  ${fancytext(commands[i].desc, 1)}\n`
  }

  //str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
  try {
   return await msg.sendMessage(msg.chat, {
    image: {
     url: THUMB_IMAGE,
    },
    caption: str + Config.caption,
   })
  } catch {
   return await send(citel, str, {}, '', citel)
  }
 }
)
//---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'owner',
  info: 'To check ping',
  type: 'general',
  //react: "💜",
 },
 async (Suhail, msg) => {
  const vcard = 'BEGIN:VCARD\nVERSION:3.0\nFN:' + Config.ownername + '\nORG:;\nTEL;type=CELL;type=VOICE;waid=' + config.OWNER_NUMBER.split(',')[0] + ':+' + config.OWNER_NUMBER.split(',')[0] + '\nEND:VCARD'
  let buttonMessaged = {
   contacts: {
    displayName: Config.ownername,
    contacts: [
     {
      vcard,
     },
    ],
   },
   contextInfo: {
    externalAdReply: {
     title: Config.ownername,
     body: 'Touch here.',
     renderLargerThumbnail: true,
     thumbnailUrl: ``,
     thumbnail: log0,
     mediaType: 1,
     mediaUrl: '',
     sourceUrl: `https://wa.me/+${global.owner.split(',')[0]}?text=Hii+${Config.ownername}`,
    },
   },
  }
  return await Suhail.bot.sendMessage(msg.chat, buttonMessaged, {
   quoted: msg,
  })
 }
)
//------------------------------------------------------------------------------------
const readDirectory = text => {
 return new Promise((resolve, reject) => {
  fs.readdir(text, (err, files) => {
   if (err) {
    reject('Error reading directory')
   } else {
    resolve(files)
   }
  })
 })
}
//------------------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.smd(
 {
  name: 'file',
  info: 'to get extact name where that command is in repo.\nSo user can edit that.',
  type: 'general',
  //react: "✨",
 },
 async (Suhail, msg, text, { isCreator, cmd, cmdName }) => {
  if (!isCreator) {
   return msg.reply(tlang().owner)
  }
  if (!text) {
   return msg.reply('*Uhh PLease, Provide A Command/Directory*')
  }
  if (text.startsWith('.')) {
   let res = '*------------- FILE MANAGER -------------*\n'
   try {
    const files = await readDirectory(text)
    files.forEach(file => {
     res += file + '\n'
    })
    await msg.reply(res.toString())
   } catch (error) {
    await msg.error(error)
   }
   return
  }
  const { commands } = require('../lib')
  let arr = []
  const cmds = commands.find(cmd => cmd.pattern === text.split(' ')[0].toLowerCase())
  if (!cmds) {
   return await msg.reply('*❌No Such commands.*')
  } else {
   arr.push(`*🍁Command:* ${cmds.pattern}`)
  }
  if (cmds.category) {
   arr.push(`*🧩Type:* ${cmds.category}`)
  }
  if (cmds.filename) {
   arr.push(`✨FileName: ${cmds.filename}`)
  }
  return await msg.reply(arr.join('\n'))
 }
)
smd(
 {
  on: 'body',
 },
 async (Suhail, msg, text, { isCreator }) => {
  let Void = Suhail.bot
  let citel = msg
  if (isCreator) {
   if (text.startsWith('>')) {
    let code = text.slice(1)
    if (!code) {
     msg.send('Provide me with a query to run Master!')
    } else {
     try {
      let resultTest = eval(code)
      msg.reply(util.format(resultTest))
     } catch (_0x386c07) {
      msg.reply(util.format(_0x386c07))
     }
    }
   } else if (msg.text.startsWith('$')) {
    console.log('Text : ', text)
    let code = text.slice(1)
    if (!code) {
     msg.send('Provide me with a query to run Master!')
    } else {
     try {
      await eval('const a = async()=>{\n' + code + '\n}\na()')
      await msg.react('🍁')
     } catch (_0x46c8ef) {
      await msg.reply(util.format(_0x46c8ef))
     }
    }
   }
  }
 }
)
