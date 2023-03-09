const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder
        .setName("Ping")
        .setDescription("Responde com 'Pong!'"),


    async execute(interation){
        await interation.reply("Pong!")
    }
}