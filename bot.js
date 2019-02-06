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
 
 
 
client.on("message", message => {
 if (message.content === "f!help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__وصف عن البوت__***
**
Fire bot 
متعدد الميزات و الاوامر فيه اوامر جميله يحتوي هذا البوت على
خاصيه قائمه الالوان و تقدر تغير لونك زي برو بوت و مانع الاسبام و الترحيب 
بصوره

سرعه اتصال ممتازه
سهل الاستخدام
صيانه كل يوم
مجاني بل كامل 
بوت عربي وسيتم اضافه اللغه الاجنبيه قريبا
يحتوي على خاصيه الميوزك بجوده عاليه
**

        ***__General orders__***
**
『f!id / معلومات عن حسابك』
『f!draw / يكرر كلامك في صوره』
『f!embed / يكرر كلامك بمبيد』
『f!roles / يعرض لك الرتب و عددها』
『f!rooms / يعرض لك الرومات وعددها』
『f!server / معلومات عن السيرفر』
『f!animal / يعطيك صور حيوانات』
『f!image / يعرض صوره السيرفر』
『f!avatar / يعرض صورتك او صوره شخص』
『f!time / يعرض لك الوقت』
『f!date / يعرض لك التاريخ』
『f!dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Bot orders__***
**
『f!ping / يعرض لك سرعه اتصال البوت』
『f!uptime / يعرض لك صار للبوت كم شغال』
『f!support / سيرفر الدعم القني و المساعده』
『f!invite / اضافه البوت』
『f!members / حاله الاعضاء』
『f!bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『f!kick / كيك』
『f!ban / بان』
『f!mute /ميوت』
『f!unmute /فك الميوت』
『f!mutechannel /قفل الشات』
『f!unmutechannel /فتح الشات』
『f!add.r / اضافه رتبه』
『f!delet / مسح روم』
『f!color 50 /انشاء 50 لون』
『f!color 100/انشاء 100 لون』
『f!color 140/انشاء 140 لوم』
『f!ct /انشاء روم كتابي』4
『f!cv /انشاء روم صوتي』
『f!bc /برودكاست』
**


        ***__Games orders__***
 **       
『f!لعبه صراحه / صراحه』
『f!لعبه مريم / مريم』
『f!لعبه خواطر / خواطر』
『f!يعطيك شعر عن الحب / حب』
『f!يخيرك بين شي وشي / لو خيروك』
『f!يعطيك عقاب و لازم تنفذه / عقاب』
『f!لعبه اسئله / كت تويت』
**
   
        
`)


message.author.sendEmbed(embed)

}
}); 





  var prefix = "f!";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});



 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("f!كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
