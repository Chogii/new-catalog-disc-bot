const Discord = require('discord.js');
var fs = require( 'fs' );
const bot = new Discord.Client();

bot.on("message", async message =>{
	if(message.channel.id == "593554443052646483"){
		if(message.content == "i agree"){
			var role = message.guild.roles.find(role => role.id === "593560987047821324");
			message.member.addRole(role);
			message.channel.send(("Welcome to the server, ") + (message.author) + "!");
			message.delete(3000);
		}else{
			message.delete(3000);
		}
		if(message.author.id == "593558374038372355"){
			message.delete(3000);
		}

	}
});

bot.on("message", async message =>{
	if(message.content.includes("fuck")){
			message.delete();
	}
	if(message.content.includes("shit")){
			message.delete();
	}
	if(message.content.includes("dammit")){
			message.delete();
	}
	if(message.content.includes("damnit")){
			message.delete();
	}
	if(message.content.includes("nigger")){
			message.delete();
			if(message.author.id !== "202894096757555200"){
				message.author.kick();
			}
	}
	if(message.content.includes("nigga")){
			message.delete();
	}
	if(message.content.includes("pussy")){
		message.delete();
	}
	if(message.content.includes("anus")){
			message.delete();
	}
	if(message.content.includes("ass")){
		message.delete();
	}
	if(message.content.includes("arse")){
		message.delete();
	}
	if(message.content.includes("dick")){
		message.delete();
	}
	if(message.content.includes("cunt")){
		message.delete();
	}
	if(message.content.includes("drugs")){
		message.delete();
	}
	if(message.content.includes("marijuana")){
		message.delete();
	}
	if(message.content.includes("cocaine")){
		message.delete();
	}
	if(message.content.includes("sex")){
		message.delete();
	}
	if(message.content.includes("heroin")){
		message.delete();
	}
	if(message.content.includes("axwound")){
		message.delete();
	}
		if(message.content.includes("piss")){
		message.delete();
	}
	if(message.content.includes("bitch")){
		message.delete();
	}

});

bot.login('NTkzNTU4Mzc0MDM4MzcyMzU1.XRPoWw.Il22HT7S5uIPIDyXByUcN55g1ik');
