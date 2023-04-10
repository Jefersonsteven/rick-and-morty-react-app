const { User } = require('../../../database/DB_connection');

class Users {
    constructor(){}


    async login(req, res) {
        const {user, password} = req.body;
        if(user.length === 0 || password.length === 0) {
            res.status(400).json('Faltan Datos');
        } else {
            const userFind = await User.findOne({
                where: { email: user }
            })
            if(user) {
                if(password === userFind.password) {
                    return {
                        access: true
                    };
                } else {
                    return res.status(403).json({message: "Contraseña incorrecta"});
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