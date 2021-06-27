const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "needperm",
  run: async (client, message, args) => {
    
    const banto = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`you don't have perms`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Error`)
    
    if(!args[0]) return message.reply(`mention`)
    
    if(!banto) return message.reply(`I can't find that member`)
    
    if(banto.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`error.`)
    }
    
    if(banto.id === message.author.id) return message.reply(`غبييييييييييييييي`)
    
    if(banto.bannable) {
      let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.username} `, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(banto.user.displayAvatarURL({dynamic: true}))
            .setColor(`#FF0000`)
            .setDescription(`
**Member:** ${banto.user.username} - Banned)
**Reason:** ${reason || "None"}
            `)
      message.channel.send(embed)
      
      banto.ban()
      
      message.delete()
      
    } else {
      return message.reply(`Error`)
    }
    return undefined
  }
};