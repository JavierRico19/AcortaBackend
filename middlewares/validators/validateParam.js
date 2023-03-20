const { param } = require('express-validator');
const { validateResult } = require('./validateHelper');

const validateParam = [
    param('shorturl')
    .exists()
    .withMessage("Url param doesn't exist!")
    .notEmpty()
    .withMessage("Url param is empty!")
    .isAlphanumeric()
    .withMessage("Invalid url format")
    .isLowercase()
    .withMessage("Invalid url format")
    .isLength({ min:8, max:8 })
    .withMessage("Invalid url length"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateParam };