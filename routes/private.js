var express = require('express');
var router = express.Router();
const { validateUrl } = require('../middlewares/validators/validateUrl');

router.post('/post', validateUrl, require('../controllers/Url/postUrl'));

router.get('/url', require('../controllers/Url/getUrlById'));

router.patch('/patch', require('../controllers/Url/patchUrl'));

router.delete('/delete', require('../controllers/Url/deleteUrl'));

module.exports = router;