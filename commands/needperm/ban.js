const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "needperm",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`you don't have perms`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Error`)
    
    if(!args[0]) return message.reply(`mention`)
    
    if(!target) return message.reply(`I can't find that member`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`error.`)
    }
    
    if(target.id === message.author.id) return message.reply(`غبييييييييييييييي`)
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.username} `, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(target.user.displayAvatarURL({dynamic: true}))
            .setColor(`#FF0000`)
            .setDescription(`
**Member:** ${target.user.username} - Banned)
**Reason:** ${reason || "None"}
            `)
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.reply(`Error`)
    }
    return undefined
  }
};