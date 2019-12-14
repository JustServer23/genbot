const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.login("NjU0MzI3MTM2NTgwMTQxMDg3.XfD7wg.EB_pyyiytaXj2bJVZfnIy-sdKXM");

client.on("ready", () => {
  client.user.setPresence({ game: { name: '!help '}});
  console.log("Lancement...");
});

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('|| https://image.noelshack.com/fichiers/2019/50/3/1576064593-lazoen.png ||  https://discord.gg/KEM9fyn');
    }).catch(console.error);
  })

client.on('message', message => {
    if (message.content === 'invite') {
    message.channel.sendMessage('https://discord.gg/KEM9fyn');
  }
});

/// STATUT TWITCH

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'https://discord.gg/KEM9fyn',
          type: "STREAMING",
          url: "https://www.twitch.tv/red_jean"
      }
  });
});

/// GEN METAL

client.on('message', message => {
  if (message.content === '!metal') {
    const embed = new RichEmbed()
      .setTitle('Codes : ')
      .setColor(0xFF0000)
      .setDescription('Voici le lien : https://pastebin.com/BWHF9fgi', true);
    message.channel.send(embed);
  }
});

/// GEN NORDVPN

client.on('message', message => {
  if (message.content === '!nordvpn') {
    const embed = new RichEmbed()
      .setTitle('Codes : ')
      .setColor(0xFF0000)
      .setDescription('Voici le lien : https://pastebin.com/6VX5aeGe', true);
    message.channel.send(embed);
  }
});

/// GEN HULU

client.on('message', message => {
  if (message.content === '!hulu') {
    const embed = new RichEmbed()
      .setTitle('Codes : ')
      .setColor(0xFF0000)
      .setDescription('Voici le lien : https://pastebin.com/ryZMwzHU', true);
    message.channel.send(embed);
  }
});

/// GEN SPOTIFY

client.on('message', message => {
  if (message.content === '!spotify') {
    const embed = new RichEmbed()
      .setTitle('Codes : ')
      .setColor(0xFF0000)
      .setDescription('Voici le lien : SOON...', true);
    message.channel.send(embed);
  }
});

/// GEN MINECRAFT

client.on('message', message => {
  if (message.content === '!minercaft') {
    const embed = new RichEmbed()
      .setTitle('Codes : ')
      .setColor(0xFF0000)
      .setDescription('Voici le lien : SOON...', true);
    message.channel.send(embed);
  }
});

/// HELP

client.on('message', message => {
  if (message.content === '!help') {
    var embed = new Discord.RichEmbed()
      .setTitle('Voici les commandes :')
      .addField("!help.","Vous permet de voir ce texte", true)
      .addField("!generator","Vous permet d'avoir la liste de comptes que vous vouliez génère !",)
      .setFooter("Crée par 𝔼𝕩𝕒𝕤𝕐#0666")
      .setColor(0x00FF00)
    message.channel.send(embed);
  }
});

/// GENERATEUR

client.on('message', message => {
  if (message.content === '!generator') {
    var embed = new Discord.RichEmbed()
      .setTitle('Voici les commandes :')
      .addField("!metal.","Vous permet d'avoir le lien des codes !", true)
      .addField("!nordvpn","Vous permet d'avoir le lien des comptes !",)
      .addField("!hulu","Vous permet d'avoir le lien des comptes !",)
      .addField("!spotify","Vous permet d'avoir le lien des comptes !",)
      .addField("!minecraft","Vous permet d'avoir le lien des comptes !",)
      .setFooter("Crée par 𝔼𝕩𝕒𝕤𝕐#0666")
      .setColor(0x00FF00)
    message.channel.send(embed);
  }
});
