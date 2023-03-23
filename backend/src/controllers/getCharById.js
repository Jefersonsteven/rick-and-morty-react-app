const axios = require("axios");

const getChartById = (res, ID) => {
  axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(({ data }) => { 
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch(({ message }) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(message);
    })
}

module.exports = getChartById;