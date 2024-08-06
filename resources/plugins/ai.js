const { bot } = require('../../lib')
const { gpt } = require('../../src/gptchat')

bot(
 {
  pattern: 'gpt',
  info: 'Chat With Gpt',
  type: 'chat ai',
 },
 async (message, match) => {
  if (!match) return await message.reply('Hello, how can I assist you today?')
  await message.reply('_Thinking..._')
  const response = await gpt(match)
  const gptchat = '```GPT: ' + response + '```'
  await message.sendMessage(message.jid, gptchat, message.quoted)
 }
)
