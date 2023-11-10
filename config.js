import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

//settings
global.owner = ['6281284760551']
global.nomorown = '6281284760551'
global.mods = []
global.prems = []

// access
global.APIkeys = readFileSync('./acces/apikey.json')
global.APIs = readFileSync('./acces/api.json')
global.thumb = 'https://api.sekha.eu.org/api/wallhp/anime'

// Sticker
global.packname = `By skh`
global.multiplier = 69
global.wait = '*tunggu....*'
global.eror = '*Erorr!!* please try again later'
global.me = '*Simple bot WhatsApp*'
global.bott = 'Erza V Beta'

// itel
global.str = '-------------'
global.l = '「'
global.r = '」'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
