const UrlManager = require('../../model/url');

const redirectController = async (req, res) => {
    const shortUrl = req.params.shorturl;
    
    const findUrl = await UrlManager.findShort(shortUrl);

    if(findUrl == null){
        return res.status(404).json('Url not found!').end();
    }

    res.status(200).json(findUrl).end();
};

module.exports = redirectController;