const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname + '/config.env' })

global.mongodb = process.env.MONGODB_URI || ''
global.port = 5000
global.audio = ''
global.video = ''
global.blockJids = process.env.BLOCK_JID || '120363023983262391@g.us'
global.allowJids = process.env.ALLOW_JID || '120363022922797633@g.us'
global.email = 'samsamsun789@gmail.com'
global.location = 'Lahore Pakistan'
global.timezone = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' // add your username
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '923184474176'
global.devs = '923184474176' //Dont change it From here
global.github = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md'
global.scan = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1'
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg'
module.exports = {
 sessionName: process.env.SESSION_ID || '',
 botname: process.env.BOT_NAME || 'sᴜʜᴀɪʟ-ᴍᴅ',
 botbgm: process.env.BOT_BGM || 'false',
 ownername: process.env.OWNER_NAME || `It'x Suhail`,
 author: process.env.PACK_AUTHER || '',
 errorChat: process.env.ERROR_CHAT || '',
 read_status: process.env.AUTO_READ_STATUS || 'false',
 save_status: process.env.AUTO_SAVE_STATUS || 'false',
 packname: process.env.PACK_NAME || '',
 autoreaction: process.env.AUTO_REACTION || 'false',
 antibadword: process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
 alwaysonline: process.env.WAPRESENCE || '',
 antifake: process.env.FAKE_COUNTRY_CODE || '212',
 readmessage: process.env.READ_MESSAGE || 'false',
 readcmds: process.env.READ_COMMANDS || 'true',
 OWNER_NUMBER: OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923184474176',
 HANDLERS: process.env.PREFIX || ',',
 warncount: process.env.WARN_COUNT || 3,
 disablepm: process.env.DISABLE_PM || 'false',
 MsgsInLog: process.env.MSGS_IN_LOG || 'false',
 pmMsgsInLog: process.env.PM_MSGS_IN_LOGS || 'false',
 antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
 BRANCH: process.env.BRANCH || 'main',
 HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
 HEROKU_API_KEY: process.env.HEROKU_API_KEY,
 REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || '',
 caption: process.env.CAPTION || '```ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ```',
 OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
 VERSION: process.env.VERSION || 'v.1.0.8',
 LANG: process.env.THEME || 'SUHAIL',
 menu: process.env.MENU || '',
 WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
 KOYEB_API: process.env.KOYEB_API || '',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
 fs.unwatchFile(file)
 console.log(`Update'${__filename}'`)
 delete require.cache[file]
 require(file)
})
