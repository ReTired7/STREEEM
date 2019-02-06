const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('*help | *invite','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});


client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By: Peery#0609
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
             Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ *kick <mention > ➾ kick member from server

 ❖ *clear ➾ clear chat ( not ready yet fixing)
 
 ❖ *mute < mention > ➾ mute member

 ❖ *unmute <mention> ➾ unmute member

 ❖ *ct <name> ➾ create channel

 ❖ *cv <name> create voice channel
  
 ❖ *bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ *roll <number> ➾ role 

❖ *date ➾ see date

❖ *member ➾ members info

❖ *ser-av ➾ server avatar

❖ *uptime ➾ to see uptime

❖ *invs ➾ server invite link

❖ *own ➾ bot owner

❖ *id ➾ your id

❖ *avatar ➾ your avatar account

❖ *help-en ➾ help by arabic

❖ *help-en ➾ help by english

❖ *ping ➾ to see ping

❖ *bot ➾ bot informations 

❖ *server ➾ server informations 

❖ *invite ➾ bot invite link

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "wlc"


==================================================================

Server support: https://discord.gg/twdHNJT

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

==================================================================

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By: Peery#0609
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
                  Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝

 ❖  *kick <mention > ➾ لطرد عضو
 
 ❖ *mute < mention > ➾ اسكات عضو 

 ❖ *clear  ➾ لتنضيف المحادثة (fixing)

 ❖ *cv <name> ➾ صنع روم صوتية

 ❖ *ct <name> ➾ صنع روم كتابية

 ❖ *unmute <mention> ➾ فك الاسكات من العضو
  
 ❖ *bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر


╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ *roll <number> ➾ قرعة

❖ *member ➾ معلومات الاعضاء

❖ *avatar ➾ شعار حسابك

❖ *ser-av ➾ شعار السيرفر

❖ *uptime ➾ مدة التشغيل

❖ *id ➾ اي دي

❖ *date ➾ التاريخ

❖ *invs ➾ رابط دخول سيرفرك

❖ *own ➾ مسؤول البوت

❖ *help-ar ➾ المساعدة في العربي

❖ *help-en ➾ المساعدة في الانجليزيلة

❖ *ping ➾ عرض سرعه اتصال البوت

❖ *bot ➾ معلومات البوت

❖ *server ➾ معلومات السيرفر

❖ *invite ➾ رابط دعوة البوت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "wlc"

==================================================================

Server support: https://discord.gg/twdHNJT

bot invite link: https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

==================================================================


`);

    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "invs")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيررك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**تم الارسال في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__
 ╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯

 __Powered By__: Peery#0609

Server Support : https://discord.gg/twdHNJT

https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`

╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 
بامكانك دعوة البوت من هنا

https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

Server Support : https://discord.gg/twdHNJT
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.login(process.env.BOT_TOKEN);
