const axios = require('axios');
const {Favorite} = require('../../../database/DB_connection');

class Fav {
  constructor(){}

  async addFavorite(req, res){
    const character = req.body;
    const { name, origin, status, image, species, gender } = character;
    
    if(name&&origin&&status&&image&&species&&gender) {
      const [favorite, created] = await Favorite.findOrCreate({
        where: { name },
        defaults: { origin, status, image, species, gender }
      });
      if(created) {
        return favorite;
      } else {
        return res.status(400).json({message:'Ya esta agregado a favoritos'});
      }
    }
  }

  async findFavorites(){
    const fav = await Favorite.findAll();
    if(fav.length > 0) {
      return fav;
    }
  }

  async deleteFavorites(req, res) {
    const { id } = req.params;
    const favorite = await Favorite.findByPk(id);
    if(favorite) {
      await favorite.destroy();
      return this.findFavorites();
    } else {
      throw Error(`El personaje con id ${id} no se encuentra en favoritos`);
    }
  }
}

module.exports = Fav;
