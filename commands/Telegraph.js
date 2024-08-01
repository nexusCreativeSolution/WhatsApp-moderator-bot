const { Module } = require('../lib/commands')
const util = require('util')
const axios = require('axios')
const PastebinAPI = require('pastebin-js')

const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')

// Pastebin Module: Create paste on Pastebin
Module(
 {
  name: 'pastebin',
  info: 'Create paste on Pastebin',
  type: 'paste',
 },
 async (message, text) => {
  if (!text) {
   text = message.quoted ? message.quoted.text : ''
  }

  if (!text) {
   return message.send('Please reply to any text to create a Pastebin link.')
  }

  try {
   const pasteUrl = await pastebin.createPaste(text, 'Professional Text')
   return message.send(`_Here is your link._\n${pasteUrl}\n*Click to view your text*`)
  } catch (error) {
   return await message.error(error)
  }
 }
)

// Telegraph Module: Create paste on Telegraph
Module(
 {
  name: 'paste',
  info: 'Create paste of text on Telegraph',
  type: 'paste',
 },
 async message => {
  const text = message.quoted ? message.quoted.text : message.text

  if (!text) {
   return message.send('Please provide text or reply to a message to create a paste.')
  }

  try {
   const response = await axios.get(`https://api.telegra.ph/createPage`, {
    params: {
     access_token: 'd3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722',
     title: 'Professional Text Bot',
     author_name: 'TechInfoBot',
     content: JSON.stringify([{ tag: 'p', children: [text] }]),
     return_content: true,
    },
   })

   const { data } = response
   return message.reply(`*Paste created on Telegraph*\nName: ${util.format(data.result.title)}\nURL: ${util.format(data.result.url)}`)
  } catch (error) {
   return await message.error(error)
  }
 }
)
