const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

  module.exports = {
    name: "steam",
    aliases: ["game"],
    category: "noperm",
  
  run: async (client, message, args) => {
    let gamename = args[0]
    let smalLlogo = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!gamename) return message.reply('Type game name please!`')
    provider.search(gamename).then(result => {
    provider.detail(result[0].id, "United States", "usd").then(results => {
        console.log(results)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Steam Explore', smalLlogo)
  .setColor("RANDOM")
    .setTitle(result[0].name)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Game Type :', results.genres)
    .addField('Price :', `Normal Price : **${results.priceData.initialPrice}** USD
Sale Price : **${results.priceData.finalPrice}** USD`, true)
    .addField('Platforms :', results.otherData.platforms, true)
    .addField('Publishers :', results.otherData.publisher)
         .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `[Made By Ahmed @2088](${'https://www.instagram.com/2088/'})`)

  .setColor("RANDOM")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply(' `' + gamename + '` ')
    })
})
})
}

}