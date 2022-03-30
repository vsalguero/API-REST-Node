const express = require("express");
const router = express.Router();
const {getItems, getItem} = require("../controllers/movies.js");


//TODO: http://localhost/movies GET, POST, DELETE, PUT

router.get('/', getItems);

router.get('/:id', getItem);

module.exports = router;