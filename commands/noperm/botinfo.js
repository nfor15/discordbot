
const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")




module.exports = {
    name: "botnoperm",
    aliases: ["bot"],
    category: "noperm",
  description: "Sends detailed noperm about the client",
  usage: "[command]",
  run: async (client, message, args) => {
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const extime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const sendembed = new Discord.MessageEmbed()
          .setTitle("ART Stats")
          .setColor("#FFD800")
          .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("Uptime ", `${extime}`, true)
          .addField("Servers", `${client.guilds.cache.size}`, true)
          .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("CPU usage", `\`${percent.toFixed(2)}%\``, true)
               .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `[Made By Ahmed @9wmm](${'https://www.instagram.com/9wmm/'})`)

      message.channel.send(sendembed)
  });
  }
  };