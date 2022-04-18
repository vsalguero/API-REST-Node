const express = require("express");
const {encrypt, compare} = require("../utils/handlePassword");
const {userModel} = require("../models/nosql/users");
const { matchedData } = require("express-validator");
const router = express.Router();


/**
 * Register url
 */
router.post("/register", async (req, res) => {    
    const passwordHash = await encrypt(req.body.password);
    const body = {...req.body, password: passwordHash};
    const data  = await userModel.create(body);
    res.send({data});
})

router.post("/login", (req, res) => {

});

module.exports = router;