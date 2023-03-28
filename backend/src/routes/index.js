const characters = require('../routes/characters/routes/charactes');
const express = require('express');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/characters', characters);
}

module.exports = routerApi;
