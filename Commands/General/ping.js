const { Client, CommandInteraction, MessageEmbed} = require("discord.js");

module.exports = {
    name: 'ping',
    description: "CHECK BOTS LATENCY",
    permission: "",
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction,client ) {
        const response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Pong! The bots latency is:  ${client.ws.ping}ms`);
        interaction.followUp({embeds: [response], ephemeral: true})
    }
} 
