const express = require("express");
const {encrypt, compare} = require("../utils/handlePassword");
const {userModel} = require("../models/nosql/users");
const {tokenSign } = require("../utils/handle.Jwt");
const router = express.Router();
const loginController = require("../controllers/auth");


/**
 * Register url
 */
router.post("/register", loginController);

router.post("/login", (req, res) => {

});

module.exports = router;