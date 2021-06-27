const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sug",
    aliases: ['s'],

  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "needperm",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("type a Suggestion please");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "programming-ideas" || x.name === "suggestions");
    //message.channel.send("Sent");

    if (!channel) {
      return message.channel.send("Error");
    }

    let embed = new MessageEmbed()
      .setAuthor("Suggestion By => " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("GREEN")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

 //   message.channel.send("<a:763128562378211339:802958233286475776> | Sent");
            message.delete();

    
    message.delete()
    
  }
};
