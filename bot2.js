const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));

bot.on("message", msg => {
	let prefix = ";";

  bot.on('ready',() => {
    console.log("I am online.")
  });

	console.log(0)
	if(!msg.content.startsWith(prefix)) return;

	//console.log(0.1)
	//if(msg.author.id != "Your ID") return;
	//Only use the above for testing as only the person with that ID can use the bot.


	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0};

  let args = msg.content.split(" ").slice(1);

	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;

	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
		msg.reply(`You have ${userData.XP} XP Right Now.`);
	}

  console.log("SSJ")
	if (msg.content.startsWith(prefix + "ssj")) {
    if (userData.XP === 10000){
		msg.channel.sendMessage(`You have tresspassed the boundaries of a normal Sayian and have transformed into a Super Saiyan!`);
  } else {
    msg.channel.sendMessage(`You need 10k XP to get this transformation.`)
  }
	}


  if (msg.content.startsWith(prefix + `say`)) {
		if (userXP = 10000) {
		const sayMessage = args.join(" ");
			msg.delete().catch(O_o=>{});
			msg.channel.send(sayMessage);
		} else {
			msg.channel.sendMessage(`You are not mighty enough to use this command.`)
		}
	}
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}

if (msg.content.startsWith(prefix + ""))

	console.log("train")
	if (msg.content.startsWith(prefix + "train")) {
		userData.XP += 10
		msg.channel.sendMessage(`${msg.author} has trained and gotten 10 XP I guess .-.!`)
	}

	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);

});
bot.login("MzkxNzQ3NzI5MzA4NTE2MzUy.DRdLJQ.eWg4pWUFA-HpLrUQnZSbbf1Kfas")
