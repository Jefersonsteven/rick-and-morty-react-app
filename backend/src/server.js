const http = require("http");
const getChartById = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req; 
    if (url.includes("onsearch")) {
      getChartById(res, url.split("/").pop());
    }
  })
  .listen(PORT, "localhost");

// const PORT = 3001;

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   const { url } = req;

//   if(url.includes('rickandmorty/character')) {
//     const id = url.split("/").pop();
//     const character = characters.filter(character => character.id == id)[0];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(character));
//   }

//   res.writeHead(400, { "Content-Type": "application/json" });
//   res.end("character not found");
// }).listen(PORT, "localhost")