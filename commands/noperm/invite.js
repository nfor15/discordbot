const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "noperm",
  description: "",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
                        .setDescription("Invite now , and moderate your server with ART!")
                        .addField('Invite bot', `[Click here](${'https://discord.com/oauth2/authorize?client_id=767122337375191091&permissions=8&scope=bot'})`, true)
                            .addField('Support server', `[Click here](${'https://discord.gg/z2XVKgZ'})`, true)

    .setColor("RANDOM")
    .setFooter(`Coded By Ahmed.`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}