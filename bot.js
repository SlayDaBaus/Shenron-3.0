const Discord = require('discord.js');
const PREFIX = ";"
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));

var bot = new Discord.Client();

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Probably"
]

var rexp = [
  "10",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19"
]

bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setGame(`on ${bot.guilds.size} servers`);
});

bot.on('message', function(message) {
  if (message.author.equals(bot.user)) return;

bot.on('ready',() => {
  console.log("I am online.")
});

if (!message.content.startsWith(PREFIX)) return;

const config = require("./config.json");

var role = guild.roles.find(`name`, `User`);

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

var argresult = args.join(' ');

switch (args[0].toLowerCase()) {

  case "ping":
        message.channel.sendMessage("Pong!");
        break;
  case "prefix":
        message.channel.sendMessage("The prefix is `;`");
        break;
  case "owner":
        message.channel.sendMessage("This bot's owner is Slay (Also called Slay)");
        break;
  case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
        break;
  case "train":
        return;
  case "saiyan":
       author.addRole(Saiyan)
        return;
        break;
  case"createchannel":
       if (args[1]) guild.createChannel('argresult');
       else message.channel.sendMessage('You have to call it something WIP')
        break;
  case"level":
        return;
        break;
        case"ssj":
              return;
              break;
  case "help":
       var embed = new Discord.RichEmbed()
       .addField("ping", "Bot says Pong!")
       .addField("prefix", "Shows prefix")
       .addField("train", "You train and gain 10 XP .-.")
       .addField("level", "Displays your level and gained XP")
       .addField("owner", "Shows the current name of this bot's owner.")
       .addField("8ball", "Ask the bot anything and it will answer with Yes, No, Maybe and Probably.")
       .setColor("#bb1111")
       .setFooter("The prefiix for all comands is `;`... Just so you know #THEMOREYOUKNOW")
       .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed)
        break;
   case"noticeme":
   message.channel.sendMessage(message.author.toString() + " HEYA");
   break;
      }
});



bot.login('client.login(process.env.BOT_TOKEN)');
