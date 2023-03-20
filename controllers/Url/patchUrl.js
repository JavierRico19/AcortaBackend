const UrlManager = require('../../model/url');
const { customAlphabet } = require('nanoid');

let nanoid = customAlphabet("1234567890abcdef", 8);

const patchUrlController = async (req, res) => {
    const { url, newUrl } = req.body
    let shortUrl = nanoid();
    const userId = req.userId;

    const dbCall = await UrlManager.updateUrl(url, newUrl, shortUrl, userId);

    if(dbCall == null){
        return res.status(404).json('Url not found!').end();
    }
    
    const userData = {
        LongUrl: dbCall.longUrl,
        shortUrl: dbCall.shortUrl
    
    }

    res.status(200).json(userData).end();
};

module.exports = patchUrlController;