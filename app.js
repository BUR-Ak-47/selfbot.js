// Selfbot made by Burak
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
const { token } = require("./config.json");

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity("github.com/BUR-Ak-47")
})

client.on("message", message => {
  if (message.content === "!burak") 
    message.channel.send("https://github.com/BUR-Ak-47")
})

client.on("message", message => {
  if (message.content === "!burak") 
    message.channel.send("https://www.youtube.com/channel/UCfYslLqChf9wVn94u9E70dg")
})

client.on("message", message => {
  if (message.content === "!help") 
    message.channel.send("help command")
})

client.on("message", message => {
  if (message.content === "!template") 
    message.channel.send("template command")
})

client.login(token);
