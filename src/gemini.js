const fetch = require('node-fetch')

async function gemini(query) {
 const apiKey = 'jWyccPOO'
 const url = `https://api.fgmods.xyz/api/info/gemini?text=${encodeURIComponent(query)}&apikey=${apiKey}`

 try {
  const response = await fetch(url)
  const data = await response.json()

  if (data.status) {
   return data.result
  } else {
   throw new Error(`Error: ${data.code}`)
  }
 } catch (error) {
  console.error('An error occurred:', error)
  return null
 }
}
module.exports = { gemini }
// Usage example
//gemini('Python programming language')
// .then(result => {
//  if (result) {
//   console.log('API Result:', result)
//  } else {
//   console.log('No result returned.')
//  }
// })
// .catch(error => console.error('Error in usage example:', error))
