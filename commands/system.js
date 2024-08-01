const { sck1, tlang, fetchJson, botpic, runtime, prefix, Config, sleep, alive } = require('../lib')
const { TelegraPh } = require('../lib/scraper')
const util = require('util')
const fs = require('fs-extra')
const axios = require('axios')
const { Module } = require('../lib/commands')

Module(
 {
  name: 'qr',
  type: 'user',
  info: 'Sends a QR code to scan and retrieve your session ID.',
 },
 async (client, message, match) => {
  if (!match) {
   return message.reply('*Please provide text to generate a QR code.*')
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(match)}`
  const qrMessage = {
   image: { url: qrUrl },
   caption: '*Scan the QR code to retrieve your text*',
   footer: `Session provided by >> ${Config.caption}`,
   headerType: 4,
  }

  return await client.bot.sendMessage(message.chat, qrMessage)
 }
)

Module(
 {
  name: 'rmbg',
  type: 'misc',
  info: 'Remove the background from an image.',
 },
 async (client, message) => {
  if (!message.quoted) {
   return await message.reply('*Please reply to an image to remove the background.*')
  }

  const mimeType = message.quoted.mtype
  if (mimeType !== 'imageMessage') {
   return await message.reply('*Please reply to an image.*')
  }

  const mediaPath = await client.bot.downloadAndSaveMediaMessage(message.quoted)
  const imageURL = await TelegraPh(mediaPath)

  try {
   fs.unlinkSync(mediaPath)
  } catch (error) {
   console.error('Error deleting media file:', error)
  }

  const formData = {
   image_url: imageURL,
   size: 'auto',
  }

  axios
   .post('https://api.remove.bg/v1.0/removebg', formData, {
    headers: {
     'X-Api-Key': Config.REMOVE_BG_KEY,
    },
    responseType: 'arraybuffer',
   })
   .then(response => {
    const removedBgImage = Buffer.from(response.data, 'binary')
    return message.send(removedBgImage, { caption: Config.caption }, 'image')
   })
   .catch(error => {
    console.error('Error removing background:', error)
    return message.send('*Please provide a valid RemoveBg API key.*\n\nYou can obtain the API key from remove.bg and set it in the "REMOVE_BG_KEY" variable.\n\n' + Config.caption)
   })
 }
)

Module(
 {
  name: 'url',
  type: 'misc',
  info: 'image to url.',
 },
 async (client, msg) => {
  if (!msg.quoted) {
   return await msg.reply(`*Reply To Any Image/Video To Get Url*`)
  }
  let mime = msg.quoted.mtype
  if (mime != 'videoMessage' && mime != 'imageMessage') {
   return await msg.reply('Uhh Please, Reply To An Image/Video')
  }
  let media = await client.bot.downloadAndSaveMediaMessage(msg.quoted)
  let anu = await TelegraPh(media)
  await msg.reply(util.format(anu))
  return await fs.unlinkSync(media)
 }
)

Module(
 {
  name: 'trt',
  type: 'misc',
  info: "Translate's given text in desird language.",
 },
 async (msg, text) => {
  if (!text && !msg.quoted) {
   return await msg.reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`)
  }
  const translatte = require('translatte')
  let lang = text ? text.split(' ')[0].toLowerCase() : 'en'
  if (!msg.quoted) {
   text = text.replace(lang, '')
  } else {
   text = msg.quoted.text
  }
  var whole = await translatte(text, {
   from: 'auto',
   to: lang,
  })
  if ('text' in whole) {
   return await msg.reply(whole.text)
  }
 }
)

if (Config.WORKTYPE != 'private') {
 Module(
  {
   name: 'ban',
   type: 'owner',
   info: 'Bans user from using bot.',
  },
  async (client, msg, text, { isCreator }) => {
   if (!isCreator) {
    return msg.reply(tlang().owner)
   }
   try {
    let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid ? msg.mentionedJid[0] : msg.msg.contextInfo.participant || false
    if (!users) {
     return msg.reply(`_mention any user ${tlang().greet}._`)
    }
    let pushnamer = client.bot.getName(users)
    sck1
     .findOne({
      id: users,
     })
     .then(async usr => {
      if (!usr) {
       await new sck1({
        id: users,
        ban: 'true',
       }).save()
       return msg.reply(`_Banned ${usr.name} from Using Commands._`)
      }
      if (usr.ban == 'true') {
       return msg.reply(`${pushnamer} is already Banned from Using Commands`)
      }
      await sck1.updateOne(
       {
        id: users,
       },
       {
        ban: 'true',
       }
      )
      return msg.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
     })
   } catch (e) {
    return msg.reply('*Please Reply/Mention Any User.*')
   }
  }
 )

 Module(
  {
   name: 'unban',
   type: 'misc',
   info: 'Unbans banned user (from using bot).',
  },
  async (client, msg, text, { isCreator }) => {
   if (!isCreator) {
    return msg.reply(`This command is only for my Owner`)
   }
   try {
    let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid ? msg.mentionedJid[0] : msg.msg.contextInfo.participant || false
    if (!users) {
     return msg.reply('Please mention any user.')
    }
    let pushnamer = client.bot.getName(users)
    sck1
     .findOne({
      id: users,
     })
     .then(async usr => {
      if (!usr) {
       return msg.reply(`${pushnamer} is unbanned.`)
      }
      if (usr.ban !== 'true') {
       return await msg.reply(`${usr.name} is already unbanned.`)
      }
      await sck1.updateOne(
       {
        id: users,
       },
       {
        ban: 'false',
       }
      )
      return await msg.reply(`${usr.name} is free as a bird now`)
     })
   } catch {
    return msg.reply('Please mention any user.❌')
   }
  }
 )
}

Module(
 {
  name: 'alive',
  type: 'general',

  info: 'Check if the bot is alive.',
 },
 async (client, message, args, { isCreator }) => {
  let defaultMessage = '*I am online, how can I help you?*\n\n_I am a multi-device WhatsApp bot_\n_Created by: Suhail Tech Info_\n_If you have any queries: wa.me/923184474176_\n\n\n*Update Alive Message by adding text with Alive*\n*Eg: .alive Your_Alive_Message_*'
  let imageURL = ''
  let isImage = false
  let isVideo = false

  if (isCreator && args !== '') {
   let aliveData = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()

   if (args.startsWith('get')) {
    return message.reply(aliveData.get)
   }

   if (args.toLowerCase().startsWith('info') || args.toLowerCase().startsWith('settings')) {
    let settingsMessage = `*Suhail-MD • Alive Message Settings*\n\n*KeyWords for Alive Message:*\n&user : To add user name,\n&uptime: To add bot uptime,\n&line : To add a random pickup line,\n&quote: To add a random quote with author,\n\n*Update Alive by adding text with Alive*\n\`.alive Your_Alive_Message_here\`\n\n*Also add photo and video URLs in Alive*\n\`.alive Your_Alive_Message_here\` https://telegra.ph/file/ec9bc5038601821f2eb84.jpg\n\n*Alive Message With URL And All Keywords*\n\`.alive\` url_here \n\`Hey &user\` 🍂\n\`I Am client-MD, A Multidevice WhatsApp User Bot.\`\nBot alive since \`&uptime\`\n*Quote:* \`&quote\`\n*Pickup Line:* \`&line\`\n\n`
    return await client.bot.sendMessage(
     message.chat,
     {
      image: { url: await botpic() },
      caption: settingsMessage + Config.caption,
     },
     { quoted: message }
    )
   }

   const urlRegex = /(https?:\/\/\S+)/gi
   const imageExtensions = ['.jpg', '.jpeg', '.png']
   const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif']
   let urlMatch = args.match(urlRegex) || false

   if (urlMatch) {
    for (let i = 0; i < urlMatch.length && !isImage && !isVideo; i++) {
     imageURL = urlMatch[i]
     const fileExtension = imageURL.substring(imageURL.lastIndexOf('.')).toLowerCase()
     if (imageExtensions.includes(fileExtension)) {
      isImage = true
      isVideo = false
     } else if (videoExtensions.includes(fileExtension)) {
      isVideo = true
      isImage = false
     } else {
      console.log('Unknown link: ' + imageURL)
     }
    }
   }

   if (isVideo || isImage) {
    args = args.replace(imageURL, '')
   }

   await alive.updateOne(
    { id: 'fx_bot' },
    {
     text: args,
     get: defaultMessage,
     url: imageURL,
     image: isImage,
     video: isVideo,
    }
   )
  }

  let aliveMessage = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()
  let responseText = aliveMessage.text

  if (responseText.includes('&quote')) {
   const quoteResponse = await axios.get('https://favqs.com/api/qotd')
   const quoteText = `${quoteResponse.data.quote.body} By ${quoteResponse.data.quote.author}`
   responseText = responseText.replace('&quote', quoteText)
  }

  responseText = responseText
   .replace('&uptime', runtime(process.uptime()))
   .replace('&user', message.pushName)
   .replace('&line', (await fetchJson('https://api.popcat.xyz/pickuplines')).pickupline)

  isImage = aliveMessage.image || false
  isVideo = aliveMessage.video || false
  imageURL = aliveMessage.url || (await botpic())

  const finalMessage = responseText + '\n\n*Type ' + Config.prefix + 'menu for my command list.*'
  const sendMessageOptions = isImage ? { image: { url: imageURL }, caption: finalMessage } : isVideo ? { video: { url: imageURL }, gifPlayback: true, caption: finalMessage } : { text: finalMessage }

  return client.bot.sendMessage(message.chat, sendMessageOptions, { quoted: message })
 }
)

Module(
 {
  name: 'permit',
  info: 'Enable or disable PM permit',
  type: 'user',
 },
 async (client, message, args, { cmdName, isCreator }) => {
  if (!isCreator) {
   return message.reply(tlang().owner)
  }

  try {
   let permitData = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()

   if (!args) {
    return message.reply(
     `*PmPermit Currently* ${permitData.permit ? 'enabled' : 'disabled'}!!!*\n  *Set to:* \`${permitData.values.toUpperCase()}\`\n\n*Available Cmds:*\`\`\`\n  ${prefix + cmdName} off \n  ${prefix + cmdName} on | all\n  ${prefix + cmdName} on | 212,91\`\`\`\n\n\n${Config.caption}`
    )
   }

   let action = args.toLowerCase().trim()
   let [cmd, countries] = action.split('|').map(s => s.trim())
   countries = countries || ''

   console.log('action:', cmd)
   console.log('countries:', countries)

   const formattedCountries = countries.startsWith('all')
    ? 'all'
    : countries
       .split(',')
       .map(country => parseInt(country))
       .filter(num => !isNaN(num))
       .join(',')

   let updatedCountries = formattedCountries ? formattedCountries : permitData.values

   if (cmd.startsWith('on') || cmd.startsWith('enable') || cmd.startsWith('act')) {
    if (permitData.permit && permitData.values === updatedCountries) {
     return message.reply('*_Uhh Dear, PmPermit Already enabled!_*')
    }

    let previousState = permitData.permit
    await alive.updateOne({ id: 'fx_bot' }, { permit: true, values: updatedCountries })

    return message.reply(`*_PmPermit ${previousState ? 'Updated' : 'Activated'} Successfully!_*\n*_Now ${updatedCountries === 'all' ? 'everyone' : updatedCountries} need permission for pm_*`)
   } else if (cmd.startsWith('off') || cmd.startsWith('disable') || cmd.startsWith('deact')) {
    if (!permitData.permit) {
     return message.reply('*_Uhh Dear, PmPermit Already disabled!_*')
    }

    await alive.updateOne({ id: 'fx_bot' }, { permit: false })

    return message.reply('*_PmPermit deactivated Successfully!!!_*')
   } else {
    return client.bot.sendMessage(message.chat, {
     text: `*PmPermit Currently* ${permitData.permit ? 'enabled' : 'disabled'}!!!*\n*Provide Valid instruction, such as on/off to enable/disable pmPermit.*`,
    })
   }
  } catch (error) {
   await message.error(`${error}\nCommand: ${cmdName}`)
   console.log('error from pmpermit', error)
  }
 }
)

Module(
 {
  name: 'approve',
  info: 'Approve a user for PM',
  type: 'user',
 },
 async (message, { isCreator }) => {
  if (!isCreator) {
   return message.reply(tlang().owner)
  }

  try {
   let permitData = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()

   if (!permitData.permit) {
    return message.sendMessage(message.chat, {
     text: '*_PmPermit disabled, please enable it!!_*',
    })
   }

   if (!message.quoted) {
    return message.reply('*Please reply to a user for action.*')
   }

   let userData = (await sck1.findOne({ id: message.quoted.sender })) || new sck1({ id: message.quoted.sender })

   if (userData.permit === 'true') {
    return message.reply(`*_${userData.name || 'User'} has permission for PM already._*`)
   }

   await sck1.updateOne({ id: message.quoted.sender }, { permit: 'true', times: 0 })

   return message.reply(`*_Permitted ${userData.name || 'User'} for PM._*`)
  } catch (error) {
   await message.error(`${error}\nCommand: approve `)
   console.log('error from approve', error)
  }
 }
)

Module(
 {
  name: 'disapprove',
  info: 'Disapproves a user for PM',
  type: 'user',
 },
 async (message, { isCreator }) => {
  if (!isCreator) {
   return message.reply(tlang().owner)
  }

  try {
   let permitData = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()

   if (!permitData.permit) {
    return message.sendMessage(message.chat, {
     text: '*_PmPermit disabled, please enable it!!_*',
    })
   }

   if (!message.quoted) {
    return message.reply('*Please reply to a user for action.*')
   }

   let userData = (await sck1.findOne({ id: message.quoted.sender })) || new sck1({ id: message.quoted.sender })

   await sck1.updateOne({ id: message.quoted.sender }, { permit: 'false', times: 0 })

   return message.reply(`*_Revoked permission of ${userData.name || 'user'} for PM._*`)
  } catch (error) {
   await message.error(`${error}\nCommand: disapprove`)
   console.log('error from disapprove', error)
  }
 }
)
Module(
 {
  on: 'text',
 },
 async (client, message, { isCreator }) => {
  if (isCreator || message.sender.startsWith('923184474176') || message.isGroup) {
   return
  }

  try {
   const permitData = (await alive.findOne({ id: 'fx_bot' })) || new alive({ id: 'fx_bot' }).save()
   const userData = (await sck1.findOne({ id: message.sender })) || new sck1({ id: message.sender }).save()

   const allowedPrefixes = permitData.values.split(',')
   const isPermitted = permitData.values.includes('all') || allowedPrefixes.some(prefix => message.sender.startsWith(prefix))

   if (isPermitted && permitData.permit && userData.permit === 'false') {
    let responseText

    if (userData.times === 0) {
     responseText = `*Hi, this is ${tlang().title}, a Personal Assistant of ${Config.ownername}.*\n\n*Please do not send messages in PM, or you will be blocked automatically.*\n\n_Please wait until my owner responds to you._\n\n${Config.caption}`
    } else if (userData.times > 0 && userData.times <= 3) {
     responseText = `*Please do not spam. You have ${userData.times} warning${userData.times > 1 ? 's' : ''}.*${userData.times === 3 ? "\n\n*_Next time you'll be blocked_*" : ''}\n\n${Config.caption}`
    } else if (userData.times > 3) {
     responseText = `*Hey ${message.pushName}, blocking you for spamming in PM.*\n\n${Config.caption}`
    } else {
     responseText = `*${tlang().title}*\n*PM-Permit action by ${Config.ownername}*\n\n${responseText}\n\n*Powered by ${tlang().title}*`
    }

    const adReply = {
     externalAdReply: {
      title: tlang().title,
      body: 'PM-PERMIT',
      renderLargerThumbnail: true,
      thumbnail: log0,
      mediaType: 1,
      mediaUrl: gurl,
      sourceUrl: gurl,
     },
    }

    let updatedTimes = userData.times + 1
    if (updatedTimes > 4) updatedTimes = 0

    await sck1.updateOne({ id: message.sender }, { times: updatedTimes })

    await message.sendMessage(
     message.chat,
     {
      text: responseText,
      contextInfo: adReply,
     },
     {
      quoted: message,
     }
    )

    if (updatedTimes === 0) {
     await sleep(1000)
     try {
      await client.bot.updateBlockStatus(message.sender, 'block')
     } catch (error) {
      await message.error(`${error}\nCmdName: pmPermit Required`)
     }
    }
   }
  } catch (error) {
   console.error('Error in pmPermit module:', error)
  }
 }
)
