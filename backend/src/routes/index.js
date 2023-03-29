const characters = require('../routes/characters/routes/charactes');
const fav = require('../routes/fav/routes/fav');
const express = require('express');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/characters', characters);
  router.use('/rickandmorty/fav', fav);
}

module.exports = routerApi;
