var express = require('express');
var router = express.Router();
const { validateLogin } = require('../middlewares/validators/validateLogin');
const { validateSignup } = require('../middlewares/validators/validateSignup');
const { validateParam } = require('../middlewares/validators/validateParam');

router.post('/signup', validateSignup, require('../controllers/Auth/signup'));

router.post('/login', validateLogin, require('../controllers/Auth/login'));

router.get('/:shorturl', validateParam, require('../controllers/Url/publicGetUrl'));

module.exports = router;