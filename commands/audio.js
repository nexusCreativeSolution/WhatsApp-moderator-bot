const { Module } = require('../lib/commands')
const { audioEditor } = require('../lib')
Module(
 {
  name: 'bass',
  info: 'adds bass in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'blown',
  info: 'adds blown in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'deep',
  info: 'adds deep in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'earrape',
  info: 'adds earrape in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'fast',
  info: 'adds fast in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'fat',
  info: 'adds fat in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'nightcore',
  info: 'adds nightcore in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'reverse',
  info: 'adds reverse in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'robot',
  info: 'adds robot in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'slow',
  info: 'adds slow in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'smooth',
  info: 'adds smooth in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
Module(
 {
  name: 'tupai',
  info: 'adds tupai in given sound',
  type: 'audio',
 },
 async (message, client, { cmdName }) => {
  try {
   return await audioEditor(message, client, cmdName, client)
  } catch (e) {
   await client.error(e)
   return console.log('Error in Audio Editing\n', e)
  }
 }
)
