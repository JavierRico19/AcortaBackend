const mongoose = require('mongoose');
const dbClient = require('./connection');
const userSchema = require('./Schemas/userSchema');


class AuthManager {

    static findUser = async (email) => {
        dbClient();
        const dbCall = await userSchema.findOne({ email: email})
        return dbCall
    };
    
    static insertUser = async (name, email, password) => {
         dbClient();
        const dbCall = await userSchema.create({
            name: name,
            email: email,
            password: password
        });
    return dbCall;
    };

};

module.exports = AuthManager;