let Discord = require("discord.js")
let client = new Discord.Client()
const config = require('./config.json')
const command = require('./commands.js')
const express = require("express")
const app = express()
const mySecret = process.env['token']

app.get("/", (req, res) => {
  res.send("Holaaa que onda pa, ya estoy en linea Less Gouuu")
})

app.listen(3000, () => {
  console.log("Ya tamo listo pa, prendido y andando yeahhh")
})

client.on('ready', () => {
	client.user.setActivity(`Eso`, {type: "WATCHING"})
});

client.login(mySecret)
