const UrlManager = require('../../model/url');
const { customAlphabet } = require('nanoid');

let nanoid = customAlphabet("1234567890abcdef", 8);

const urlController = async (req, res) => {
    const { url } = req.body;
    let shortUrl =  nanoid();
    const userId = req.userId;

    if(!userId){
        return res.status(400).json('Missing user id!').end();
    }
    
    const dbFind = await UrlManager.findUrl(url, userId);

    if(dbFind !== null){
        const userData = {
            longUrl: dbFind.longUrl,
            shortUrl: dbFind.shortUrl
        
        }
        return res.status(200).json(userData).end();
    }

    const dbInsert = await UrlManager.insertUrl(url, shortUrl, userId);

    if(dbInsert == null){
        res.status(400).json('Data base call failed').end();
    }
 
    const userData = {
        longUrl: dbInsert.longUrl,
        shortUrl: dbInsert.shortUrl
    
    }

    res.status(200).json(userData).end();
};

module.exports = urlController;