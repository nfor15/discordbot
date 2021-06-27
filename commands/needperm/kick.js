const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "needperm",
description: "kick a user",
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send("Error , please mention a member**")
        if (!mentionedMember) return message.channel.send(":x: | **I can't find that member.**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: | You can't kick yourself.")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: Error**")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} `, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`#FF0000`)
            .setDescription(`
**Member:** ${mentionedMember.user.username} - Kicked)
**Reason:** ${reason || "None"}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.channel.send(":x: error**")
        }
        return undefined
    }
}