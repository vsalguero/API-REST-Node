const express = require("express");

const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * In the new documentation for Express-validator you must send function validateResult for each item
 */

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min: 2, max: 100}),
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("summary")
    .exists()
    .notEmpty()
    .isLength({min: 5, max: 300}),
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("genre")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("poster")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("director")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("date_release")
    .exists()
    .notEmpty()
    .isDate,
    (req, res, next) => {
        return validateResults(req, res, next);
     },
    check("mediaId")
    .exists()
    .notEmpty()
    .isMongoId,
    (req, res, next) => {
       return validateResults(req, res, next);
    }


];

module.exports = { validatorCreateItem };