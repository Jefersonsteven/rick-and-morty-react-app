const axios = require('axios');

class Fav {
  constructor(){
    this.fav = []
  }

  thisCharacter(id){
    return this.fav.findIndex(character => character.id == id);
  }

  addFavorite(character){
    if(character.id) {
      if(this.thisCharacter(character.id) >= 0) {
        throw 'Ya esta agregado a favoritos'
      } else {
        return this.fav.push(character);
      }
    }
    throw 'No se pudo agregar a favoritos';
  }

  findFavorites(){
    if(this.fav[0]) {
      return this.fav;
    }
    throw 'No hay personajes en favoritos';
  }

  deleteFavorites(id) {
    if(this.thisCharacter(id) >= 0) {
      const index = this.thisCharacter(id)
      return this.fav.splice(index, 1);
    }
    throw 'No esta en favoritos';
  }
}

module.exports = Fav;