const {encrypt} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handle.Jwt");
const {userModel } = require("../models/nosql/users");

const loginController = async (req, res) => {
    const passwordHash = await encrypt(req.body.password);
    const body = {...req.body, password: passwordHash};
    const dataUser  = await userModel.create(body);
    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    res.send({data});
}

module.exports = {loginController};