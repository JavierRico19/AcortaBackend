const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const AuthManager = require('../../model/auth');

const signupController = async (req, res) => {
    const {name, email, password} = req.body;
    const md5Password = CryptoJS.MD5(password).toString();
    
    const dbFind = await AuthManager.findUser(email);
   
    if(dbFind != null){
        return res.status(401).json("This email already exists")
    }

    const dbUser = await AuthManager.insertUser(name, email, md5Password);
    
    if(Object.entries(dbUser).length === 0){
        return res.status(400).json("Something went wrong").end();
    }

    const userId = dbUser._id.toString();

    const userData = {
        name: dbUser.name,
        email: dbUser.email
    }

    const token = jwt.sign({ userId }, process.env.SECRET, {
        algorithm: 'HS256',
        expiresIn: 3000
    })
    
    res.status(200).json({ token, userData }).end();

};

module.exports = signupController;