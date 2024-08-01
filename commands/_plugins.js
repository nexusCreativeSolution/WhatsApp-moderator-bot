const { exec } = require('child_process')
const { plugins, tlang } = require('../lib')
const { Module } = require('../lib/commands')

Module(
 {
  name: 'plugins',
  type: 'owner',
  info: 'Shows list of all externally installed modules',
 },
 async (message, match, { isCreator }) => {
  if (!isCreator) {
   return message.send(tlang().owner)
  }
  let plugin = await plugins('plugins', match)
  return await message.send(!plugin ? `_No Plugins Found!_` : !match ? `_Installed Plugins!_\n\n${plugin}` : plugin)
 }
)

Module(
 {
  name: 'remove',
  type: 'owner',
  info: 'removes external modules.',
 },
 async (message, match, { isCreator }) => {
  if (!isCreator) {
   return message.reply(tlang().owner)
  }
  if (!match) {
   return await message.reply('_provide plugin name!_')
  }
  if (match === 'all') {
   return await message.reply(await plugins('remove', 'all', __dirname))
  }
  try {
   await message.send(await plugins('remove', match, __dirname), {}, '', message)
   delete require.cache[require.resolve(__dirname + '/' + match + '.js')]
   exec('pm2 restart all')
  } catch (e) {
   console.log('Error while removing plugin\n', e)
  }
 }
)

Module(
 {
  name: 'install',
  type: 'owner',
  info: 'Installs external modules..',
 },
 async (message, match, { isCreator }) => {
  if (!isCreator) {
   return message.reply(tlang().owner)
  }
  let url = match ? match : message.quoted ? message.quoted.match : ''
  if (!url.toLowerCase().includes('https')) {
   return await message.send('_provide plugin uri!_')
  }
  await message.reply(await plugins('install', url, __dirname))
 }
)
