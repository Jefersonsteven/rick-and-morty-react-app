require("dotenv").config();
const http = require("http");
const getChartById = require("./controllers/getCharById");
const getDetail = require("./controllers/getDetail");

const PORT = 3001;
console.log(`Server open in http://localhost:${PORT} 🚀`);

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    () => {
      const { url } = req;
    if (url.includes("onsearch")) getChartById(res, url.split("/").pop());
    if(url.includes("detail")) getDetail(res, url.split("/").pop())
    }

  })
  .listen(PORT, "localhost");