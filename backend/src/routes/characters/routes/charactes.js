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
  console.log('entre');
  const { id } = req.params;
  const character = await newCharacters.getChartDetail(id);
  if(character.id == id){
    return res.json(character);
  }
  res.status(500).json({ 
    message: 'error'
  })
})

module.exports = characters;