const { User } = require('../../../database/DB_connection');

class Users {
    constructor(){}


    async login(req, res) {
        const {email, password} = req.body;
        if(email.length === 0 || password.length === 0) {
            res.status(400).json('Faltan Datos');
        } else {
            const user = await User.findOne({
                where: { email }
            })
            if(user) {
                if(password === user.password) {
                    return {
                        access: true
                    };
                } else {
                    res.status(403).json({message: "Contraseña incorrecta"});
                }
            }
        }
        return res.status(404).json({message: "Usuario no encontrado"});
    }

    async postUser(req, res){
        const {email, password} = req.body;
        if(email.length === 0 || password.length === 0) {
            res.status(400).json('Faltan Datos');
        } else {
            const [user, created] = await User.findOrCreate({
                where: {email, password},
            });
            if(created) {
                return user;
            } 
        }
        
    }
}

module.exports = Users;