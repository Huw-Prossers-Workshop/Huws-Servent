// This is the status for the bot - Only bot owner can change it --> Assistant Admin | _Ethan_



const { CommandInteraction, Client } = require("discord.js");

const bot_owner_ID = "730505032801320990";


module.exports = {
    name: "s-dnd",
    description: "Change the status of the bot to dnd",
    permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        client.setPresence({
            status: "dnd",
            activity: {
                name: "With my code",
                type: "PLAYING"
            }
        })
    }
} 