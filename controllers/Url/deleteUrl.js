const UrlManager = require('../../model/url');

const deleteUrlController = async (req, res) => {
    const { url } = req.body;

    const dbCall = await UrlManager.deleteUrl(url, req.userId);

    if(dbCall == null){
        return res.status(404).json('Url not found!').end();
    }

    res.status(200).json(dbCall).end();
};

module.exports = deleteUrlController;