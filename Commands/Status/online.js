// This is the status for the bot - Only bot owner can change it --> Assistant Admin | _Ethan_



const { CommandInteraction, Client } = require("discord.js");

const bot_owner_ID = "730505032801320990";


module.exports = {
    name: "s-online",
    description: "Change the status of the bot to online",
    permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        client.setPresence({
            status: "online",
            activity: {
                name: "Huw Prosser's Workshop",
                type: "WATCHING"
            }
        })
    }
}