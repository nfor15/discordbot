module.exports = {
  name: "clear",
  aliases:["c", "purge"],
  category: "needperm",
  description: "Delete bulk messages with 1 command",
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

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`error -> ${err}`));
    
  }
}