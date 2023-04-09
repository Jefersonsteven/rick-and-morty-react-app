const characters = require('./characters/routes/charactes');
const fav = require('./fav/routes/fav');
const users = require('./users/routes/users');
const express = require('express');


function routerApi(app) {
  const router = express.Router();
  
  app.get('/', (req, res) => {
    res.json('Hello, people!! ❤️🌎');
  })


  app.use('/api/v1', router);
  router.use('/login', users);
  router.use('/characters', characters);
  router.use('/rickandmorty/fav', fav);
}

module.exports = routerApi;
