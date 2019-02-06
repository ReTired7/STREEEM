const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Retir'ed`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Retir'ed ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`=help|BY Arab Unity`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);
