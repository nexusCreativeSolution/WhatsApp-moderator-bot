const epx = require('../lib/scraper')
const { Module } = require('../lib/commands')
const { tlang, Config, sleep } = require('../lib')
const simpleGit = require('simple-git')
const Heroku = require('heroku-client')
const git = simpleGit()

async function updateHerokuApp(heroku = '') {
 try {
  if (heroku === 'no') {
   await git.reset('hard', ['HEAD'])
   await git.pull()
   return '_updated!_\n\n_restarting bot!_'
  } else if (heroku === 'yes') {
   const herokuClient = new Heroku({ token: process.env.HEROKU_API_KEY })
   await git.fetch()
   const commits = await git.log(['main..origin/main'])

   if (commits.total === 0) {
    return '_bot is up to date!_'
   } else {
    const app = await herokuClient.get(`/apps/${process.env.HEROKU_APP_NAME}`)
    const gitUrl = app.git_url.replace('https://', `https://api:${process.env.HEROKU_API_KEY}@`)

    try {
     await git.addRemote('heroku', gitUrl)
    } catch (error) {
     console.error('Heroku remote adding error:', error)
    }

    await git.push('heroku', 'main')
    return '_restarting!_'
   }
  }
 } catch (error) {
  console.error('Error during update:', error)
  return error.message
 }
}

Module(
 {
  name: 'update',
  info: "Shows repo's refreshed commits.",
  type: 'tools',
 },
 async (message, client, match, { isCreator }) => {
  if (!isCreator) {
   return client.reply(tlang().owner)
  }

  let commits = await epx.syncgit()
  if (commits.total === 0) {
   return client.reply('*BOT IS UPTO DATE...!!*')
  }

  let update = `> ${await epx.sync()}`
  await message.bot.sendMessage(client.chat, { match: update }, { quoted: client })

  if (Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY && match === 'start') {
   await client.reply('Heroku Build started...')

   try {
    let updater = await updateHerokuApp('yes')
    return client.reply(updater)
   } catch (error) {
    return client.error(error)
   }
  }
 }
)

Module(
 {
  name: 'updatenow',
  info: "Shows repo's refreshed commits.",
  type: 'tools',
 },
 async (client, { isCreator }) => {
  if (!isCreator) {
   return client.reply('Only Owner Can Use This Command')
  }

  let commits = await epx.syncgit()
  if (commits.total === 0) {
   return client.reply('*YOU HAVE LATEST VERSION INSTALLED!*')
  }

  let update = await epx.sync()
  await client.send(`_Updating!_\n\n> ${update}`)
  await sleep(3000)

  try {
   let res = await updateHerokuApp('no')
   await client.reply(`_updated!_`)
   process.exit(0)
  } catch (error) {
   return client.error(error)
  }
 }
)

Module(
 {
  name: 'restart',
  info: 'To restart bot',
  type: 'tools',
 },
 async (client, { isCreator }) => {
  if (!isCreator) {
   return client.reply(tlang().owner)
  }

  const { exec, exec } = require('child_process')
  client.reply('Restarting')
  exec('pm2 restart all')
 }
)

Module(
 {
  name: 'shutdown',
  info: 'To ShutDown Bot',
  type: 'tools',
 },
 async (client, { isCreator }) => {
  if (!isCreator) {
   return client.reply(tlang().owner)
  }
  exec('pm2 stop all')
 }
)
