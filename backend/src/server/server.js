require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routerApi = require("../routes");
const { conn } = require('../database/DB_connection');
const app = express();

const PORT =  process.env.PORT || 3001;

conn.sync({alter: true})
    .then(() => {
        app.use(express.json());
        app.use(cors()); 
        app.listen(PORT);
        routerApi(app);
    })

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});


// const whitelist = ['http://localhost:3001', 'https://rickandmorty-jeffer.netlify.app'];
// const options = {
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback('No permitido', false)
//     }
//   } 
// }
// app.use(cors(options));