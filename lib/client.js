const { tiny } = require('./stylish-font')
const DB = require('../lib/scraper')
const pino = require('pino')
const Config = require('../config.js')
const { Boom } = require('@hapi/boom')
const fs = require('fs-extra')
const FileType = require('file-type')
const path = require('path')
const express = require('express')
const app = express()
let prefix = Config.HANDLERS.includes('null') ? '' : Config.HANDLERS[0]
const mongoose = require('mongoose')
const { writeFile } = require('fs/promises')
const events = require('./commands')
const { exec, spawn, execSync } = require('child_process')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const {
 default: VoidConnect,
 BufferJSON,
 generateLinkPreviewIfRequired,
 WA_DEFAULT_EPHEMERAL,
 proto,
 generateWAMessageContent,
 generateWAMessage,
 AnyMessageContent,
 prepareWAMessageMedia,
 areJidsSameUser,
 getContentType,
 downloadContentFromMessage,
 DisconnectReason,
 useMultiFileAuthState,
 fetchLatestBaileysVersion,
 MessageRetryMap,
 generateForwardMessageContent,
 generateWAMessageFromContent,
 generateMessageID,
 makeInMemoryStore,
 jidDecode,
} = require('@sampandey001/baileys')
const util = require('util')
const Levels = require('discord-xp')
var last_status = []
global.setCmdAlias = {}
try {
 Levels.setURL(mongodb)
 console.log('🌍 Connected to the Suhail Tech Bot DB')
} catch {
 console.log('Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op')
 process.exit(0)
}
const { sck1, RandomXP, sck, Pluginsdb, card } = require('../lib')
const chalk = require('chalk')
const fetch = require('node-fetch')
const axios = require('axios')
const moment = require('moment-timezone')
let { isUrl, sleep, getBuffer, format, parseMention, parsedJid, getRandom, fancy, randomfancy, botpic, tlang } = require('../lib')
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require('performance-now')
global.db = JSON.parse(fs.readFileSync(__dirname + '/database.json'))
var CryptoJS = require('crypto-js')
var prefixRegex = Config.prefix === 'false' || Config.prefix === 'null' ? '^' : new RegExp('^[' + Config.HANDLERS + ']')
let cc = Config.sessionName.replace(/Secktor;;;/gi, '').replace(/Suhail;;;/gi, '')
var suhails = false
async function MakeSession() {
 function _0x4e84eb(_0x5dc332, _0x1a4d7c) {
  return new Promise((_0x5f4e0f, _0x2ac81d) => {
   fs.readFile(_0x1a4d7c, 'utf8', (_0x40eae3, _0x11e2ab) => {
    if (_0x40eae3) {
     _0x5f4e0f(false)
     return
    }
    _0x5f4e0f(_0x11e2ab.includes(_0x5dc332))
   })
  })
 }
 const _0x293bf4 = '/SuhailTechInfo/'
 const _0x24b8fe = await _0x4e84eb(_0x293bf4, './lib/Dockerfile')
 if (_0x24b8fe) {
  console.log('\nVersion Checking SucessFull...\n')
  if (cc.length < 30) {
   const _0xeb96a0 = require('axios')
   let { data: _0x2bed28 } = await _0xeb96a0.get('https://paste.c-net.org/' + cc)
   await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(_0x2bed28), 'utf8')
  } else {
   console.log('\nConnecting To Session...')
   var _0xea7f64 = atob(cc)
   await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', _0xea7f64, 'utf8')
  }
 } else {
  console.log('\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com' + _0x293bf4 + 'Suhail-Md\n')
  process.exit(0)
 }
}
MakeSession()
let Suhail = {
 bot: {},
}
setTimeout(() => {
 const _0xcbb89 = require('moment-timezone')
 async function _0x3285c6() {
  try {
   await mongoose.connect(mongodb)
  } catch {
   console.log('Could not connect with Mongodb.\nCreate free mongoDb URI , see Toturial\n Please visit https://www.youtube.com/watch?v=6rnftFl0fAI')
  }
 }
 _0x3285c6()
 const _0x2c7f8b = makeInMemoryStore({
  logger: pino().child({
   level: 'silent',
   stream: 'store',
  }),
 })
 require('events').EventEmitter.defaultMaxListeners = 600
 const _0x3a90b1 = () => {
  let _0x32c883
  try {
   let _0x3c9aef = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
   _0x32c883 = [_0x3c9aef.currentVersion.replace(/[.]/g, ', ')]
  } catch (_0x127c95) {
   _0x32c883 = [2, 2204, 13]
  }
  return _0x32c883
 }
 let _0x2406d4 = 'invalid'
 const _0x3ef502 = MessageRetryMap || {}
 async function _0x5a42be() {
  let _0x222ca3 = await getBuffer(THUMB_IMAGE)
  const _0x5b147e = __dirname + '/assets/SocialLogo.png'
  await writeFile(_0x5b147e, _0x222ca3)
  global.log0 = fs.readFileSync(__dirname + '/assets/SocialLogo.png')
  const { state: _0x9c99ba, saveCreds: _0x1f3713 } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
  Suhail.bot = VoidConnect({
   logger: pino({
    level: 'fatal',
   }),
   printQRInTerminal: true,
   browser: ['Suhail', 'safari', '1.0.0'],
   fireInitQueries: false,
   shouldSyncHistoryMessage: false,
   downloadHistory: false,
   syncFullHistory: false,
   generateHighQualityLinkPreview: true,
   auth: _0x9c99ba,
   version: (await _0x3a90b1()) || [2, 2242, 6],
   getMessage: async _0xe1b196 => {
    if (_0x2c7f8b) {
     const _0x125b4d = await _0x2c7f8b.loadMessage(_0xe1b196.remoteJid, _0xe1b196.id, undefined)
     return _0x125b4d.message || undefined
    }
    return {
     conversation: 'An Error Occurred, Repeat Command!',
    }
   },
  })
  _0x2c7f8b.bind(Suhail.bot.ev)
  setInterval(() => {
   _0x2c7f8b.writeToFile(__dirname + '/store.json')
  }, 30000)
  Suhail.bot.ev.on('messages.upsert', async _0x5a1902 => {
   const _0x17e341 = await Suhail.bot.decodeJid(Suhail.bot.user.id)
   const _0x865047 = _0x17e341.split('@')[0]
   const _0x2e7d1c = _0x5a1902.messages[0]
   if (!_0x2e7d1c.message) {
    return
   }
   _0x2e7d1c.message = Object.keys(_0x2e7d1c.message)[0] === 'ephemeralMessage' ? _0x2e7d1c.message.ephemeralMessage.message : _0x2e7d1c.message
   if (_0x2e7d1c.key && _0x2e7d1c.key.remoteJid === 'status@broadcast') {
    last_status = _0x2e7d1c
    if (Config.read_status === 'true') {
     await Suhail.bot.readMessages([_0x2e7d1c.key])
    }
    if (Config.save_status === 'true') {
     if (_0x2e7d1c.message.extendedTextMessage) {
      let _0x16a904 = _0x2e7d1c.message.extendedTextMessage.text
      await Suhail.bot.sendMessage(
       _0x17e341,
       {
        text: _0x16a904,
       },
       {
        quoted: _0x2e7d1c,
       }
      )
     } else if (_0x2e7d1c.message.imageMessage) {
      let _0x104f27 = _0x2e7d1c.message.imageMessage.caption
      let _0x267b3a = await Suhail.bot.downloadAndSaveMediaMessage(_0x2e7d1c.message.imageMessage)
      await Suhail.bot.sendMessage(
       _0x17e341,
       {
        image: {
         url: _0x267b3a,
        },
        caption: _0x104f27,
       },
       {
        quoted: _0x2e7d1c,
       }
      )
     } else if (_0x2e7d1c.message.videoMessage) {
      let _0xc0320d = _0x2e7d1c.message.videoMessage.caption
      let _0x2d4378 = await Suhail.bot.downloadAndSaveMediaMessage(_0x2e7d1c.message.videoMessage)
      await Suhail.bot.sendMessage(
       _0x17e341,
       {
        video: {
         url: _0x2d4378,
        },
        caption: _0xc0320d,
       },
       {
        quoted: _0x2e7d1c,
       }
      )
     }
    }
    return
   }
   if (_0x2e7d1c.key && _0x2e7d1c.key.remoteJid === 'status@broadcast') {
    return
   }
   try {
    if (_0x2e7d1c.message.viewOnceMessageV2) {
     return
    }
    let _0x2e8f38 = await smsg(Suhail.bot, JSON.parse(JSON.stringify(_0x2e7d1c)), _0x2c7f8b)
    let _0x38a462 = _0x2e8f38
    if (!_0x2e8f38.message) {
     return
    }
    if (_0x2e8f38.chat.endsWith('broadcast')) {
     return
    }
    let _0x5ac5fa = 'unavailable'
    if (Config.alwaysonline == 'true' || Config.alwaysonline == 'online') {
     _0x5ac5fa = 'available'
    } else if (Config.alwaysonline == 'recording') {
     _0x5ac5fa = 'recording'
    } else if (Config.alwaysonline == 'paused') {
     _0x5ac5fa = 'paused'
    } else if (Config.alwaysonline == 'composing') {
     _0x5ac5fa = 'composing'
    }
    Suhail.bot.sendPresenceUpdate(_0x5ac5fa, _0x2e8f38.chat)
    var { body: _0x50d1c5 } = _0x2e8f38
    const _0x49dff4 = ['923184474176', '923004591719']
    let _0x31c1ed = [_0x865047, ..._0x49dff4, ...global.sudo.split(','), ...global.devs, ...global.owner].map(_0x201e9f => _0x201e9f.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x2e8f38.sender)
    var _0x4f3fe6 = [..._0x49dff4].map(_0x5bc37d => _0x5bc37d.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x2e8f38.sender)
    var _0x4f470e = typeof _0x2e8f38.text == 'string' ? _0x2e8f38.text.trim() : false
    if (_0x4f470e && _0x50d1c5[1] && _0x50d1c5[1] == ' ') {
     _0x50d1c5 = _0x50d1c5[0] + _0x50d1c5.slice(2)
    }
    let _0x31f12b = false
    var _0x35d105 = false
    if (_0x4f470e && Config.HANDLERS.includes('null')) {
     _0x31f12b = true
     _0x35d105 = _0x50d1c5.split(' ')[0].toLowerCase() || false
    } else if (_0x4f470e && !Config.HANDLERS.includes('null')) {
     _0x31f12b = _0x50d1c5 ? prefixRegex.test(_0x50d1c5[0]) : false
     _0x35d105 = _0x31f12b ? _0x50d1c5.slice(1).trim().split(' ')[0].toLowerCase() : false
    } else {
     _0x31f12b = false
    }
    let _0x4309cf = _0x35d105 ? _0x35d105.trim() : ''
    if (_0x4309cf && global.setCmdAlias[_0x4309cf] !== undefined) {
     _0x35d105 = global.setCmdAlias[_0x4309cf]
     _0x31f12b = true
    } else if (_0x2e8f38.mtype == 'stickerMessage') {
     _0x4309cf = 'sticker-' + _0x2e8f38.msg.fileSha256
     if (global.setCmdAlias[_0x4309cf]) {
      _0x35d105 = global.setCmdAlias[_0x4309cf]
      _0x31f12b = true
     }
    }
    const _0x662ea2 = ['120363025246125888@g.us', ...global.blockJids.split(',')]
    const _0x54e15c = ['120363025246125888@g.us', ...global.allowJids.split(',')]
    if (_0x662ea2.includes(_0x2e8f38.chat) && !_0x4f3fe6) {
     return
    }
    if ((!_0x31c1ed && Config.WORKTYPE === 'private' && _0x31f12b && !_0x54e15c.includes(_0x2e8f38.chat)) || _0x2e8f38.isBaileys) {
     _0x31f12b = false
    }
    if (Config.readmessage === 'true' && _0x31f12b) {
     await Suhail.bot.readMessages([_0x2e7d1c.key])
    }
    const _0x3107e0 = _0x2e8f38.body ? _0x50d1c5.trim().split(/ +/).slice(1) : null
    const _0x37c5e1 = _0x2e8f38.quoted ? _0x2e8f38.quoted : _0x2e8f38
    const _0x229a17 = (_0x37c5e1.msg || _0x37c5e1).mimetype || ''
    if (!_0x31c1ed && Config.disablepm === 'true' && _0x31f12b && !_0x2e8f38.isGroup) {
     _0x31f12b = false
    }
    if (!_0x31c1ed) {
     let _0xd3cc96 = await sck1.findOne({
      id: _0x2e8f38.sender,
     })
     if (!_0xd3cc96) {
      _0xd3cc96 = await new sck1({
       id: _0x2e8f38.sender,
       name: _0x2e8f38.pushName,
      }).save()
     }
     if (_0x31f12b && _0xd3cc96.ban !== 'false') {
      _0x31f12b = false
      await _0x2e8f38.reply('*Hii ' + _0x2e8f38.pushName + ',*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._')
     }
     if (_0x2e8f38.isGroup) {
      let _0x40ba19 = await _0x3d7a5b.findOne({
       id: _0x2e8f38.chat,
      })
      if (!_0x40ba19) {
       _0x40ba19 = await new _0x3d7a5b({
        id: _0x2e8f38.chat,
       }).save()
      }
      if (_0x31f12b && _0x40ba19.botenable === 'false') {
       _0x31f12b = false
      }
     }
    }
    if (_0x31f12b) {
     let _0x368916 = events.commands.find(_0x348b89 => _0x348b89.pattern === _0x35d105) || events.commands.find(_0x401a75 => _0x401a75.alias && _0x401a75.alias.includes(_0x35d105))
     if (_0x2e8f38.isGroup && _0x368916) {
      let _0x2b8adf =
       (await _0x3d7a5b.findOne({
        id: _0x2e8f38.chat,
       })) || false
      if (_0x2b8adf) {
       let _0x471a55 = _0x368916.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
       let _0x32164d = new RegExp('\\b' + _0x471a55 + '\\b')
       if (_0x2b8adf.disablecmds !== 'false' && _0x32164d.test(_0x2b8adf.disablecmds)) {
        _0x368916 = false
       }
      }
     }
     if (_0x368916) {
      _0x31c1ed = [_0x865047, ..._0x49dff4, ...global.sudo.split(','), ...global.devs, ...global.owner].map(_0x1d8bd9 => _0x1d8bd9.replace(/[^0-9]/g) + '@s.whatsapp.net').includes(_0x2e8f38.sender)
      if (_0x368916.react) {
       _0x2e8f38.react(_0x368916.react)
      }
      let _0x398713
      var _0x35d105 = _0x368916.pattern
      try {
       _0x398713 = _0x2e8f38.body ? _0x50d1c5.trim().split(/ +/).slice(1).join(' ') : ''
      } catch {
       _0x398713 = ''
      }
      try {
       _0x368916.function(Suhail, _0x2e8f38, _0x398713, {
        cmdName: _0x35d105,
        args: _0x3107e0,
        isCreator: _0x31c1ed,
        body: _0x50d1c5,
        budy: _0x4f470e,
       })
      } catch (_0x77bdcb) {
       console.error('[ERROR] ', _0x77bdcb)
      }
     } else {
      const _0x57f168 = events.commands.find(_0x2c7f5f => _0x2c7f5f.category === _0x35d105) || false
      if (_0x57f168) {
       const _0x45b3e1 = {}
       let _0xbc8130 = ''
       events.commands.map(async (_0x4afbdd, _0x5115b7) => {
        if (_0x4afbdd.dontAddCommandList === false && _0x4afbdd.pattern !== undefined) {
         if (!_0x45b3e1[_0x4afbdd.category]) {
          _0x45b3e1[_0x4afbdd.category] = []
         }
         _0x45b3e1[_0x4afbdd.category].push(_0x4afbdd.pattern)
        }
       })
       for (const _0x57861a in _0x45b3e1) {
        if (_0x35d105 == _0x57861a.toLowerCase()) {
         _0xbc8130 = '┌───〈 ' + _0x57861a + ' Menu  〉───◆\n│╭─────────────···▸\n┴│▸\n'
         for (const _0x451086 of _0x45b3e1[_0x57861a]) {
          _0xbc8130 += '⬡│▸ ' + _0x451086 + '\n'
         }
         _0xbc8130 += '┬│▸\n│╰────────────···▸▸\n└───────────────···▸'
         break
        }
       }
       let _0x3566a8 = await getBuffer(await botpic())
       await _0x2e8f38.send(
        _0x3566a8,
        {
         caption: tiny(_0xbc8130),
        },
        'image'
       )
      }
     }
    }
    events.commands.map(async _0x2dc41f => {
     if (_0x50d1c5 && _0x2dc41f.on === 'body') {
      _0x2dc41f.function(Suhail, _0x2e8f38, _0x50d1c5, {
       args: _0x3107e0,
       isCreator: _0x31c1ed,
       icmd: _0x31f12b,
       body: _0x50d1c5,
       budy: _0x4f470e,
      })
     } else if (_0x2e8f38.text && _0x2dc41f.on === 'text') {
      _0x2dc41f.function(Suhail, _0x2e8f38, _0x50d1c5, {
       args: _0x3107e0,
       isCreator: _0x31c1ed,
       icmd: _0x31f12b,
       body: _0x50d1c5,
       budy: _0x4f470e,
      })
     } else if ((_0x2dc41f.on === 'image' || _0x2dc41f.on === 'photo') && _0x2e8f38.mtype === 'imageMessage') {
      _0x2dc41f.function(Suhail, _0x2e8f38, _0x50d1c5, {
       isCreator: _0x31c1ed,
       body: _0x50d1c5,
       budy: _0x4f470e,
      })
     } else if (_0x2dc41f.on === 'sticker' && _0x2e8f38.mtype === 'stickerMessage') {
      _0x2dc41f.function(Suhail, _0x2e8f38, _0x3107e0, {
       isCreator: _0x31c1ed,
       body: _0x50d1c5,
       budy: _0x4f470e,
      })
     }
    })
    const _0x413fa0 = _0x2e8f38.isGroup ? await Suhail.bot.groupMetadata(_0x2e8f38.chat).catch(_0x5dfebe => {}) : ''
    let _0x9a1dee = ''
    try {
     _0x9a1dee = _0x2e8f38.isGroup ? (_0x413fa0 ? await _0x413fa0.participants : '') : ''
    } catch (_0x366939) {
     return console.log('Group Jid : ', _0x2e8f38.chat, '\n Is Group Info', _0x2e8f38.isGroup, ' \n GroupData : ', _0x413fa0, '\n Group Legnth : ', _0x413fa0.length, '\n& Error Is :  ', _0x366939, '\n========================================')
    }
    const _0xee5cdc = _0x351f7c => {
     a = []
     for (let _0x5ddef2 of _0x351f7c) {
      if (_0x5ddef2.admin == null) {
       continue
      }
      a.push(_0x5ddef2.id)
     }
     return a
    }
    const _0x3bbf93 = _0x2e8f38.isGroup ? await _0xee5cdc(_0x9a1dee) : ''
    const _0x4c54a8 = _0x2e8f38.isGroup ? _0x3bbf93.includes(_0x17e341) : false
    const _0xf1e261 = _0x2e8f38.isGroup ? _0x3bbf93.includes(_0x2e8f38.sender) : false
    if (_0x2e8f38.isGroup && Config.MsgsInLog == 'true') {
     onsole.log('Message in Group\nIn=> ' + _0x413fa0.subject + ' ' + _0x2e8f38.sender + '\nMessage:' + _0x2e8f38.body + '\n===============================')
    }
    if (!_0x2e8f38.isGroup && Config.MsgsInLog == 'true') {
     console.log('Message in Personal\nFrom=> ' + _0x2e8f38.pushName + ' ' + _0x2e8f38.sender + '\nMessage:' + _0x2e8f38.body + '\n===============================')
    }
    setInterval(() => {
     fs.writeFileSync(__dirname + '/database.json', JSON.stringify(global.db, null, 2))
    }, 10000)
    try {
     let _0x2c0c59 = await _0x3d7a5b.findOne({
      id: _0x2e8f38.chat,
     })
     if (_0x2c0c59 && _0x2e8f38.isGroup && !_0xf1e261 && !_0x31c1ed && _0x2e8f38.mtype !== 'reactionMessage') {
      if (_0x2c0c59.antibot === 'true') {
       if (_0x4c54a8 && _0x2e8f38.id.startsWith('BAE')) {
        const _0x102a86 = {
         remoteJid: _0x2e8f38.chat,
         fromMe: false,
         id: _0x2e8f38.id,
         participant: _0x2e8f38.sender,
        }
        await Suhail.bot.sendMessage(_0x2e8f38.chat, {
         delete: _0x102a86,
        })
        await Suhail.bot.groupParticipantsUpdate(_0x2e8f38.chat, [_0x2e8f38.sender], 'remove')
        await _0x2e8f38.send('*_User @' + _0x2e8f38.sender.split('@')[0] + ' kick Due To Antibot!_*\n*_Bot User Not Allowed In Current Group_*', {
         mentions: [_0x2e8f38.sender],
        })
       } else if (!_0x4c54a8 && _0x2e8f38.id.startsWith('BAE')) {
        await _0x2e8f38.reply('*_Uhh Please, Provide Admin Role To Kick Other Bot_*\n*_Or Disable Antibot (On/Off) In Current Group_*')
       }
      }
      if (_0x2c0c59.onlyadmin === 'true') {
       if (_0x4c54a8) {
        const _0x3351ae = {
         remoteJid: _0x2e8f38.chat,
         fromMe: false,
         id: _0x2e8f38.id,
         participant: _0x2e8f38.sender,
        }
        await Suhail.bot.sendMessage(_0x2e8f38.chat, {
         delete: _0x3351ae,
        })
        await Suhail.bot.groupParticipantsUpdate(_0x2e8f38.chat, [_0x2e8f38.sender], 'remove')
        await _0x2e8f38.send('*User @' + _0x2e8f38.sender.split('@')[0] + ' Kick For Sending, Message in Group*', {
         mentions: [_0x2e8f38.sender],
        })
       } else {
        await _0x2e8f38.send('*_Provide admin role to kick Message Senders_*\n*Or _Disable onlyadmin(on/off) in currentchat_*')
       }
      }
      if (_0x2c0c59.antilink !== 'false') {
       const _0x2d3706 = Config.antilink_values ? Config.antilink_values.split(',').filter(_0x1ba2ab => _0x1ba2ab.trim() !== '') : ['https://', 'chat.whatsapp.com', 'fb.com']
       let _0x120b4c = _0x50d1c5.toLowerCase()
       if (_0x2d3706.some(_0x16f371 => _0x120b4c.includes(_0x16f371))) {
        if (!_0x4c54a8) {
         let _0x44c391 = ' *[ Link detected ]*\nUser @' + _0x2e8f38.sender.split('@')[0] + ' detected sending a link.\nPromote ' + Config.botname + ' as admin to ' + (_0x2c0c59.antilink === 'kick' ? 'kick \nlink senders.' : 'delete \nlinks from this Chat') + ' \n'
         await _0x2e8f38.send(_0x44c391, {
          mentions: [_0x2e8f38.sender],
         })
        } else if (_0x2c0c59.antilink === 'delete' || _0x2c0c59.antilink === 'true') {
         await _0x2e8f38.send('*_Link Detected.. Deletion Done!_*')
         await Suhail.bot.sendMessage(_0x2e8f38.chat, {
          delete: _0x2e8f38.key,
         })
        } else if (_0x2c0c59.antilink === 'kick') {
         await _0x2e8f38.send('*_Link Detected!!_*')
         try {
          await Suhail.bot.sendMessage(_0x2e8f38.chat, {
           delete: _0x2e8f38.key,
          })
          await Suhail.bot.groupParticipantsUpdate(_0x2e8f38.chat, [_0x2e8f38.sender], 'remove')
         } catch {
          await _0x2e8f38.send('*Link Detected*\n' + tlang().botAdmin)
         }
        }
       }
      }
     }
    } catch (_0x10634e) {
     console.log('Error From Antilinks : ', _0x10634e)
    }
    const { chatbot: _0x1d9a48 } = require('../lib/')
    let _0x4fb20e =
     (await _0x1d9a48.findOne({
      id: 'chatbot',
     })) ||
     (await new _0x1d9a48({
      id: 'chatbot',
     }).save())
    let _0x44aa29 = _0x4fb20e.worktype
    if (_0x44aa29 === 'true' && !_0x31f12b) {
     console.log('chatbot is on')
     if (_0x2e8f38.key.fromMe) {
      return
     }
     let _0x3eb387 = _0x2e8f38.text.length
     try {
      if (_0x2e8f38.isGroup && !_0x2e8f38.quoted && !_0x31f12b) {
       return
      }
      if (_0x2e8f38.text && !_0x2e8f38.isGroup) {
       if (_0x3eb387 < 100) {
        var _0x3a00c8 = _0x2e8f38.sender.split('@')[0]
        let _0x2c1c56 = require('node-fetch')
        var _0x5e7d70 = _0x4f470e
        let _0x162bb7 = await _0x2c1c56('http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[' + _0x3a00c8 + ']&msg=[' + _0x5e7d70 + ']')
        let _0xfd4616 = await _0x162bb7.json()
        let { cnt: _0x523b6d } = _0xfd4616
        _0x2e8f38.reply(_0x523b6d)
        console.log('CHATBOT RESPONSE\ntext=>' + _0x5e7d70 + '\n\nResponse=>' + _0x523b6d)
        return
       }
       const { Configuration: _0x5f1418, OpenAIApi: _0x38c43f } = require('openai')
       const _0x17bf96 = new _0x5f1418({
        apiKey: Config.OPENAI_API_KEY || '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',
       })
       const _0x53854b = new _0x38c43f(_0x17bf96)
       const _0x2b1637 = await _0x53854b.createCompletion({
        model: 'text-davinci-002',
        prompt: _0x4f470e,
        temperature: 0.5,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ['"""'],
       })
       _0x2e8f38.reply(_0x2b1637.data.choices[0].text)
      } else if (_0x2e8f38.text && !_0x31f12b && _0x2e8f38.isGroup && _0x2e8f38.quoted) {
       let _0x77fd63 = _0x2e8f38.mentionedJid ? _0x2e8f38.mentionedJid[0] : _0x2e8f38.msg.contextInfo.participant || false
       if (_0x77fd63 && !_0x77fd63.includes(_0x17e341)) {
        return
       }
       if (_0x3eb387 < 100) {
        var _0x3a00c8 = _0x2e8f38.sender.split('@')[0]
        let _0x43acfe = require('node-fetch')
        let _0x4b6553 = await _0x43acfe('http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[' + _0x3a00c8 + ']&msg=[' + _0x2e8f38.text + ']')
        let _0x15ff9b = await _0x4b6553.json()
        let { cnt: _0xa63697 } = _0x15ff9b
        console.log(_0xa63697)
        _0x2e8f38.reply(_0xa63697)
        return
       }
       const { Configuration: _0x33151b, OpenAIApi: _0x4e6864 } = require('openai')
       const _0x43eb2b = new _0x33151b({
        apiKey: Config.OPENAI_API_KEY || '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',
       })
       const _0x32efd8 = new _0x4e6864(_0x43eb2b)
       const _0xd9c6bf = await _0x32efd8.createCompletion({
        model: 'text-davinci-002',
        prompt: _0x4f470e,
        temperature: 0.5,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ['"""'],
       })
       _0x2e8f38.reply(_0xd9c6bf.data.choices[0].text)
       _0x2e8f38.reply(_0xd9c6bf.data.text)
      }
      return
     } catch (_0x35a21b) {
      console.log('Error From ChatBot : ', _0x35a21b)
      _0x2e8f38.reply(_0x35a21b.text)
     }
    }
    var _0x540bef = Config.antibadword.split(',')
    _0x540bef.map(async _0x4b011c => {
     if (_0xf1e261 || _0x31c1ed) {
      return
     }
     let _0x44c692 = new RegExp('\\b' + _0x4b011c + '\\b', 'ig')
     let _0x21129c = _0x4f470e.toLowerCase()
     if (_0x44c692.test(_0x21129c)) {
      await new Promise(_0x2d8de7 => setTimeout(_0x2d8de7, 1000))
      try {
       const { warndb: _0x57f904 } = require('.')
       const _0x1a721f = _0xcbb89(_0xcbb89()).format('HH:mm:ss')
       _0xcbb89.tz.setDefault(global.timezone).locale('id')
       await new _0x57f904({
        id: _0x2e8f38.sender.split('@')[0] + 'warn',
        reason: 'For using Bad Word',
        group: _0x413fa0.subject,
        warnedby: tlang().title,
        date: _0x1a721f,
       }).save()
       _0x2e8f38.reply('\n  *_hey ' + _0x2e8f38.pushName + '_*\n\nWarning!! Bad word detected.\ndelete your message.\n')
       sleep(3000)
       await Suhail.bot.sendMessage(_0x2e8f38.chat, {
        delete: _0x2e8f38.key,
       })
      } catch (_0x567ae8) {
       console.log('Error From Bad Words : ', _0x567ae8)
      }
     }
     return
    })
   } catch (_0x57ec97) {
    console.log('500+ Error From Main Entry  : \n', _0x57ec97)
   }
  })
  const { sck: _0x3d7a5b } = require('.')
  async function _0x4a3915(_0x3f4b84, _0x27b954, _0xf64376) {
   let _0x4436c4 = require('node-cron')
   console.log(_0x3f4b84)
   console.log(_0x27b954)
   console.log(_0xf64376)
   let [_0x5069ce, _0x39c6ec] = _0x3f4b84.split(':')
   var _0x291f0f
   if (_0xf64376 === 'mute') {
    _0x291f0f = 'announcement'
   }
   if (_0xf64376 === 'unmute') {
    _0x291f0f = 'not_announcement'
   }
   _0x4436c4.schedule(
    _0x39c6ec + ' ' + _0x5069ce + ' * * *',
    () => {
     ;(async () => {
      return await Suhail.bot.groupSettingUpdate(_0x27b954, _0x291f0f)
     })()
    },
    {
     scheduled: true,
     timezone: global.timezone,
    }
   )
  }
  async function _0x334db1() {
   let _0x253597 = await _0x3d7a5b.find({})
   for (let _0x33b987 = 0; _0x33b987 < _0x253597.length; _0x33b987++) {
    if (_0x253597[_0x33b987].mute === 'false') {
     continue
    }
    if (_0x253597[_0x33b987].mute === undefined) {
     continue
    }
    await _0x4a3915(_0x253597[_0x33b987].mute, _0x253597[_0x33b987].id, 'mute')
   }
  }
  async function _0x2d2666() {
   let _0x101e61 = await _0x3d7a5b.find({})
   for (let _0x2371cf = 0; _0x2371cf < _0x101e61.length; _0x2371cf++) {
    if (_0x101e61[_0x2371cf].unmute === 'false') {
     continue
    }
    if (_0x101e61[_0x2371cf].unmute === undefined) {
     continue
    }
    await _0x4a3915(_0x101e61[_0x2371cf].unmute, _0x101e61[_0x2371cf].id, 'unmute')
   }
  }
  _0x334db1()
  _0x2d2666()
  let _0x5338a2 = {}
  Suhail.bot.ev.on('group-participants.update', async _0xa7c237 => {
   try {
    let _0x12b655 = await Suhail.bot.groupMetadata(_0xa7c237.id)
    var _0x2dd846
    let _0x252224 = _0xa7c237.participants
    for (let _0x25d12f of _0x252224) {
     try {
      _0x2dd846 = await Suhail.bot.profilePictureUrl(_0x25d12f, 'image')
     } catch {
      _0x2dd846 = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg'
     }
     let _0x490959 = await _0x3d7a5b.findOne({
      id: _0xa7c237.id,
     })
     if (_0x490959) {
      let _0x25b9bb = _0x490959.events || 'false'
      try {
       if (_0xa7c237.id === '120363025246125888@g.us') {
        return
       }
      } catch (_0x2eed26) {}
      const _0x1a7470 = _0x12b655.participants.length
      if (_0xa7c237.action == 'add') {
       let _0xbde356 = _0x490959.antifake.replace('!', '') || 'false'
       let _0x5af4db = _0xbde356 === 'false' ? false : _0x25d12f.startsWith(_0xbde356) ? false : true
       if (_0xbde356.toLowerCase() !== 'false' && _0x5af4db) {
        let _0xf10c8c = {
         chat: _0xa7c237.id,
        }
        const { getAdmin: _0x2bec06 } = require('../lib')
        const _0x142878 = await _0x2bec06(Suhail.bot, _0xf10c8c)
        const _0xa12b2a = Suhail.bot.decodeJid(Suhail.bot.user.id)
        const _0x10a7d2 = _0x142878.includes(_0xa12b2a) || false
        if (_0x10a7d2) {
         try {
          await Suhail.bot.groupParticipantsUpdate(_0xa7c237.id, [_0x25d12f], 'remove')
          return await Suhail.bot.sendMessage(_0xa7c237.id, {
           image: {
            url: _0x2dd846,
           },
           caption: '     *[ Anti_Fake Started ]*\n\n ❒ *User @' + _0x25d12f.split('@')[0] + ' _Kick Automatically!_* \n  B\'coz My Owner Activate antifake in this Chat,\nSo NoBody Join except _"' + _0xbde356 + '" country code_.\n\n©' + Config.caption,
           mentions: [_0x25d12f],
          })
         } catch (_0x34e13a) {
          return await Suhail.bot.sendMessage(_0xa12b2a, {
           text: '*[ Anti_fake Error ]*\n\n❲❒❳ *Error While:* In AntiFake For Kicking  user\n❲❒❳ *Group Name:* ' + _0x12b655.subject + '\n❲❒❳ *Error Message:* ' + _0x34e13a + '\n\n' + Config.caption,
          })
         }
        } else {
         return await Suhail.bot.sendMessage(_0xa7c237.id, {
          image: {
           url: _0x2dd846,
          },
          caption:
           '*[ Anti_fake Error ]*\n\n❲❒❳ *Antifake:* _User @' +
           _0x25d12f.split('@')[0] +
           ' Joined Group but not have "' +
           _0xbde356 +
           '" Country_Code_ \n❲❒❳ *Reason:*_Can\'t kick User without getting admin role_\n❲❒❳ *Solution:* _Provide Admin Role First else Disable Antifake_\n\n\n' +
           Config.caption,
          mentions: [_0x25d12f],
         })
        }
       } else if (_0x25b9bb == 'true') {
        hesa = '' + _0x252224
        getnum = _0x12caf7 => {
         return _0x12caf7.replace(/['@s whatsapp.net']/g, ' ')
        }
        resa = '' + getnum(hesa)
        let _0x5c7e0d = _0x490959.welcome
         .replace(/@user/gi, '@' + _0x25d12f.split('@')[0])
         .replace(/@gname/gi, _0x12b655.subject)
         .replace(/@desc/gi, _0x12b655.desc)
         .replace(/@count/gi, _0x1a7470)
        if (/@pp/g.test(_0x5c7e0d)) {
         let _0x1253bd = {
          image: {
           url: _0x2dd846,
          },
          caption: _0x5c7e0d.trim().replace(/@pp/g, ''),
          mentions: [_0x25d12f],
         }
         return await Suhail.bot.sendMessage(_0xa7c237.id, _0x1253bd)
        } else {
         return Suhail.bot.sendMessage(_0xa7c237.id, {
          text: _0x5c7e0d.trim(),
          mentions: [_0x25d12f],
         })
        }
       }
      } else if (_0x25b9bb === 'true' && _0xa7c237.action == 'remove') {
       hesa = '' + _0x252224
       getnum = _0x329541 => {
        return _0x329541.replace(/['@s whatsapp.net']/g, ' ')
       }
       resa = '' + getnum(hesa)
       let _0xac69bb = _0x490959.goodbye
        .replace(/@user/gi, '@' + _0x25d12f.split('@')[0])
        .replace(/@gname/gi, _0x12b655.subject)
        .replace(/@desc/gi, _0x12b655.desc)
        .replace(/@count/gi, _0x1a7470)
       if (/@pp/g.test(_0xac69bb)) {
        let _0x442490 = {
         image: {
          url: _0x2dd846,
         },
         caption: _0xac69bb.trim().replace(/@pp/g, ''),
         mentions: [_0x25d12f],
        }
        return Suhail.bot.sendMessage(_0xa7c237.id, _0x442490)
       } else {
        return Suhail.bot.sendMessage(_0xa7c237.id, {
         text: _0xac69bb.trim(),
         mentions: [_0x25d12f],
        })
       }
      }
      if (_0xa7c237.action == 'promote') {
       let _0x1df6d2 = false
       if (_0x490959.antipromote == 'true') {
        if (_0x5338a2[_0xa7c237.id]) {
         if (_0x5338a2[_0xa7c237.id].previous_Action == 'antidemote') {
          delete _0x5338a2[_0xa7c237.id]
          return
         }
        }
        let _0x212582 = {
         chat: _0xa7c237.id,
        }
        const { getAdmin: _0x2a318c } = require('../lib')
        const _0x1991d4 = await _0x2a318c(Suhail.bot, _0x212582)
        const _0x5e2d0a = Suhail.bot.decodeJid(Suhail.bot.user.id)
        if (_0x5e2d0a === _0x25d12f) {
         return
        }
        const _0x18124e = _0x1991d4.includes(_0x5e2d0a) || false
        if (_0x18124e) {
         try {
          await Suhail.bot.groupParticipantsUpdate(_0xa7c237.id, [_0x25d12f], 'demote')
          _0x5338a2[_0xa7c237.id] = {
           previous_Action: 'antipromote',
          }
          return await Suhail.bot.sendMessage(_0xa7c237.id, {
           image: {
            url: _0x2dd846,
           },
           caption: ' *[ Anti_Promote Started ]*\n\n ❒ *User @' + _0x25d12f.split('@')[0] + " _Demote Automatically!_* \n  B'coz My Owner Activate antipromote in this Chat,\n So NoBody Get Admin Role Without Owner Permission.\n\n" + Config.caption,
           mentions: [_0x25d12f],
          })
         } catch (_0x353d22) {
          return await Suhail.bot.sendMessage(_0x5e2d0a, {
           text: '*[ Anti_Promote Error ]*\n\n❲❒❳ *Error While:* In AntiPromote For Demoting user\n❲❒❳ *Group Name:* ' + _0x12b655.subject + '\n❲❒❳ *Error Message:* ' + _0x353d22 + '\n\n' + Config.caption,
          })
         }
        } else {
         _0x1df6d2 = true
        }
       }
       if (_0x490959.pdm == 'true' || _0x1df6d2 == true) {
        return await Suhail.bot.sendMessage(_0xa7c237.id, {
         image: {
          url: _0x2dd846,
         },
         caption:
          ' *Someone Promote Here*\n     ' +
          (_0x1df6d2 ? "*Note : _I'm Not Admin Here, So I Can't Demote Someone while Anti_Promote Activated_*" : '') +
          '\n                              \n  ❲❒❳ *User:* _@' +
          _0x25d12f.split('@')[0] +
          '_\n❲❒❳ *Position:* _Member -> Admin_\n  ❲❒❳ *Total Members:* _' +
          _0x1a7470 +
          '_Members_\n❲❒❳ *Group Name:* ' +
          _0x12b655.subject +
          '\n     \n\n' +
          Config.caption,
         mentions: [_0x25d12f],
        })
       }
      } else if (_0xa7c237.action == 'demote') {
       let _0x2196e9 = false
       if (_0x490959.antidemote == 'true') {
        if (_0x5338a2[_0xa7c237.id]) {
         if (_0x5338a2[_0xa7c237.id].previous_Action == 'antipromote') {
          delete _0x5338a2[_0xa7c237.id]
          return
         }
        }
        const { getAdmin: _0x566fc6 } = require('../lib')
        let _0x43e57d = {
         chat: _0xa7c237.id,
        }
        const _0x195779 = await _0x566fc6(Suhail.bot, _0x43e57d)
        const _0x424c1e = await Suhail.bot.decodeJid(Suhail.bot.user.id)
        if (_0x424c1e === _0x25d12f) {
         return
        }
        const _0x463e8d = _0x195779.includes(_0x424c1e) || false
        if (_0x463e8d) {
         try {
          await Suhail.bot.groupParticipantsUpdate(_0xa7c237.id, [_0x25d12f], 'promote')
          _0x5338a2[_0xa7c237.id] = {
           previous_Action: 'antidemote',
          }
          return await Suhail.bot.sendMessage(_0xa7c237.id, {
           image: {
            url: _0x2dd846,
           },
           caption: ' *[ Anti_Demote Started ]*\n     \n  ❒ *User @' + _0x25d12f.split('@')[0] + " _Promote Automatically!_*\n      \n_B'coz My Owner Activate Anti_Demote in this Chat,_\n_So NoBody Get Demote Any Admin Without Owner Permission._\n       \n       \n       " + Config.caption,
           mentions: [_0x25d12f],
          })
         } catch (_0x1329d7) {
          return await Suhail.bot.sendMessage(_0x424c1e, {
           text: '*[ Anti_Promote Error ]*\n\n❲❒❳ Error in AntiPromote For Demoting user\n❲❒❳ *Group Name:* ' + _0x12b655.subject + '\n❲❒❳ *Error:* ' + _0x1329d7 + '\n\n©' + Config.caption,
          })
         }
        } else {
         _0x2196e9 = true
        }
       }
       if (_0x490959.pdm == 'true' || _0x2196e9 == true) {
        return Suhail.bot.sendMessage(_0xa7c237.id, {
         image: {
          url: _0x2dd846,
         },
         caption:
          ' *Someone Demote Here*\n' +
          (_0x2196e9 ? "*Note : _I'm Not Admin Here, So I Can't Promote Demoted Person while Anti_Promote Activated_*" : '') +
          '\n\n  ❲❒❳ *User:* _@' +
          _0x25d12f.split('@')[0] +
          '_\n❲❒❳ *Position:* _Admin -> Member_\n  ❲❒❳ *Total Members:* _' +
          _0x1a7470 +
          '_Members_\n❲❒❳ *Group Name:* ' +
          _0x12b655.subject +
          '\n\n\n' +
          Config.caption,
         mentions: [_0x25d12f],
        })
       }
      }
     }
    }
   } catch (_0x1de2be) {
    console.log('Error From Group_Upsert--- \n', _0x1de2be)
   }
  })
  Suhail.bot.lastStatus = async () => {
   console.log('last_status :', last_status)
   return last_status
  }
  Suhail.bot.decodeJid = _0x2f782e => {
   if (!_0x2f782e) {
    return _0x2f782e
   }
   if (/:\d+@/gi.test(_0x2f782e)) {
    let _0x2ee4cc = jidDecode(_0x2f782e) || {}
    return (_0x2ee4cc.user && _0x2ee4cc.server && _0x2ee4cc.user + '@' + _0x2ee4cc.server) || _0x2f782e
   } else {
    return _0x2f782e
   }
  }
  Suhail.bot.ev.on('contacts.upsert', _0x4ed3ca => {
   const _0x5c446d = _0xd7a4e7 => {
    for (const _0x5eed02 of _0xd7a4e7) {
     if (_0x2c7f8b.contacts[_0x5eed02.id]) {
      Object.assign(_0x2c7f8b.contacts[_0x5eed02.id], _0x5eed02)
     } else {
      _0x2c7f8b.contacts[_0x5eed02.id] = _0x5eed02
     }
    }
    return
   }
   _0x5c446d(_0x4ed3ca)
  })
  Suhail.bot.ev.on('contacts.update', async _0x2945ce => {
   for (let _0x4c80e1 of _0x2945ce) {
    let _0x282c61 = Suhail.bot.decodeJid(_0x4c80e1.id)
    sck1
     .findOne({
      id: _0x282c61,
     })
     .then(_0x4d2de0 => {
      try {
       if (!_0x4d2de0) {
        new sck1({
         id: _0x282c61,
         name: _0x4c80e1.notify,
        }).save()
       } else {
        sck1.updateOne(
         {
          id: _0x282c61,
         },
         {
          name: _0x4c80e1.notify,
         }
        )
       }
      } catch (_0x482d33) {
       console.log('Error From Antilinks : ', _0x482d33)
      }
     })
    if (_0x2c7f8b && _0x2c7f8b.contacts) {
     _0x2c7f8b.contacts[_0x282c61] = {
      id: _0x282c61,
      name: _0x4c80e1.notify,
     }
    }
   }
  })
  Suhail.bot.getName = (_0x3823f8, _0x7ae08 = false) => {
   id = Suhail.bot.decodeJid(_0x3823f8)
   _0x7ae08 = Suhail.bot.withoutContact || _0x7ae08
   let _0x2a39e7
   if (id.endsWith('@g.us')) {
    return new Promise(async _0xf832e2 => {
     _0x2a39e7 = _0x2c7f8b.contacts[id] || {}
     if (!_0x2a39e7.name.notify && !_0x2a39e7.subject) {
      _0x2a39e7 = Suhail.bot.groupMetadata(id) || {}
     }
     _0xf832e2(_0x2a39e7.name || _0x2a39e7.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
   } else {
    _0x2a39e7 =
     id === '0@s.whatsapp.net'
      ? {
         id: id,
         name: 'WhatsApp',
        }
      : id === Suhail.bot.decodeJid(Suhail.bot.user.id)
      ? Suhail.bot.user
      : _0x2c7f8b.contacts[id] || {}
   }
   return (_0x7ae08 ? '' : _0x2a39e7.name) || _0x2a39e7.subject || _0x2a39e7.verifiedName || PhoneNumber('+' + _0x3823f8.replace('@s.whatsapp.net', '')).getNumber('international')
  }
  Suhail.bot.sendContact = async (_0x583110, _0x282430, _0x43a43c = '', _0x57ffad = {}) => {
   let _0x3ac412 = []
   for (let _0x3f7084 of _0x282430) {
    _0x3ac412.push({
     displayName: await Suhail.bot.getName(_0x3f7084 + '@s.whatsapp.net'),
     vcard:
      'BEGIN:VCARD\nVERSION:3.0\nN:' +
      (await Suhail.bot.getName(_0x3f7084 + '@s.whatsapp.net')) +
      '\nFN:' +
      global.OwnerName +
      '\nitem1.TEL;waid=' +
      _0x3f7084 +
      ':' +
      _0x3f7084 +
      '\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' +
      global.email +
      '\nitem2.X-ABLabel:GitHub\nitem3.URL:' +
      global.github +
      '\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;' +
      global.location +
      ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
    })
   }
   Suhail.bot.sendMessage(
    _0x583110,
    {
     contacts: {
      displayName: _0x3ac412.length + ' Contact',
      contacts: _0x3ac412,
     },
     ..._0x57ffad,
    },
    {
     quoted: _0x43a43c,
    }
   )
  }
  Suhail.bot.setStatus = _0x19d388 => {
   Suhail.bot.query({
    tag: 'iq',
    attrs: {
     to: '@s.whatsapp.net',
     type: 'set',
     xmlns: 'status',
    },
    content: [
     {
      tag: 'status',
      attrs: {},
      content: Buffer.from(_0x19d388, 'utf-8'),
     },
    ],
   })
   return _0x19d388
  }
  Suhail.bot.serializeM = _0x2fa7b4 => smsg(Suhail.bot, _0x2fa7b4, _0x2c7f8b)
  Suhail.bot.ev.on('connection.update', async _0x11d50b => {
   const { connection: _0x11f9f0, lastDisconnect: _0x3c0189 } = _0x11d50b
   if (_0x11f9f0 === 'connecting') {
    console.log('ℹ️ Connecting to WhatsApp... Please Wait.')
   }
   if (_0x11f9f0 === 'open') {
    const _0x1e7896 = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    console.log('✅ Whatsapp Login Successful!')
    console.log('⬇️ Installing External Plugins...')
    let _0x12f08a = require('axios')
    let _0x58ad6a = await Pluginsdb.find({})
    for (let _0x54fca1 = 0; _0x54fca1 < _0x58ad6a.length; _0x54fca1++) {
     try {
      let _0x35ecd5 = await _0x12f08a.get(_0x58ad6a[_0x54fca1].url)
      let _0x57d599 = _0x35ecd5.data
      await fs.writeFileSync(__dirname + '/../commands/' + _0x58ad6a[_0x54fca1].id + '.js', _0x57d599, 'utf8')
     } catch (_0x99f4d6) {
      console.log(' ℹ️ Plugin "' + _0x58ad6a[_0x54fca1].id + '" not Installed! Remove that plugin from bot.!!!\nError : ' + _0x99f4d6)
     }
    }
    console.log('✅  External Plugins Installed!')
    fs.readdirSync(__dirname + '/../commands').forEach(_0x15c553 => {
     if (path.extname(_0x15c553).toLowerCase() == '.js') {
      require(__dirname + '/../commands/' + _0x15c553)
     }
    })
    let _0x449700 = await _0x3a90b1()
    let _0x50060c = await DB.syncgit()
    let _0x5c5440 =
     '\n╔════◇\n║ 『 *SUHAIL - MD* 』\n║    Prefix : [ ' +
     (prefix === '' ? 'null' : prefix) +
     ' ]\n║    Mode : ' +
     Config.WORKTYPE +
     '\n║    Total Plugins : ' +
     events.commands.length +
     '\n╚════════════════════╝\n     \n╔═════◇\n║『𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗯𝘆 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗶𝗻𝗴』\n║ youtube.com/@suhailtechinfo0\n╚════════════════════╝\n'
    if (_0x50060c.total !== 0 && Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY) {
     _0x5c5440 += '╔═════◇                \n║ 『 𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 』\n║ _You Have New Update For Bot!_\n║ _Update Bot as Soon as Possible!_\n║ *To Update:-  _,Update start_*\n╚════════════════════╝\n'
    }
    console.log(_0x5c5440)
    await Suhail.bot.sendMessage(_0x1e7896, {
     text: _0x5c5440,
    })
   }
   if (_0x11f9f0 === 'close' && _0x3c0189 && _0x3c0189.error && _0x3c0189.error.output.statusCode != 401) {
    console.log('Connection closed with bot. Please put New Session ID again.')
    await sleep(5000)
    _0x5a42be().catch(_0xcdfbed => console.log(_0xcdfbed))
   }
  })
  Suhail.bot.ev.on('creds.update', _0x1f3713)
  Suhail.bot.sendText = (_0x1c60ff, _0x5c9816, _0x464326 = '', _0x5cc477) =>
   Suhail.bot.sendMessage(
    _0x1c60ff,
    {
     text: _0x5c9816,
     ..._0x5cc477,
    },
    {
     quoted: _0x464326,
    }
   )
  Suhail.bot.sendImage = async (_0x57d591, _0x11c5bb, _0x548c5f = '', _0x2a2775 = '', _0x2da98e) => {
   let _0xfbc877 = Buffer.isBuffer(_0x11c5bb) ? _0x11c5bb : /^data:.*?\/.*?;base64,/i.test(_0x11c5bb) ? Buffer.from(_0x11c5bb.split`,`[1], 'base64') : /^https?:\/\//.test(_0x11c5bb) ? await await getBuffer(_0x11c5bb) : fs.existsSync(_0x11c5bb) ? fs.readFileSync(_0x11c5bb) : Buffer.alloc(0)
   return await Suhail.bot.sendMessage(
    _0x57d591,
    {
     image: _0xfbc877,
     caption: _0x548c5f,
     ..._0x2da98e,
    },
    {
     quoted: _0x2a2775,
    }
   )
  }
  Suhail.bot.sendTextWithMentions = async (_0x399aab, _0x52e169, _0x4374ff, _0x57b53f = {}) =>
   Suhail.bot.sendMessage(
    _0x399aab,
    {
     text: _0x52e169,
     contextInfo: {
      mentionedJid: [..._0x52e169.matchAll(/@(\d{0,16})/g)].map(_0x51972e => _0x51972e[1] + '@s.whatsapp.net'),
     },
     ..._0x57b53f,
    },
    {
     quoted: _0x4374ff,
    }
   )
  Suhail.bot.sendImageAsSticker = async (_0x1a0c17, _0x442a5f, _0x4672c4 = {}) => {
   let _0x168383
   if (_0x4672c4 && (_0x4672c4.packname || _0x4672c4.author)) {
    _0x168383 = await writeExifImg(_0x442a5f, _0x4672c4)
   } else {
    _0x168383 = await imageToWebp(_0x442a5f)
   }
   await Suhail.bot.sendMessage(
    _0x1a0c17,
    {
     sticker: {
      url: _0x168383,
     },
     ..._0x4672c4,
    },
    _0x4672c4
   )
  }
  Suhail.bot.sendVideoAsSticker = async (_0x20a11f, _0x1f015f, _0x570ab9 = {}) => {
   let _0x4504fa
   if (_0x570ab9 && (_0x570ab9.packname || _0x570ab9.author)) {
    _0x4504fa = await writeExifVid(_0x1f015f, _0x570ab9)
   } else {
    _0x4504fa = await videoToWebp(_0x1f015f)
   }
   await Suhail.bot.sendMessage(
    _0x20a11f,
    {
     sticker: {
      url: _0x4504fa,
     },
     ..._0x570ab9,
    },
    _0x570ab9
   )
  }
  Suhail.bot.sendMedia = async (_0xe25182, _0x3fe9e6, _0x136bbb = '', _0x3bbf67 = '', _0x557621 = '', _0x438022 = {}) => {
   let _0x4cc709 = await Suhail.bot.getFile(_0x3fe9e6, true)
   let { mime: _0x39e90f, ext: _0x1573ef, res: _0xa93473, data: _0x52fc27, filename: _0x2f7a65 } = _0x4cc709
   if ((_0xa93473 && _0xa93473.status !== 200) || _0x3a61d7.length <= 65536) {
    try {
     throw {
      json: JSON.parse(_0x3a61d7.toString()),
     }
    } catch (_0x401131) {
     if (_0x401131.json) {
      throw _0x401131.json
     }
    }
   }
   let _0x1cc93e = ''
   let _0x49ed20 = _0x39e90f
   let _0x2a0b65 = _0x2f7a65
   if (_0x438022.asDocument) {
    _0x1cc93e = 'document'
   }
   if (_0x438022.asSticker || /webp/.test(_0x39e90f)) {
    let { writeExif: _0x495f19 } = require('./exif')
    let _0x59881b = {
     mimetype: _0x39e90f,
     data: _0x52fc27,
    }
    _0x2a0b65 = await _0x495f19(_0x59881b, {
     packname: _0x438022.packname ? _0x438022.packname : Config.packname,
     author: _0x438022.author ? _0x438022.author : Config.author,
     categories: _0x438022.categories ? _0x438022.categories : [],
    })
    await fs.promises.unlink(_0x2f7a65)
    _0x1cc93e = 'sticker'
    _0x49ed20 = 'image/webp'
   } else if (/image/.test(_0x39e90f)) {
    _0x1cc93e = 'image'
   } else if (/video/.test(_0x39e90f)) {
    _0x1cc93e = 'video'
   } else if (/audio/.test(_0x39e90f)) {
    _0x1cc93e = 'audio'
   } else {
    _0x1cc93e = 'document'
   }
   await Suhail.bot.sendMessage(
    _0xe25182,
    {
     [_0x1cc93e]: {
      url: _0x2a0b65,
     },
     caption: _0x3bbf67,
     mimetype: _0x49ed20,
     fileName: _0x136bbb,
     ..._0x438022,
    },
    {
     quoted: _0x557621,
     ..._0x438022,
    }
   )
   return fs.promises.unlink(_0x2a0b65)
  }
  Suhail.bot.downloadAndSaveMediaMessage = async (_0x552d99, _0x366df4 = 'null', _0x19a4fb = true) => {
   let _0x2b390c = _0x552d99.msg ? _0x552d99.msg : _0x552d99
   let _0x94468e = (_0x552d99.msg || _0x552d99).mimetype || ''
   let _0x17a0c3 = _0x552d99.mtype ? _0x552d99.mtype.replace(/Message/gi, '') : _0x94468e.split('/')[0]
   const _0x382e3c = await downloadContentFromMessage(_0x2b390c, _0x17a0c3)
   let _0x5fb5e9 = Buffer.from([])
   for await (const _0x481463 of _0x382e3c) {
    _0x5fb5e9 = Buffer.concat([_0x5fb5e9, _0x481463])
   }
   let _0xfb862 = await FileType.fromBuffer(_0x5fb5e9)
   let _0x2f43fc = './' + _0x366df4 + '.' + _0xfb862.ext
   await fs.writeFileSync(_0x2f43fc, _0x5fb5e9)
   return _0x2f43fc
  }
  Suhail.bot.forward = async (_0x44a4fd, _0x420c97, _0x3dc497, _0x44ac2f, _0x277dea = true) => {
   let _0x4e0aeb = _0x420c97.mtype
   let _0x5a9032 = {}
   console.log('Forward function Called and Type is : ', _0x4e0aeb)
   if (_0x4e0aeb == 'conversation') {
    _0x5a9032 = {
     text: _0x420c97.text,
     contextInfo: _0x3dc497,
    }
    for (let _0x487466 of parsedJid(_0x44a4fd)) {
     await Suhail.bot.sendMessage(_0x487466, _0x5a9032, {
      quoted: _0x44ac2f,
     })
    }
    return
   }
   const _0x5a4d2c = _0x5f238a => {
    return '' + Math.floor(Math.random() * 10000) + _0x5f238a
   }
   let _0x333822 = _0x420c97.msg ? _0x420c97.msg : _0x420c97
   let _0x25a176 = (_0x420c97.msg || _0x420c97).mimetype || ''
   let _0x112564 = _0x420c97.mtype ? _0x420c97.mtype.replace(/Message/gi, '') : _0x25a176.split('/')[0]
   const _0x227d88 = await downloadContentFromMessage(_0x333822, _0x112564)
   let _0x3d6188 = Buffer.from([])
   for await (const _0x72640f of _0x227d88) {
    _0x3d6188 = Buffer.concat([_0x3d6188, _0x72640f])
   }
   let _0x5aab3e = await FileType.fromBuffer(_0x3d6188)
   let _0x3646eb = await _0x5a4d2c(_0x5aab3e.ext)
   let _0x162a66 = './' + _0x3646eb
   await fs.writeFileSync(_0x162a66, _0x3d6188)
   if (_0x4e0aeb == 'videoMessage') {
    _0x5a9032 = {
     video: fs.readFileSync(_0x162a66),
     mimetype: _0x420c97.mimetype,
     caption: _0x420c97.text,
     contextInfo: _0x3dc497,
    }
   } else if (_0x4e0aeb == 'imageMessage') {
    _0x5a9032 = {
     image: fs.readFileSync(_0x162a66),
     mimetype: _0x420c97.mimetype,
     caption: _0x420c97.text,
     contextInfo: _0x3dc497,
    }
   } else if (_0x4e0aeb == 'audioMessage') {
    _0x5a9032 = {
     audio: fs.readFileSync(_0x162a66),
     mimetype: _0x420c97.mimetype,
     seconds: 200001355,
     ptt: true,
     contextInfo: _0x3dc497,
    }
   } else if (_0x4e0aeb == 'documentWithCaptionMessage' || _0x5aab3e == 'documentMessage') {
    _0x5a9032 = {
     document: fs.readFileSync(_0x162a66),
     mimetype: _0x420c97.mimetype,
     caption: _0x420c97.text,
     contextInfo: _0x3dc497,
    }
   } else {
    fs.unlink(_0x162a66, _0x1fbe76 => {
     if (_0x1fbe76) {
      console.error('Error deleting file:', _0x1fbe76)
     } else {
      console.log('File deleted successfully')
     }
    })
   }
   for (let _0x6ef85a of parsedJid(_0x44a4fd)) {
    try {
     await Suhail.bot.sendMessage(_0x6ef85a, _0x5a9032, {
      quoted: _0x44ac2f,
     })
    } catch (_0xb9c35) {}
   }
   return fs.unlink(_0x162a66, _0x10605e => {
    if (_0x10605e) {
     console.error('Error deleting file:', _0x10605e)
    } else {
     console.log('File deleted successfully')
    }
   })
  }
  Suhail.bot.downloadMediaMessage = async _0x1230d8 => {
   let _0x5690ce = (_0x1230d8.msg || _0x1230d8).mimetype || ''
   let _0x253b00 = _0x1230d8.mtype ? _0x1230d8.mtype.replace(/Message/gi, '') : _0x5690ce.split('/')[0]
   const _0x59fa04 = await downloadContentFromMessage(_0x1230d8, _0x253b00)
   let _0x17023c = Buffer.from([])
   for await (const _0x17de2b of _0x59fa04) {
    _0x17023c = Buffer.concat([_0x17023c, _0x17de2b])
   }
   return _0x17023c
  }
  Suhail.bot.copyNForward = async (_0x472d5e, _0x17c32d, _0x4ff68e = false, _0x290a1a = {}) => {
   let _0x51c99a
   if (_0x290a1a.readViewOnce) {
    _0x17c32d.message = _0x17c32d.message && _0x17c32d.message.ephemeralMessage && _0x17c32d.message.ephemeralMessage.message ? _0x17c32d.message.ephemeralMessage.message : _0x17c32d.message || undefined
    _0x51c99a = Object.keys(_0x17c32d.message.viewOnceMessage.message)[0]
    delete (_0x17c32d.message && _0x17c32d.message.ignore ? _0x17c32d.message.ignore : _0x17c32d.message || undefined)
    delete _0x17c32d.message.viewOnceMessage.message[_0x51c99a].viewOnce
    _0x17c32d.message = {
     ..._0x17c32d.message.viewOnceMessage.message,
    }
   }
   let _0x5e5796 = Object.keys(_0x17c32d.message)[0]
   let _0x87a614 = await generateForwardMessageContent(_0x17c32d, _0x4ff68e)
   let _0x453918 = Object.keys(_0x87a614)[0]
   let _0x3d9331 = {}
   if (_0x5e5796 != 'conversation') {
    _0x3d9331 = _0x17c32d.message[_0x5e5796].contextInfo
   }
   _0x87a614[_0x453918].contextInfo = {
    ..._0x3d9331,
    ..._0x87a614[_0x453918].contextInfo,
   }
   const _0x2e43ad = await generateWAMessageFromContent(
    _0x472d5e,
    _0x87a614,
    _0x290a1a
     ? {
        ..._0x87a614[_0x453918],
        ..._0x290a1a,
        ...(_0x290a1a.contextInfo
         ? {
            contextInfo: {
             ..._0x87a614[_0x453918].contextInfo,
             ..._0x290a1a.contextInfo,
            },
           }
         : {}),
       }
     : {}
   )
   await Suhail.bot.relayMessage(_0x472d5e, _0x2e43ad.message, {
    messageId: _0x2e43ad.key.id,
   })
   return _0x2e43ad
  }
  Suhail.bot.sendFileUrl = async (_0x3f591f, _0x105507, _0x17ba06, _0x1348e2, _0x3153f6 = {}) => {
   let _0x228d75 = ''
   let _0x2b502f = await axios.head(_0x105507)
   _0x228d75 = _0x2b502f.headers['content-type']
   if (_0x228d75.split('/')[1] === 'gif') {
    return Suhail.bot.sendMessage(
     _0x3f591f,
     {
      video: await getBuffer(_0x105507),
      caption: _0x17ba06,
      gifPlayback: true,
      ..._0x3153f6,
     },
     {
      quoted: _0x1348e2,
      ..._0x3153f6,
     }
    )
   }
   let _0x1f9b1d = _0x228d75.split('/')[0] + 'Message'
   if (_0x228d75 === 'application/pdf') {
    return Suhail.bot.sendMessage(
     _0x3f591f,
     {
      document: await getBuffer(_0x105507),
      mimetype: 'application/pdf',
      caption: _0x17ba06,
      ..._0x3153f6,
     },
     {
      quoted: _0x1348e2,
      ..._0x3153f6,
     }
    )
   }
   if (_0x228d75.split('/')[0] === 'image') {
    return Suhail.bot.sendMessage(
     _0x3f591f,
     {
      image: await getBuffer(_0x105507),
      caption: _0x17ba06,
      ..._0x3153f6,
     },
     {
      quoted: _0x1348e2,
      ..._0x3153f6,
     }
    )
   }
   if (_0x228d75.split('/')[0] === 'video') {
    return Suhail.bot.sendMessage(
     _0x3f591f,
     {
      video: await getBuffer(_0x105507),
      caption: _0x17ba06,
      mimetype: 'video/mp4',
      ..._0x3153f6,
     },
     {
      quoted: _0x1348e2,
      ..._0x3153f6,
     }
    )
   }
   if (_0x228d75.split('/')[0] === 'audio') {
    return Suhail.bot.sendMessage(
     _0x3f591f,
     {
      audio: await getBuffer(_0x105507),
      caption: _0x17ba06,
      mimetype: 'audio/mpeg',
      ..._0x3153f6,
     },
     {
      quoted: _0x1348e2,
      ..._0x3153f6,
     }
    )
   }
  }
  Suhail.bot.cMod = (_0x2ce3e4, _0x5447f2, _0x269b0b = '', _0x54f381 = Suhail.bot.user.id, _0xff8345 = {}) => {
   let _0x33c39e = Object.keys(_0x5447f2.message)[0]
   let _0x5babb7 = _0x33c39e === 'ephemeralMessage'
   if (_0x5babb7) {
    _0x33c39e = Object.keys(_0x5447f2.message.ephemeralMessage.message)[0]
   }
   let _0x56b1ad = _0x5babb7 ? _0x5447f2.message.ephemeralMessage.message : _0x5447f2.message
   let _0x3444fb = _0x56b1ad[_0x33c39e]
   if (typeof _0x3444fb === 'string') {
    _0x56b1ad[_0x33c39e] = _0x269b0b || _0x3444fb
   } else if (_0x3444fb.caption) {
    _0x3444fb.caption = _0x269b0b || _0x3444fb.caption
   } else if (_0x3444fb.text) {
    _0x3444fb.text = _0x269b0b || _0x3444fb.text
   }
   if (typeof _0x3444fb !== 'string') {
    _0x56b1ad[_0x33c39e] = {
     ..._0x3444fb,
     ..._0xff8345,
    }
   }
   if (_0x5447f2.key.participant) {
    _0x54f381 = _0x5447f2.key.participant = _0x54f381 || _0x5447f2.key.participant
   } else if (_0x5447f2.key.participant) {
    _0x54f381 = _0x5447f2.key.participant = _0x54f381 || _0x5447f2.key.participant
   }
   if (_0x5447f2.key.remoteJid.includes('@s.whatsapp.net')) {
    _0x54f381 = _0x54f381 || _0x5447f2.key.remoteJid
   } else if (_0x5447f2.key.remoteJid.includes('@broadcast')) {
    _0x54f381 = _0x54f381 || _0x5447f2.key.remoteJid
   }
   _0x5447f2.key.remoteJid = _0x2ce3e4
   _0x5447f2.key.fromMe = _0x54f381 === Suhail.bot.user.id
   return proto.WebMessageInfo.fromObject(_0x5447f2)
  }
  Suhail.bot.getFile = async (_0xeeb4a7, _0x5443a9) => {
   let _0x34609d
   let _0x3c67a0 = Buffer.isBuffer(_0xeeb4a7)
    ? _0xeeb4a7
    : /^data:.*?\/.*?;base64,/i.test(_0xeeb4a7)
    ? Buffer.from(_0xeeb4a7.split`,`[1], 'base64')
    : /^https?:\/\//.test(_0xeeb4a7)
    ? await (_0x34609d = await getBuffer(_0xeeb4a7))
    : fs.existsSync(_0xeeb4a7)
    ? ((_0x252e41 = _0xeeb4a7), fs.readFileSync(_0xeeb4a7))
    : typeof _0xeeb4a7 === 'string'
    ? _0xeeb4a7
    : Buffer.alloc(0)
   let _0x538241 = (await FileType.fromBuffer(_0x3c67a0)) || {
    mime: 'application/octet-stream',
    ext: '.bin',
   }
   let _0x252e41 = path.join(__filename, __dirname + new Date() * 1 + '.' + _0x538241.ext)
   if (_0x3c67a0 && _0x5443a9) {
    fs.promises.writeFile(_0x252e41, _0x3c67a0)
   }
   return {
    res: _0x34609d,
    filename: _0x252e41,
    size: await getSizeMedia(_0x3c67a0),
    ..._0x538241,
    data: _0x3c67a0,
   }
  }
  Suhail.bot.sendFile = async (_0x1e44f6, _0x24792c, _0x437022, _0x1e0427 = {}, _0x2aaf4a = {}) => {
   let _0x5ee0c9 = await Suhail.bot.getFile(_0x24792c, true)
   let { filename: _0x531d8a, size: _0x3324d6, ext: _0x3ce91d, mime: _0x269c68, data: _0x1056a3 } = _0x5ee0c9
   let _0x4eebb7 = ''
   let _0xdd1f7b = _0x269c68
   let _0x4fdaf8 = _0x531d8a
   if (_0x2aaf4a.asDocument) {
    _0x4eebb7 = 'document'
   }
   if (_0x2aaf4a.asSticker || /webp/.test(_0x269c68)) {
    let { writeExif: _0x37c5f1 } = require('./exif.js')
    let _0x44cda1 = {
     mimetype: _0x269c68,
     data: _0x1056a3,
    }
    _0x4fdaf8 = await _0x37c5f1(_0x44cda1, {
     packname: Config.packname,
     author: Config.packname,
     categories: _0x2aaf4a.categories ? _0x2aaf4a.categories : [],
    })
    await fs.promises.unlink(_0x531d8a)
    _0x4eebb7 = 'sticker'
    _0xdd1f7b = 'image/webp'
   } else if (/image/.test(_0x269c68)) {
    _0x4eebb7 = 'image'
   } else if (/video/.test(_0x269c68)) {
    _0x4eebb7 = 'video'
   } else if (/audio/.test(_0x269c68)) {
    _0x4eebb7 = 'audio'
   } else {
    _0x4eebb7 = 'document'
   }
   await Suhail.bot.sendMessage(
    _0x1e44f6,
    {
     [_0x4eebb7]: {
      url: _0x4fdaf8,
     },
     mimetype: _0xdd1f7b,
     fileName: _0x437022,
     ..._0x2aaf4a,
    },
    {
     quoted: _0x1e0427,
     ..._0x2aaf4a,
    }
   )
   return fs.promises.unlink(_0x4fdaf8)
  }
  Suhail.bot.parseMention = async _0x34201d => {
   return [..._0x34201d.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x3a8ca2 => _0x3a8ca2[1] + '@s.whatsapp.net')
  }
  return Suhail.bot
 }
 _0x5a42be().catch(_0x45c277 => console.log(_0x45c277))
 const _0xee637d =
  '\n     <!DOCTYPE html>\n     <html>\n       <head>\n         <title>Suhail-Md</title>\n         <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>\n         <script>\n           setTimeout(() => {\n             confetti({\n               particleCount: 100,\n               spread: 70,\n               origin: { y: 0.6 },\n               disableForReducedMotion: true\n             });\n           }, 500);\n         </script>\n         <style>\n           @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");\n           @font-face {\n             font-family: "neo-sans";\n             src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");\n             font-style: normal;\n             font-weight: 700;\n           }\n           html {\n             font-family: neo-sans;\n             font-weight: 700;\n             font-size: calc(62rem / 16);\n           }\n           body {\n             background: white;\n           }\n           section {\n             border-radius: 1em;\n             padding: 1em;\n             position: absolute;\n             top: 50%;\n             left: 50%;\n             margin-right: -50%;\n             transform: translate(-50%, -50%);\n           }\n         </style>\n       </head>\n       <body>\n         <section>\n           Thanks to "Suhail Tech Info" for Suhail-Md!\n         </section>\n       </body>\n     </html>\n     '
 app.get('/', (_0x1a095f, _0x281d4d) => _0x281d4d.type('html').send(_0xee637d))
 app.listen(port, () => console.log('Suhail Server listening on port http://localhost:' + port + '!'))
 let _0x3a61d7 = require.resolve(__filename)
 fs.watchFile(_0x3a61d7, () => {
  fs.unwatchFile(_0x3a61d7)
  console.log('Update ' + __filename)
  delete require.cache[_0x3a61d7]
  require(_0x3a61d7)
 })
}, 3000)
function atob(_0x56f51e) {
 return Buffer.from(_0x56f51e, 'base64').toString('binary')
}
