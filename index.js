const Discord = require("discord.js");
require('dotenv').config()
const prefix = process.env.PREFIX;
const fs = require("fs");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (command === "franc") {
    client.commands.get("franc").execute(message, args);
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args);
  } else if (command === "mute") {
    client.commands.get("mute").execute(message, args);
  } else if (command === "unmute") {
    client.commands.get("unmute").execute(message, args);
  } 
});

client.login(process.env.TOKEN);