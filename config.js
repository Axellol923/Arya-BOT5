global.owner = ['523313208519',''] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: '༺⊰𝕔𝕒𝕡𝕚𝕥𝕒𝕟∆𝕘𝕒𝕥𝕠∆𝕓𝕠𝕥⊱༻'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'Masukkan_Apikey'
}

// Sticker WM
global.packname = 'I hope you\'Subscribe'
global.author = 'Drawl Nag'

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
