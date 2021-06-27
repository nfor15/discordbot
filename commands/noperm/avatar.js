const discord = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "noperm",
  run: async (client, message, args) => {
    
    let pepole
    
    if(message.mentions.users.first()) {
      pepole = message.mentions.users.first();
    } else if(args[0]) {
        pepole = message.guild.members.cache.get(args[0]).user;
      } else {
        pepole = message.author
      }
    
    let avatar = pepole.displayAvatarURL({dynamic: true, size: 1024})
    
      let embed = new discord.MessageEmbed()
      
      embed.setDescription(`[Download](${avatar})`)
      embed.setImage(avatar)
      embed.setColor("RANDOM")
      message.channel.send(embed)
         
  }
}