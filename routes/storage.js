const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage");


router.post("/", uploadMiddleware.single("myFile"), createItem, (req, res) =>{
    res.send({data: 1});
});

module.exports = router;