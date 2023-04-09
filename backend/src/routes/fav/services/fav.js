const axios = require('axios');
const {Favorite} = require('../../../database/DB_connection');

class Fav {
  constructor(){
    this.fav = []
  }

  thisCharacter(id){
    return this.fav.findIndex(character => character.id == id);
  }

  async addFavorite(req, res){
    const { character } = req.body;
    const { name, origin, status, image, species, gender } = character;

    if(name&&origin&&status&&image&&species&&gender) {
      const [favorite, created] = await Favorite.findOrCreate({
        where: { name },
        defaults: { origin, status, image, species, gender }
      });
      if(created) {
        return favorite;
      } else {
        res.status(400).json({message:'Ya esta agregado a favoritos'});
      }
    } else {
      res.status(400).json({message:'No se pudo agregar a favoritos, faltan datos'});
    }
  }

  findFavorites(){
    if(this.fav) {
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