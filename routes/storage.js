const express = require("express");
const multer = require("multer");

const router = express.Router();

/**
 * 
 */



/**
 * 
 */

router.post("/", uploadMiddleware.single("myFile"), (req, res) =>{
    res.send({data: 1});
});

module.exports = router;