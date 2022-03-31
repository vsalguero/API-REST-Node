const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/movies");
const {getItems, getItem, createItem} = require("../controllers/movies.js");



//TODO: http://localhost/movies GET, POST, DELETE, PUT

router.get('/', getItems);

router.post('/',validatorCreateItem, createItem);

module.exports = router;