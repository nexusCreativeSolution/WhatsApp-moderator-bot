const { bot } = require('../../lib')
const { gpt } = require('../../src/gptchat')

bot(
 {
  pattern: 'gpt',
  info: 'Chat With Gpt',
  type: 'chat ai',
 },
 async (message, match) => {
  if (!match || match.length === 0) {
   return await message.reply('Hello, how can I assist you today?')
  }
  await message.reply('_thinking..._')
  try {
   const response = await gpt(match)
   await message.send(response)
  } catch (error) {
   console.error('Error fetching GPT response:', error.message)
   await message.reply('Sorry, I encountered an error while processing your request.')
  }
 }
)
