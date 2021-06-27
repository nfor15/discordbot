const http = require("http");
const express = require("express");
const { mainprefix, token } = require("./config.json");
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});

//client.queue = new Map();
//client.vote = new Map();
const { ready } = require("./debug/startmsg.js")


client.on("ready", () => {
  client.user.setStatus("online");
  console.log("Ready , thanks my daddy ahmed for coding me")
});

client.on("ready", () => {
  client.user.setActivity(`#ART`, { type: "WATCHING"})  
})


client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./debug/${handler}`)(client);
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${mainprefix}\`\n Iam Coded By <@742488804031725582>`);
  }


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(mainprefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(mainprefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});







client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = mainprefix;
  
  if(!message.content.startsWith(prefix)) return;
 
})

// Anti-Share 
client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
if(message.member.hasPermission('ADMINISTRATOR')) return;
      message.delete();
        let embedP = new discord.MessageEmbed()
        .setTitle('')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لا تنشر  **`, 'ريلاكس')
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        message.channel.send(embedP);
    }
});



client.login(token);