let mongoose = require('mongoose');

class Url{
    constructor(
        longUrl = null,
        shortUrl = null,
    ){
        this.longUrl = longUrl;
        this.shortUrl = shortUrl;
    }
}

let urlSchema = new mongoose.Schema ({
    longUrl: {
        type: String,
        trim: true,
        required: true
    },
    shortUrl: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: String,
        trim: true
    }
    
});

module.exports =  { urlSchema : mongoose.model('urls', urlSchema), Url : Url};