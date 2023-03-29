const Fav = require('../services/fav');
const newFav = new Fav();
const express = require('express');
const fav = express.Router();


fav.post('/', (req, res) => {
  const { body } = req;
  const addFavorite = newFav.addFavorite(body);
  if(addFavorite){
    return res.status(201).json({
      message: 'add to favorite',
      data: body,
    });
  }
  res.status(500).json({
    message: 'error'
  })
})

fav.get('/', (req, res) => {
  const favorites = newFav.findFavorites();
  console.log(favorites);
  try {
    res.json(favorites);
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }

})

fav.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    newFav.deleteFavorites(id);
    res.json({
      message: 'deleted',
      id: id,
    })
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
})

module.exports = fav;