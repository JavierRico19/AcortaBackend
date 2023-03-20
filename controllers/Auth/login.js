const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const AuthManager = require('../../model/auth');

const loginController = async (req, res) => {
    const {email, password} = req.body;
    const md5Password = CryptoJS.MD5(password).toString();

    const dbFind = await AuthManager.findUser(email);

    if(dbFind == null){
        return res.status(404).json('User not found').end();
    }

    if(dbFind.email != email || dbFind.password != md5Password){
        return res.status(401).json('Wrong email or password').end();
    }

    const userId = dbFind._id.toString();

    const userData = {
        name: dbFind.name,
        email: dbFind.email
    } 

    const token = jwt.sign({ userId }, process.env.SECRET, {
        algorithm: 'HS256',
        expiresIn: 3000
    })
    
    res.status(200).json({ token, userData }).end();

};

module.exports = loginController;