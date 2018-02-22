'use strict'

const Discord = require("discord.js");
const config = require("./config.json");
const prefix = config.prefix;

const client = new Discord.Client({
  shardId: process.argv[1],
  shardCount: process.argv[2],
  fetchAllMembers: true
});


client.on("ready", () => {
  client.user.setGame("Your status here");
  client.user.setStatus("online");
  console.log("I'm alive")
});

