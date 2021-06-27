const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "mute someone",
  catagory: "needperm",
  usage: "mute <@mention> .<reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("You don't have perms.");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Mention!");
    }
    if (user.id === message.author.id) {
      return message.channel.send("error");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" reason? ");
    }

   // const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
      return message.channel.send("\create Muted role please! ");
    }
    
    //await user.roles.remove(vrole);
    await user.roles.add(muterole);

    await message.channel.send(
      `you muted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`You've been muted in ${message.guild} for ${reason}`
    );
  }
};
