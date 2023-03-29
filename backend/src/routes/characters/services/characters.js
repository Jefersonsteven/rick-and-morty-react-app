const axios = require('axios');

class Characters {
  constructor(){
    this.characters = [];
    this.url = "https://rickandmortyapi.com/api/character/";
  }

  thisCharacter(id){
    return this.fav.findIndex(character => character.id == id);
  }

  async getChatById(value){
    const response = await axios.get(`${this.url}${value}`);
    const { id, name, species, image, gender } = response.data;
    if(!response.data) {
      throw Error('No se encuentra el personaje');
    }
    return { id, name, species, image, gender };
  }

  async getChartDetail(value){
    const response = await axios.get(`${this.url}${value}`);
    const { id, name, species, image, gender, origin } = response.data;
    if(!response.data) {
      throw Error('No se encuentra el detalle del personaje');
    }
    return { id, name, species, image, gender, origin };
  }

  addFavorite(character){
    this.fav.push(character);
    return true;
  }

  findFavorites(){
    return this.fav;
  }
}

module.exports = Characters;