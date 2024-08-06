const fetch = require('node-fetch')
async function dalle(query) {
 const apiUrl = `https://api.maher-zubair.tech/ai/aiimg?q=${encodeURIComponent(query)}`

 try {
  const response = await fetch(apiUrl)
  const data = await response.json()

  if (data.status === 200 && data.result.aiImageData.length > 0) {
   const imageUrl = data.result.aiImageData[0].imageHighResolution.url
   return imageUrl
  } else {
   throw new Error('No image data received from API')
  }
 } catch (error) {
  console.error('ERROR IN DALLE RESPONSE FROM API\n', error)
  throw new Error('Error occurred while fetching the image')
 }
}
module.exports = { dalle }
