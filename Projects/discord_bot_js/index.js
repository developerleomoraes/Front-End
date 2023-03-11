// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js')

//dotenv
const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env

// importação dos comandos
const fs = require("node:fs")
constpath = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commadFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))
console.log(commadFiles)

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Log in to Discord with your client's token
client.login(TOKEN)

