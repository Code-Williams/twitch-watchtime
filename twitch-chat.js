// Created by Williams
// Get your chat password using this link => https://twitchapps.com/tmi/
const tmi = require("tmi.js");
const { red, green, yellow, blue } = require("chalk");

const channels = [];
const username = "";
const password = "";

var config = {
  options: {
    debug: true,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username: username,
    password: password,
  },
  channels: channels,
};

var client = new tmi.client(config);

client.connect();

client.on("connected", async (address, port) => {
  console.log(
    red(`--------------Your Twitch Bot Running On`),
    yellow(`${address}:${port}`)
  );
  console.log(red(`--------------Developer :`), yellow(`Williams`));
});
