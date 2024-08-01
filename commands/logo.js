const { textToLogoGenerator, prefix } = require('../lib')
const { Module } = require('../lib/commands')
Module(
 {
  name: 'slice',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-light-glow-sliced-text-effect-online-1068', match)
 }
)

Module(
 {
  name: 'glow',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'free-advanced-glow-text-effect-873', text)
 }
)

Module(
 {
  name: 'gitch1',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-impressive-glitch-text-effects-online-1027', text)
 }
)

Module(
 {
  name: 'steal',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, '3d-steel-text-effect-877', text1, text2)
 }
)

Module(
 {
  name: 'avenger',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'create-3d-avengers-logo-online-974', text1, text2)
 }
)

Module(
 {
  name: 'marvel',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  ///if (!text) return args.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'create-logo-style-marvel-studios-ver-metal-972', text1, text2)
 }
)

Module(
 {
  name: 'phub',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'pornhub-style-logo-online-generator-free-977', text1, text2)
 }
)
Module(
 {
  name: 'glitch',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'create-glitch-text-effect-style-tik-tok-983', text1, text2)
 }
)

Module(
 {
  name: 'glitch2',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-glitch-text-effect-online-free-1026', text1, text2)
 }
)

Module(
 {
  name: 'grafiti',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  let text1 = text ? text.split(';')[0] : ''
  let text2 = text ? text.split(';')[1] : ''
  if (!text2 || !text1) {
   return await args.reply(`*_Example : ${prefix + cmdName} text1;text2_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-cool-graffiti-text-on-the-wall-1010', text1, text2)
 }
)
Module(
 {
  name: 'deepsea',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-3d-deep-sea-metal-text-effect-online-1053', text)
 }
)

Module(
 {
  name: 'horror',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'horror-blood-text-effect-online-883', text)
 }
)

Module(
 {
  name: 'whitebear',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'online-black-and-white-bear-mascot-logo-creation-1012', text)
 }
)

Module(
 {
  name: 'joker',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-logo-joker-online-934', text)
 }
)

Module(
 {
  name: 'metallic',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-metallic-text-effect-free-online-1041', text)
 }
)

Module(
 {
  name: 'steel',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'steel-text-effect-online-921', text)
 }
)

Module(
 {
  name: 'harrypotter',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-harry-potter-text-effect-online-1025', text)
 }
)

Module(
 {
  name: 'underwater',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, '3d-underwater-text-effect-generator-online-1013', text)
 }
)

Module(
 {
  name: 'luxury',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, '3d-luxury-gold-text-effect-online-1003', text)
 }
)

Module(
 {
  name: 'glue',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-3d-glue-text-effect-with-realistic-style-986', text)
 }
)

Module(
 {
  name: 'fabric',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'fabric-text-effect-online-964', text)
 }
)

Module(
 {
  name: 'toxic',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'toxic-text-effect-online-901', text)
 }
)

Module(
 {
  name: 'ancient',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, '3d-golden-ancient-text-effect-online-free-1060', text)
 }
)

Module(
 {
  name: 'cloud',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-cloud-text-effect-on-the-sky-online-1004', text)
 }
)

Module(
 {
  name: 'transformer',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-transformer-text-effect-online-1035', text)
 }
)

Module(
 {
  name: 'thunder',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'online-thunder-text-effect-generator-1031', text)
 }
)

Module(
 {
  name: 'scifi',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-3d-sci-fi-text-effect-online-1050', text)
 }
)

Module(
 {
  name: 'sand',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'write-in-sand-summer-beach-free-online-991', text)
 }
)

Module(
 {
  name: 'rainbow',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, '3d-rainbow-color-calligraphy-text-effect-1049', text)
 }
)

Module(
 {
  name: 'pencil',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-sketch-text-effect-online-1044', text)
 }
)

Module(
 {
  name: 'neon',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-3d-neon-light-text-effect-online-1028', text)
 }
)

Module(
 {
  name: 'magma',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, text, { cmdName }) => {
  if (!text) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-a-magma-hot-text-effect-online-1030', text)
 }
)

Module(
 {
  name: 'leaves',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'natural-leaves-text-effect-931', match)
 }
)

Module(
 {
  name: 'discovery',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-space-text-effects-online-free-1042', match)
 }
)

Module(
 {
  name: 'christmas',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'christmas-tree-text-effect-online-free-1057', match)
 }
)

Module(
 {
  name: 'candy',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-christmas-candy-cane-text-effect-1056', match)
 }
)

Module(
 {
  name: '1917',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, '1917-style-text-effect-online-980', match)
 }
)

Module(
 {
  name: 'blackpink',
  type: 'logo',
  info: 'Some text to image feature with various styles.',
 },
 async (message, args, match, { cmdName }) => {
  if (!match) {
   return args.reply(`*_Example : ${prefix + cmdName} bot_*`)
  }
  return await textToLogoGenerator(message, args, 'create-blackpink-logo-style-online-1001', match)
 }
)
