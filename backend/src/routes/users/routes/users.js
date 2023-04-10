const Users = require("../services/users");
const newUsers = new Users();
const express = require('express');
const users = express.Router();

users.post('/logout', async (req, res) => {
    try {
        const newUser = await newUsers.postUser(req, res);
        res.status(201).json({
            message: 'Created',
            data: newUser 
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})

users.post('/', async (req, res) => {
    try {
        const access = await newUsers.login(req, res);
        res.json(access);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = users;
