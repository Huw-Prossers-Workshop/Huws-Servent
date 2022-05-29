const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "status",
    description: "Change the status of the bot",
    permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        client.user.setActivity({
            status: "online",
            type: "WATCHING",
            name: "Huw Prosser's Workshop"
        })
    }
} 