const axios = require("axios");
const { KEY, URL_API } =  process.env;

const getDetail = (res, ID) => {
  axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
  .then(({ data }) => { 
    const { id, image, name, gender, species, origin } = data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id, image, name, gender, species, origin }));
  })
  .catch(({ message }) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(message);
  })
}


module.exports = getDetail