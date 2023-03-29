const Characters = require('../services/characters');
const newCharacters = new Characters();
const express = require('express');
const characters = express.Router();

characters.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await newCharacters.getChatById(id);
    res.json(character);
  } catch (error) {
    res.status(500).json({ 
      message: error.message
    })
  }
})

characters.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await newCharacters.getChartDetail(id);
    res.json(character);
  } catch (error) {
    res.status(500).json({ 
      message: error.message
    })
  } 
})

module.exports = characters;