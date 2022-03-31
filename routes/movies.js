const express = require("express");
const router = express.Router();
const {getItems, getItem, createItem} = require("../controllers/movies.js");


//TODO: http://localhost/movies GET, POST, DELETE, PUT

router.get('/', getItems);

router.post('/', createItem);

module.exports = router;