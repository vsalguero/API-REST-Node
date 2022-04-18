const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * In the new documentation for Express-validator you must send function validateResult for each item
 */

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId,
    (req, res, next) => {
       return validateResults(req, res, next);
    }
];

module.exports = { validatorGetItem };