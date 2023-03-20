const UrlManager = require('../../model/url');

const getByIdController = async (req, res) => {
    
    const dbCall = await UrlManager.findById(req.userId);

    if(dbCall == null){
        return res.status(404).json('User not found!').end();
    }

    res.status(200).json(dbCall).end();
}

module.exports = getByIdController;