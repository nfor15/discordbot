const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["role", "role"],
  category: "needperm",
  description: "Add role to any user",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("no perms");
    }
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("Error");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`mention member!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`mention role!`)
    if(target.id === message.author.id) return message.reply(`You Cant give you're self.`)

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      
      .setColor("#FF0000")
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`✅ Done -> added role ${arole}`)
      .setFooter(`Added by ${message.author.username}`, aicon)
      .setTimestamp()

      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}
