const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');

router.use('/public', require("./public"));

router.use('/private', validateToken, require('./private'));

module.exports = router;