const axios = require("axios");
const { KEY, URL_API } =  process.env;


const success = () => {}

const getChartById = (res, ID) => {
  axios.get(`${URL_API}character/${ID}`)
    .then(({ data }) => { 
      const { id, image, name, gender, species } = data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ id, image, name, gender, species }));
    })
    .catch(({ message }) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(message);
    })
}

module.exports = getChartById;