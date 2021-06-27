module.exports = {
  name: "clear",
  aliases:["c", "delete"],
  category: "needperm",
  run: async (client, message, args) => {
    
            
    if (message.deletable) {
        message.delete();
    }
      if(args < 1 || args > 100) return message.reply(":warning: max 100");


    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(5000));
    }

    let maxmsg;
    if (parseInt(args[0]) > 100) {
        maxmsg = 100;
    } else {
        maxmsg = parseInt(args[0]);
    }

    message.channel.bulkDelete(maxmsg, true)
    .catch(err => message.reply(`error -> ${err}`));
    
  }
}