const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "removerole",
  aliases: ["unrole", "rrole"],
  category: "needperm",
  run: async (client, message, args) => {
       if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("no perms");
    }
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("Error");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`error`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`cant find this role`)
        if(target.id === message.author.id) return message.reply(`You Cant give you're self.`)

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("#FF0000")
      .setDescription(`${rrole} Removed From ${target}`)
      .setFooter(`Removed by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)
    
  }
}