const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//الاوامر//


client.on("message", message => {
 if (message.content === "f!help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***
ملاحظه
Special orders ان برفكس الاوامر المميزه او

يختلف عن جميع الاوامر 
Special orders برفكس الاوامر المميزه او 
f!!
اما برفكس باقي الاوامر
f!
***
`)


message.author.sendEmbed(embed)

}
}); 
