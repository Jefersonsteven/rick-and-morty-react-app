const http = require('http');
const fs = require("fs");
const characters = require("./utils/data");

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { url } = req;

  if(url.includes('rickandmorty/character')) {
    const id = url.split("/").pop();
    const character = characters.filter(character => character.id == id)[0];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  }

  res.writeHead(400, { "Content-Type": "text/plain" });
  res.end("character not found");
}).listen(PORT, "localhost")