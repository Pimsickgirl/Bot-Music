const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help`)
    .setDescription(` Hello **${message.author.username}**, \n *เลือกหมวดหมู่ด้านล่างเพื่อดูคำสั่ง* \n\n :question: มาใหม่ ${bot}? ตรวจสอบเซิพเวอร์ \n ${support} \n\n :question: เข้าร่วมเซิพเวอร์นักพัฒนาบอทได้เลย \n https://discord.gg/uB8KYHQ7yw`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)


    const music = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Music`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`นี่คือคำสั่งเล่นเพลงทั้งหมด: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\``)
    .setFooter(`Requested by: ${message.author.tag}`)



    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`นี่คือคำสั่งทั้งหมด: \n\n \`help\`, \`invite\``)
    .setFooter(`Requested by: ${message.author.tag}`)


    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
    .setStyle("blurple");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");



    let row = new MessageActionRow()
    .addComponents(button1, button2);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};