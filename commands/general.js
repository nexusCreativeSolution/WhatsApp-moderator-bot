const { formatp, TelegraPh, botpic, runtime, Config } = require('../lib')
const { bot } = require('../lib/commands')
const axios = require('axios')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')

async function aiResponse(sender, type, message = '') {
 let response = ''

 try {
  if (type === 'gpt') {
   const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
     model: 'gpt-3.5-turbo',
     messages: [
      { role: 'system', content: 'You' },
      { role: 'user', content: message },
     ],
    }),
   })
   const gptData = await gptResponse.json()
   response = gptData.choices && gptData.choices.length > 0 ? gptData.choices[0].message.content : '*Invalid ChatGPT API Key, Please Put New Key*'
  } else if (type === 'dalle') {
   const dalleResponse = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
     model: 'image-alpha-001',
     prompt: message,
     size: '512x512',
     response_format: 'url',
    }),
   })
   const dalleData = await dalleResponse.json()
   response = dalleData.data[0].url
  } else if (type === 'rmbg') {
   const rmbgResponse = await axios.post(
    'https://api.remove.bg/v1.0/removebg',
    {
     image_url: message,
     size: 'auto',
    },
    {
     headers: { 'X-Api-Key': Config.REMOVE_BG_KEY },
     responseType: 'arraybuffer',
    }
   )
   response = Buffer.from(rmbgResponse.data, 'binary')
  }
  return response
 } catch (error) {
  console.error('Error in aiResponse:', error)
  return 'Error While getting AI response'
 }
}

bot(
 {
  name: 'gpt',
  info: 'chat with an AI',
  type: 'ai',
 },
 async (message, match) => {
  if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY.startsWith('sk')) {
   return message.reply('_no api key found!_')
  }
  if (!match) {
   return message.reply(`_${message.pushName} image loading..._`)
  }
  return message.send(await aiResponse(message, 'gpt', match))
 }
)

bot(
 {
  name: 'dalle',
  info: 'chat with an AI',
  type: 'ai',
 },
 async (message, match, args) => {
  if (Config.OPENAI_API_KEY == '' || !Config.OPENAI_API_KEY.startsWith('sk')) {
   return match.reply('_no api key found!_')
  }
  if (!args) {
   return match.reply(`_${message.pushName} provide query!_`)
  }
  return await message.bot.sendMessage(match.chat, { image: { url: await aiResponse(match, 'dalle', args) } })
 }
)

bot(
 {
  name: 'rmbg',
  type: 'ai',
  info: 'Remove image Background.',
 },
 async (message, match) => {
  if (!Config.REMOVE_BG_KEY) {
   return match.reply('_no api key found!_')
  }
  if (!match.quoted) {
   return await match.reply(`_${message.pushName} reply an Image!_`)
  }
  let mime = match.quoted.mtype
  if (mime != 'imageMessage') {
   return await match.reply(`_reply image!_`)
  }
  try {
   let media = await message.bot.downloadAndSaveMediaMessage(match.quoted)
   let anu = await TelegraPh(media)
   try {
    await fs.unlinkSync(media)
   } catch (error) {}
   let response = await aiResponse(match, 'rmbg', anu)
   if (response) {
    await match.send(response, 'image', match)
   } else {
    await match.send('_failed!_')
   }
   return
  } catch (e) {
   return await match.error(e)
  }
 }
)

async function getDateTime() {
 const now = new Date()
 const date = now.toISOString().slice(0, 10)
 const time = now.toLocaleTimeString()
 return {
  date,
  time,
 }
}
///=============================================
bot(
 {
  name: 'uptime',
  alias: ['runtime'],
  info: 'Tells runtime/uptime of bot.',
  type: 'misc',
  filename: __filename,
 },
 async message => {
  const details = runtime(process.uptime())
  message.reply(`_${message.pushName} I'm running since ${details}_`)
 }
)

bot(
 {
  name: 'repo',
  info: 'Sends info about repo',
  type: 'tools',
 },
 async (message, client) => {
  try {
   let { data } = await axios.get('https://github.com/FXastro/bot')
   let repoMsg = `
\t ғx ʙᴏᴛ
sᴛᴀʀs: ${data.stargazers_count} stars
sᴛᴀʀs: ${data.forks_count} forks
ᴀᴜᴛʜᴏʀ: FXastro
ʀᴇᴘᴏ _${github}_
`.trim()
   try {
    return await message.bot.sendMessage(client.chat, { image: { url: await botpic() }, caption: repoMsg }, { quoted: client })
   } catch {
    await client.send(repoMsg)
    ;({})
    ;('')
    return client
   }
  } catch (e) {
   return await client.error(e)
  }
 }
)

bot(
 {
  name: 'cpu',
  info: 'To check bot status',
  type: 'general',
 },
 async msg => {
  try {
   const used = process.memoryUsage()
   const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
   })
   const cpu = cpus.reduce(
    (last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
    },
    {
     speed: 0,
     total: 0,
     times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0,
     },
    }
   )
   timestampe = speed()
   latensie = speed() - timestampe
   var neww = performance.now()
   var oldd = performance.now()
   respon = `*❲❒❳ ${Config.botname} Server Info ❲❒❳*
    
Runtime:* ${runtime(process.uptime())}
Speed:* ${latensie.toFixed(3)}/${(oldd - neww).toFixed(3)} ms
RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
Memory Usage:*
      ${Object.keys(used)
       .map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`)
       .join('\n      ')}
  
${
 cpus[0]
  ? `Total CPU Usage:*
  *${cpus[0].model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times)
       .map(type => `-${(type + '').padEnd(6)}: ${((cpu.times[type] * 100) / cpu.total).toFixed(2)}%`)
       .join('\n      ')}
\nCPU Core Usage (${cpus.length} Core CPU)*
  ${cpus
   .map(
    (cpu, i) => `*Core ${i + 1}: ${cpu.model.trim()} (${cpu.speed} MHZ)*
      ${Object.keys(cpu.times)
       .map(type => `-${(type + '').padEnd(6)}: ${((cpu.times[type] * 100) / cpu.total).toFixed(2)}%`)
       .join('\n      ')}`
   )
   .join('\n\n')}`
  : ''
}
`.trim()
   return await msg.send(respon, {}, '', msg)
  } catch (e) {
   msg.error(e)
  }
 }
)
