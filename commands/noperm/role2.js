const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "role2",
  aliases: ["rl", "rl"],
  category: "needperm",
  description: "Add role to any user",
  run: async (client, message, args) => {
      if (!message.author.id !=  602929951519408133) return;
     if (!message.author.id !=  509793637027020801) return;
          return message.channel.send("no perms");

      if (!message.author.id !=  688341568708411396) return;
          return message.channel.send("no perms");

      if (!message.author.id !=  490135641699385344) return;
      if (!message.author.id !=  742488804031725582) return;
      if (!message.author.id !=  402954050116517899) return;
      if (!message.author.id !=  234682288548347906) return;
      return message.channel.send("no perms");
    
  //  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    //  return message.channel.send("Error");
//    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`mention member!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`mention role!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      
      .setColor("#FF0000")
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`✅ Done -> added role ${arole}`)
            .setFooter(`Added by ${message.author.username}`, aicon)

      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}