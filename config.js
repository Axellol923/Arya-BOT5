global.owner = ['523319046619','6288235435804'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: '꧁ʚ𝕘𝕠𝕜𝕦❖𝕓𝕠𝕥ɞ꧂'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'Masukkan_Apikey'
}

// Sticker WM
global.packname = '𝚜𝚘𝚗𝚐𝚘𝚔𝚞𝚋𝚘𝚝/꧁ʚ𝕘𝕠𝕜𝕦❖𝕓𝕠𝕥ɞ꧂'
global.author = '𝚜𝚘𝚗𝚐𝚘𝚔𝚞𝚋𝚘𝚝'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
