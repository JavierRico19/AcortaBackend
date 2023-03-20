const mongoose = require('mongoose');
const dbClient = require('./connection');
const resources = require('./Schemas/urlSchema')
const urlSchema = resources.urlSchema;
const Url = resources.Url;

class UrlManager {
    // crea un array con los objetos de las url dejando de lado la id del usuario asociada a la URL
    static convertDataToObjects = (data) => {
        let urls = [];
        for(let item of data){
            urls.push(new Url(item.longUrl, item.shortUrl))
        };
        return urls;
    };

    //buscar si esa url ya tiene una url corta
    static findUrl = async (url, userId) => {
        dbClient();
        const dbCall = await urlSchema.findOne({ longUrl: url, userId: userId});
        return dbCall
        // return new Url(...dbCall)
    }
    // insertar una nueva url
    static insertUrl = async (url, shortUrl, userId) => {
        dbClient();
        const dbCall = await urlSchema.create ({ longUrl: url, shortUrl: shortUrl, userId: userId});
        return dbCall;
    }
    //borrar una url
    static deleteUrl = async (url, userId) => {
        dbClient();
        const dbCall = await urlSchema.findOne({ userId: userId }).deleteOne({ shortUrl: url });
        return dbCall;
    }

    static findShort = async (url) => {
        dbClient();
        const dbCall = await urlSchema.findOne({ shortUrl: url});
        return dbCall;
    }
    // devuelve todas las url de un usuario
    static findById = async (userId) => {
        dbClient();
        const dbCall = await urlSchema.find({ userId: userId });
        return this.convertDataToObjects(dbCall);
    }
    //Update url
    static updateUrl = async (url, newUrl, shortUrl, userId) => {
        dbClient();
        const dbCall = await urlSchema.find({ shortUrl: url, userId: userId  }).updateOne({ longUrl: newUrl, shortUrl: shortUrl });
        return dbCall;
    }
}

module.exports = UrlManager;