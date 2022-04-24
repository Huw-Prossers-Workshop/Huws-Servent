const { Perms } = require("../Validation/Permissions");
const { Client }  = require("discord.js");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
const { readdirSync } = require('fs'); 
/**
 * @param {Client} client
 */
module.exports = async (client, Discord) => {
    const commandFolders = readdirSync('./Commands');
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`./Commands/${folder}`).filter(files => files.endsWith('.js'));
        const commandsArray = [];
        for (const file of commandFiles) {
            const command = require(`../Commands/${folder}/${file}`);
            client.commands.set(command.name, command);
            commandsArray.push(command)

            client.on("ready", () => {
                client.guilds.cache.get("872172580893765763").commands.set(commandsArray) // set to the guild/server id
            });
        }
    }
}
