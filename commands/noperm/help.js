const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  usage: "help <cmd>",
  category: "noperm",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
      }

    
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()     // not all commands available with open-source version .
       .setColor("#FAFF00")
  .setAuthor("HELP Menu", "https://b.top4top.io/p_1636yybby1.gif")
  .addField(":pencil: Normal",  "`cov`-=> Show corona stats in arabic.\n `ecov`-=> Show corona stats in english.\n `Level`-=> Show you're level  \n `Say`-=> Says your input via the bot.\n `Avatar`-=> Get user avatar. \n `user`-=> Get noperm about user.\n `uptime`-=> Show bot uptime.\n `server`-=> get server detail.  \n `bot`-=> Get noperm about bot.\n `ascii`-=> disply text via ascii.  \n `yt`-=> Display youtube channel nopermrmation. \n`steam`-=> Display steam game nopermrmation. \n `github` -=> show github nopermrmation.")
  .addField("<:moderation:769576374729965648> Moderation", "`Ban`-=> Ban a member from the server. \n `Kick`-=> Kick a member from the server.\n `Warn`-=> warn a member. \n `Clear`-=> Delete a number of messages (max 100).\n `Unban`-=> Unban someone in the server.\n `Mute`-=> mute member. \n `Unmute`-=> unmute member. ")
  .addField("<:sent:769576374586834995> Support", "`Contact`-=> Send message/question/suggest to bot devs. \n `Invite`-=> invite the bot to your server.")
  .addField("<a:dev:767133212975300609>  BotDevs", "answer, tz, blacklist, eval, remove, leaveserver")
           .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `[Support server](${'https://discord.gg/z2XVKgZ'})`)

  

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

      }

      return message.channel.send(emx);
    }
  }
};
