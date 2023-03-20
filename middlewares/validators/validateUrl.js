const { check } = require('express-validator');
const { validateResult } = require('./validateHelper');

const validateUrl = [
    check("url")
    .exists()
    .withMessage("Url param doesn't exist!")
    .notEmpty()
    .withMessage("Url param is empty!"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateUrl };