const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "needperm",
run: async(client, message, args) => {  
const wanttokick = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send("Error , please mention a member**")
        if (!wanttokick) return message.channel.send(":x: | **I can't find that member.**")
        if (wanttokick.id === message.author.id) return message.channel.send(":x: | You can't kick yourself.")
        if (wanttokick.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: Error**")
        }
        if (wanttokick.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} `, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(wanttokick.user.displayAvatarURL({dynamic: true}))
            .setColor(`#FF0000`)
            .setDescription(`
**Member:** ${wanttokick.user.username} - Kicked)
**Reason:** ${reason || "None"}
            `)
        message.channel.send(embed)
        wanttokick.kick()
        } else {
            return message.channel.send(":x: error**")
        }
        return undefined
    }
}