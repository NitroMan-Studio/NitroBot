const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
})

client.on('ready', () => {
    console.log('Bot jest gotowy')
})

client.on('messageCreate', message => {
    if(message.content === 'kek'){
        message.reply('@J00r')
    }
})

client.login(process.env.TOKEN)