const { TelegraPh, bgms, smd } = require('../lib/')
const fs = require('fs-extra')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
async function convertAudioToBlackScreenVideo(_0x21894e, _0x3b05cb) {
 try {
  try {
   fs.unlinkSync(_0x3b05cb)
  } catch (_0x236ec5) {}
  const _0x289fc9 = 'ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ' + _0x21894e
  const { stdout: _0x9e5f68 } = await exec(_0x289fc9)
  const _0x135ef3 = parseFloat(_0x9e5f68)
  try {
   fs.unlinkSync('./blackScreen.mp4')
  } catch (_0x117f0b) {}
  const _0x294e0a = 'ffmpeg -f lavfi -i color=c=black:s=1280x720:d=' + _0x135ef3 + ' -vf "format=yuv420p" ./blackScreen.mp4'
  await exec(_0x294e0a)
  const _0x237292 = 'ffmpeg -i ./blackScreen.mp4 -i ' + _0x21894e + ' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 ' + _0x3b05cb
  await exec(_0x237292)
  console.log('Audio converted to black screen video successfully!')
  return {
   result: true,
  }
 } catch (_0x4745ed) {
  console.error('An error occurred:', _0x4745ed)
  return {
   result: false,
  }
 }
}
smd(
 {
  name: 'bgm',
  info: 'Toggle On/Off to enable/disable bgm',
  type: 'general',
  
 },
 async (_0x40ec17, _0x851f5, _0x2ad928, { isCreator: _0xb6c01a }) => {
  if (!_0xb6c01a) {
   return await _0x851f5.send(tlang().owner)
  }
  let _0x18cfce =
   (await bgms.findOne({
    id: 'Suhail-bgm',
   })) ||
   (await new bgms({
    id: 'Suhail-bgm',
   }).save())
  let _0x31b045 = _0x2ad928.toLowerCase().split()[0]
  if (_0x31b045 === 'on' || _0x31b045 === 'enable' || _0x31b045 === 'act') {
   _0x18cfce.bgm = true
   await _0x18cfce.save()
   return await _0x851f5.reply('*Bgm Succesfully enabled*')
  } else if (_0x31b045 === 'off' || _0x31b045 === 'disable' || _0x31b045 === 'deact') {
   _0x18cfce.bgm = false
   await _0x18cfce.save()
   return await _0x851f5.reply('*Bgm Succesfully deactivated*')
  } else {
   return await _0x851f5.send('*_Toggle on/off to enable/disable Bgm_*')
  }
 }
)
smd(
 {
  name: 'delbgm',
  info: 'create paste of text.',
  type: 'general',
  
 },
 async (_0x14df53, _0x1518ea, _0x24fdcf, { isCreator: _0x55ca27 }) => {
  if (!_0x55ca27) {
   return await _0x1518ea.send(tlang().owner)
  }
  if (!_0x24fdcf) {
   return await _0x1518ea.reply('*Give Me Song Name to Delete From BGM*')
  }
  let _0x414e29 =
   (await bgms.findOne({
    id: 'Suhail-bgm',
   })) ||
   (await new bgms({
    id: 'Suhail-bgm',
   }).save())
  if (_0x414e29.bgmArray.has(_0x24fdcf)) {
   _0x414e29.bgmArray.delete(_0x24fdcf)
   await _0x414e29.save()
   return await _0x1518ea.reply('*Song _' + _0x24fdcf + '_ removed from BGM.*')
  } else {
   return await _0x1518ea.reply("*Name _'" + _0x24fdcf + "'_ does not exist in BGM.*")
  }
 }
)
smd(
 {
  name: 'allbgm',
  info: 'create paste of text.',
  type: 'general',
  
 },
 async (_0x407b1a, _0x537d17, _0x583ab4, { isCreator: _0x4b36dd }) => {
  if (!_0x4b36dd) {
   return await _0x537d17.send(tlang().owner)
  }
  _0x583ab4 = ' *BGM SONG INFORMATION*\n'
  let _0x2bf365 =
   (await bgms.findOne({
    id: 'Suhail-bgm',
   })) ||
   (await new bgms({
    id: 'Suhail-bgm',
   }).save())
  for (const [_0x438c42, _0x52e6c6] of _0x2bf365.bgmArray) {
   _0x583ab4 += '*' + _0x438c42 + ' :* _' + _0x52e6c6 + '_ \n'
  }
  return await _0x537d17.reply(_0x583ab4 === ' *BGM SONG INFORMATION*\n' ? "*_You didn't set any song in bgm yet!!_*" : _0x583ab4)
 }
)
smd(
 {
  name: 'addbgm',
  info: 'create paste of text.',
  type: 'general',
  
 },
 async (_0x57ea48, _0xa0412a, _0x315d42, { isCreator: _0x194d4b }) => {
  if (!_0x194d4b) {
   return await _0xa0412a.send(tlang().owner)
  }
  if (!_0xa0412a.quoted) {
   return await _0xa0412a.reply('Uhh Please, Reply to Audio/Video To Add In Bgm')
  }
  if (!_0x315d42) {
   return await _0xa0412a.reply('Uhh Please give Bgm Song NAme')
  }
  let _0x587fd5 = false
  let _0x14c9cb = ''
  if (_0xa0412a.quoted.mtype == 'videoMessage') {
   _0x14c9cb = await _0x57ea48.bot.downloadAndSaveMediaMessage(_0xa0412a.quoted)
   _0x587fd5 = true
  } else if (_0xa0412a.quoted.mtype == 'audioMessage') {
   _0x587fd5 = false
   let _0xbcd098 = await _0x57ea48.bot.downloadAndSaveMediaMessage(_0xa0412a.quoted, 'audio')
   let _0x5a349b = await convertAudioToBlackScreenVideo(_0xbcd098, './convertedVideo.mp4')
   if (_0x5a349b.result) {
    _0x14c9cb = './convertedVideo.mp4'
   }
  } else {
   return await _0xa0412a.reply('Uhh Please, Reply to Audio/Video To Add In Bgm')
  }
  if (!_0x14c9cb) {
   return await _0xa0412a.reply("There's an Error While Adding Bgm Song")
  }
  let _0x1c8b77 = await TelegraPh(_0x14c9cb)
  let _0x163c5d =
   (await bgms.findOne({
    id: 'Suhail-bgm',
   })) ||
   (await new bgms({
    id: 'Suhail-bgm',
   }).save())
  try {
   _0x163c5d.bgmArray.set(_0x315d42, _0x1c8b77)
   await _0x163c5d.save()
   return await _0xa0412a.reply('*New Song Added in BGM with Name : ' + _0x315d42 + '*')
  } catch (_0x2bd0df) {
   return await _0xa0412a.error(_0x2bd0df)
  }
 }
)
smd(
 {
  on: 'text',
 },
 async (_0x84027c, _0x2e42fa, _0x5466e3) => {
  let _0x5d360f =
   (await bgms.findOne({
    id: 'Suhail-bgm',
   })) ||
   (await new bgms({
    id: 'Suhail-bgm',
   }).save())
  if (_0x5d360f && _0x5d360f.bgm && _0x2e42fa.text) {
   let _0x3f196a = ' ' + _0x2e42fa.text + ' '
   for (const [_0x5cb69f, _0x1853c4] of _0x5d360f.bgmArray) {
    if (_0x3f196a.toLowerCase().includes(_0x5cb69f + ' ')) {
     await _0x2e42fa.sendMessage(_0x2e42fa.chat, {
      audio: {
       url: _0x1853c4,
      },
      mimetype: 'audio/mpeg',
      ptt: true,
      waveform: [99, 75, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 25, 50, 75, 99, 75, 50, 25, 0],
     })
    }
   }
  }
 }
)
