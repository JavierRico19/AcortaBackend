const UrlManager = require('../../model/url');

const publicGetController = async (req, res) => {
    const shortUrl = req.params.shorturl;
    
    const dbCall = await UrlManager.findShort(shortUrl);

    if(dbCall == null){
        return res.status(404).json('Url not found!').end();
    }

    res.status(200).json(dbCall.longUrl).end();

};

module.exports = publicGetController;