const Config = require('../config')
let { sendGImages, smd } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch')
const { Anime } = require('@shineiichijo/marika')
const { fetchJson } = require('../lib/')
async function sendAnime(Aviator, msg, cmd, text = '') {
 try {
  if (cmd === 'waifu' || cmd === 'neko' || cmd === 'megumin') {
   let name1 = text.split('|')[0] || ''
   let name2 = text.split('|')[1] || '1'
   let cap = text.split('|')[1] ? '' : ' *' + cmd + ',Here we go😊!!!!*'
   let url = name1 == 'nsfw' ? 'https://api.waifu.pics/nsfw/' + (cmd === 'megumin' ? 'trap' : 'waifu') : 'https://api.waifu.pics/sfw/' + cmd
   for (let i = 0; i < name2; i++) {
    let res = await (await fetch(url)).json()
    await Aviator.bot.sendMessage(
     msg.chat,
     {
      image: {
       url: res.url,
      },
      caption: cap,
     },
     {
      quoted: msg,
     }
    )
   }
  } else if (cmd === 'loli' || cmd === 'foxgirl') {
   let url = cmd === 'loli' ? 'https://waifu.pics/api/sfw/shinobu' : 'https://nekos.life/api/v2/img/fox_girl'
   let res = await axios.get(url)
   await Aviator.bot.sendMessage(
    msg.chat,
    {
     image: {
      url: res.data.url,
     },
    },
    {
     quoted: msg,
    }
   )
  } else if (cmd === 'demon' || cmd === 'naruto') {
   let url = 'https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/' + (cmd === 'demon' ? 'Demonslayer' : 'Naruto') + '/video.json'
   const res = await fetchJson(url)
   const urls = res.result[Math.floor(Math.random() * res.result.length)].url
   await Aviator.bot.sendMessage(msg.chat, {
    video: {
     url: urls,
    },
    caption: '*Here we go😊!!!!*',
   })
  } else if (cmd === 'animenews') {
   let response = await axios.get('https://newsapi.org/v2/everything?q=' + text + '&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8')
   let result = response.data.articles
   result.map(async (_0xce837b, _0x1e9dc2) => {
    try {
     Aviator.bot.sendMessage(
      msg.chat,
      {
       image: {
        url: _0xce837b.urlToImage,
       },
       caption: '*Title🔰:* ' + _0xce837b.title + '\n\n*Content🧩:* ' + _0xce837b.content + '\n*Author📌:* ' + _0xce837b.author + '\n*Source♦️:* ' + _0xce837b.source.name + '\n*Created On☘️:* ' + _0xce837b.publishedAt + '\n*More on✨:* ' + _0xce837b.url + '\n\n' + Config.caption + '*',
      },
      {
       quoted: msg,
      }
     )
    } catch (_0x19b94c) {}
   })
  }
 } catch (_0xed8aa3) {
  console.log('./commands/Anime.js/sendAnime()\n', _0xed8aa3)
  await msg.error(_0xed8aa3)
 }
}
smd(
 {
  name: 'waifu',
  info: 'To get Waifu Random Pics',
  type: 'Anime Pics',
  
 },
 async (Suhail, msg, text, { cmdName }) => {
  console.log('Cmd : ', cmdName)
  return await sendAnime(Suhail, msg, 'waifu', text)
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'neko',
  type: 'Anime Pics',
  info: 'Sends a Neko Image in chat',
  
 },
 async (Suhail, msg, text, { cmdName }) => {
  return await sendAnime(Suhail, msg, 'neko', text)
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'megumin',
  info: 'To get Waifu Random Pics',
  type: 'Anime Pics',
  
 },
 async (Suhail, msg, text, { cmdName }) => {
  return await sendAnime(Suhail, msg, 'megumin', text)
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'loli',
  type: 'Anime Pics',
  
  info: 'Sends image of loli.',
 },
 async (Suhail, msg) => {
  return await sendAnime(Suhail, msg, 'loli')
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'foxgirl',
  type: 'Anime Pics',
  info: 'Sends image of Fox Girl Anime.',
  
 },
 async (Suhail, msg) => {
  return await sendAnime(Suhail, msg, 'foxgirl')
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'demon',
  alias: ['ds'],
  info: 'To get Naruto Random Videos',
  type: 'Anime Pics',
  
 },
 async (Suhail, msg) => {
  return await sendAnime(Suhail, msg, 'demon')
 }
)
//------------------------------------------------------------------------
smd(
 {
  name: 'naruto',
  info: 'To get Naruto Random Videos',
  type: 'Anime Pics',
  
 },
 async (Suhail, msg) => {
  return await sendAnime(Suhail, msg, 'naruto')
 }
)
//-------------------------------------------------------------------------
smd(
 {
  name: 'pokepic',
  type: 'Anime Pics',
  
  info: 'Sends image of pokemon.',
 },
 async (Suhail, msg, text) => {
  return await sendGImages(msg, text + 'Pokemon Pics only HD ', `*---「 Poke Pic 」---*`, text)
 }
)
//-------------------------------------------------------------------------
smd(
 {
  name: 'animepic',
  type: 'Anime Pics',
  
  info: 'Anime images',
 },
 async (Suhail, msg, text) => {
  return await sendGImages(msg, text + 'Anime Pics HD', `*-----「 Anime Image 」-----*`, text)
 }
)
//-----------------------------------------------------------------------
smd(
 {
  name: 'animewall',
  type: 'Anime Pics',
  info: 'Anime Wallpaper Random',
  
 },
 async (Suhail, msg, text) => {
  return await sendGImages(msg, text + 'anime wallpaper for desktop full hd', `*---「 Anime Wallpaper 」---*`, text)
 }
)
//-----------------------------------------------------------------------
let qq = ['Anime News Today', 'New Anime', 'Uocoming Anime News', 'New Anime Info', 'Whats news in Anime', 'Anime Series', 'Manga News today', 'Anime New News', 'Anime News today']
smd(
 {
  name: 'animenews',
  type: 'Anime Pics',
  info: 'Sends Anime News in chat',
  
 },
 async (Suhail, msg, text, { cmdName }) => {
  let q1 = qq[Math.floor(Math.random() * qq.length)] + text
  return await sendAnime(Suhail, msg, cmdName, q1)
 }
)
//---------------------------------------------------------------------------
smd(
 {
  name: 'pokemon',
  type: 'Anime Pics',
  
  info: 'Sends info of pokemon in current chat.',
 },
 async (Suhail, msg, text) => {
  if (!text) {
   return msg.reply('*Uhh Please Give Me Poki Name/num*')
  }
  try {
   let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
   if (!data.name) {
    return msg.reply(`❌ Could not found any pokemon with that name`)
   }
   let poinfo = `*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`
   return await Suhail.bot.sendMessage(
    msg.chat,
    {
     image: {
      url: data.sprites.front_default,
     },
     caption: poinfo,
    },
    {
     quoted: msg,
    }
   )
  } catch (err) {
   msg.reply("*_Ahh,Couldn't found any pokemon._*")
  }
 }
)
//---------------------------------------------------------------------------

smd(
 {
  name: 'manga',
  type: 'Anime Pics',
  
  info: 'Sends info about asked manga.',
 },
 async (Suhail, msg, text) => {
  if (!text) {
   return msg.reply(`Which Manga do you want to Search? \n _Please give me a name._`)
  }
  const { Manga } = require('@shineiichijo/marika')
  const manga = new Manga()
  let srh = await manga.searchManga(text)
  let mang = `*🎀Title: ${srh.data[0].title}*\n`
  mang += `*📈Status: ${srh.data[0].status}*\n`
  mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`
  mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`
  mang += `*🧧Genres:*\n`
  for (let i = 0; i < srh.data[0].genres.length; i++) {
   mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`
  }
  mang += `*✨Published on: ${srh.data[0].published.from}*\n`
  mang += `*🌟Score: ${srh.data[0].scored}*\n`
  mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`
  mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`
  mang += `*✍Authors:*\n`
  for (let i = 0; i < srh.data[0].authors.length; i++) {
   mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`
  }
  mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`
  if (srh.data[0].background !== null) {
   mang += `*🎆Background:* ${srh.data[0].background}`
  }
  mang += `*❄️Description:* ${srh.data[0].synopsis}`
  Suhail.bot.sendMessage(
   msg.chat,
   {
    image: {
     url: srh.data[0].images.jpg.large_image_url,
    },
    caption: mang,
   },
   {
    quoted: msg,
   }
  )
 }
)
//----------------------------------------------------------------------------
smd(
 {
  name: 'anime',
  type: 'Anime Pics',
  info: 'Searches Info about Anime and Provides result.',
 },
 async (Suhail, msg, text) => {
  if (!text) {
   return msg.reply(`Which Anime do you want to search?\n _Please give me a name._`)
  }
  const client = new Anime()
  let anime = await client.searchAnime(text)
  let result = anime.data[0]
  //console.log(result);
  let details = `🎀Title: ${result.title}\n`
  details += `🎋Format: ${result.type}\n`
  details += `*📈Status: ${result.status.toUpperCase().replace(/\_/g, ' ')}*\n`
  details += `🍥Total episodes: ${result.episodes}\n`
  details += `🎈Duration: ${result.duration}\n`
  details += `🧧Genres:\n`
  for (let i = 0; i < result.genres.length; i++) {
   details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`
  }
  details += `✨Based on: ${result.source.toUpperCase()}\n`
  details += `📍Studio:\n`
  for (let i = 0; i < result.studios.length; i++) {
   details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`
  }
  details += `🎴Producers:\n`
  for (let i = 0; i < result.producers.length; i++) {
   details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`
  }
  details += `💫Premiered on: ${result.aired.from}\n`
  details += `🎗Ended on: ${result.aired.to}\n`
  details += `🎐Popularity: ${result.popularity}\n`
  details += `🎏Favorites: ${result.favorites}\n`
  details += `🎇Rating: ${result.rating}\n`
  details += `🏅Rank: ${result.rank}\n\n`
  if (result.trailer.url !== null) {
   details += `♦Trailer: ${result.trailer.url}\n\n`
  }
  details += `🌐URL: ${result.url}\n\n`
  if (result.background !== null) {
   details += `🎆Background: ${result.background}*\n\n`
  }
  details += `❄Description: ${result.synopsis}`
  Suhail.bot.sendMessage(
   msg.chat,
   {
    image: {
     url: result.images.jpg.large_image_url,
    },
    caption: details,
   },
   {
    quoted: msg,
   }
  )
 }
)
//---------------------------------------------------------------------------
