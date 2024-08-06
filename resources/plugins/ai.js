const { bot } = require('../../lib')
const { gemini } = require('../../src/gemini')
const { gpt } = require('../../src/gptchat')
const { dalle } = require('../../src/dalle')
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
 async (message, match) => {
  if (!match) return await message.reply('Hello I am Gemini Ai!')
  await message.reply('_factuating..._')
  const response = await gemini(match)
  const geminiChat = '```GEMINI: ' + response + '```'
  await message.sendMessage(message.jid, geminiChat, message.quoted)
 }
)

bot(
 {
  pattern: 'dalle',
  info: 'Generate Images With Dall-e',
  type: 'ai',
 },
 async (message, query) => {
  if (!query) return await message.reply('*Give Me A Query To Get Dall-E Response?*')
  const imageUrl = await dalle(query)
  return await message.bot.sendMessage(message.jid, { image: { url: imageUrl }, caption: `[PROMPT]: \`\`\`${query}\`\`\`` })
 }
)
