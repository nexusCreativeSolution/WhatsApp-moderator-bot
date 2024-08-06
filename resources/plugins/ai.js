const { bot } = require('../../lib')
const { gpt } = require('../../src/gptchat')

bot(
 {
  pattern: 'gpt',
  info: 'Chat With Gpt',
  type: 'ai',
 },
 async (message, match) => {
  if (!match) return await message.reply('Hello, how can I assist you today?')
  await message.reply('_Thinking..._')
  const response = await gpt(match)
  const gptchat = '```GPT: ' + response + '```'
  await message.sendMessage(message.jid, gptchat, message.quoted)
 }
)

bot(
 {
  pattern: 'gemini',
  info: 'Chat With Gemini',
  type: 'ai',
 },
 async (message, match) => {}
)

bot(
 {
  pattern: 'dalle',
  info: 'Generate Images With Dall-e',
  type: 'ai',
 },
 async (message, match) => {}
)
