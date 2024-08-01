const fetch = require('node-fetch')
const { Module } = require('../lib/commands')
const { randomeFunfacts } = require('../lib')
Module(
 {
  name: 'question',
  info: 'Random Question.',
  type: 'fun',
 },
 async (message, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'truth',
  info: 'truth and dare(truth game.).',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'dare',
  info: 'truth and dare(dare game.).',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'joke',
  info: 'Sends Joke in chat.',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'joke2',
  info: 'Sends Joke in chat.',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'fact',
  info: 'Sends fact in chat.',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'quotes',
  info: 'Sends quotes in chat.',
  type: 'fun',
 },
 async (message, text, { cmdName }) => {
  return await message.reply(await randomeFunfacts(cmdName))
 }
)
Module(
 {
  name: 'define',
  info: 'urban dictionary.',
  type: 'fun',
 },
 async (message, text) => {
  const response = await fetch(`http://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`)
  const data = await response.json()

  if (data.list && data.list.length > 0) {
   const definition = data.list[0].definition.replace(/\[/g, '').replace(/\]/g, '')
   const example = data.list[0].example.replace(/\[/g, '').replace(/\]/g, '')
   const wordMsg = `ᴡᴏʀᴅ: ${text}\nᴍᴇᴀɴɪɴɢ: ${definition}\nᴇxᴀᴍᴘʟᴇs: ${example}`
   return message.reply(wordMsg)
  } else {
   return message.reply(`No result for ${text}`)
  }
 }
)
