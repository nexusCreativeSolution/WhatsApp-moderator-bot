const { bot, commands } = require('./plugins')
let config = require('../config')
const { getBuffer, decodeJid, parseJid, parsedJid, getJson, isIgUrl, isUrl, getUrl, qrcode, secondsToDHMS, igdl, formatBytes, sleep, clockString, validateQuality, runtime, AddMp3Meta, Bitly, isNumber, getRandom, toAudio, readQr, getLyrics, isAdmin } = require('./functions')
const { serialize, downloadMedia } = require('./serialize')
const Greetings = require('./Greetings')
module.exports = {
 toAudio,
 isPrivate: config.WORK_TYPE.toLowerCase() === 'private',
 Greetings,
 isAdmin,
 serialize,
 getLyrics,
 readQr,
 downloadMedia,
 getRandom,
 bot,
 Exports: bot,
 commands,
 getBuffer,
 decodeJid,
 parseJid,
 parsedJid,
 getJson,
 isIgUrl,
 isUrl,
 getUrl,
 validateQuality,
 qrcode,
 secondsToDHMS,
 formatBytes,
 igdl,
 sleep,
 clockString,
 runtime,
 AddMp3Meta,
 Bitly,
 isNumber,
}
