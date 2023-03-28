const Characters = require('../services/characters');
const newCharacters = new Characters();
const express = require('express');
const characters = express.Router();

characters.get('/:id', async (req, res) => {
  const { id } = req.params;
  const character = await newCharacters.getChatById(id);
  if(character.id == id){
    return res.json(character);
  }
  res.status(500).json({ 
    message: 'error'
  })
})

characters.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  const character = await newCharacters.getChartDetail(id);
  if(character.id == id){
    return res.json(character);
  }
  res.status(500).json({ 
    message: 'error'
  })
})

// TODO: Separan rutas de fav
characters.post('/rickandmorty/fav', (req, res) => {
  const { body } = req;
  const addFavorite = newCharacters.addFavorite(body);
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

characters.get('/rickandmorty/fav', (req, res) => {
  const favorites = newCharacters.findFavorites();
  if(favorites[0]) {
    return res.json(favorites);
  }
  res.status(500).json({
    message: 'error'
  })
})

module.exports = characters;