const { User } = require('../../../database/DB_connection');

class Users {
    constructor(){}

    async postUser(req, res){
        const {user, password} = req.body;
        if(user.length === 0 || password.length === 0) {
            return res.status(400).json('Faltan Datos');
        };
        const newUser = await User.create({
            email: user,
            password,
        });
        return newUser;
    }
}

module.exports = Users;