const fetch = require('node-fetch')

async function gpt(query) {
 const apiUrl = `https://api.prabath-md.tech/api/gptv1?q=${encodeURIComponent(query)}`

 return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
   if (data.status === 'success ✅') {
    return data.data
   } else {
    throw new Error('API response status indicates failure')
   }
  })
  .catch(error => {
   console.error('Error fetching data from GPT API:', error.message)
   throw error
  })
}
exports.gpt = gpt
// Usage
gpt('Hello')
 .then(response => {
  console.log('Response:', response)
 })
 .catch(error => {
  console.error('Error:', error.message)
 })
