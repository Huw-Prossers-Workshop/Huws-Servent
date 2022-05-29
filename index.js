const { Client, Collection } = require('discord.js');
const Discord = require('discord.js')
const { token } = require('./config.json');

const client = new Discord.Client({
    intents: [
        8
    ]
})

client.commands = new Collection();

['EventHandler', 'CommandHandler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});


client.login(token);