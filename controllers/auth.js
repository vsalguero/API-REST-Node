const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { userModel } = require("../models/nosql/users");
const { handleHttpErrors } = require("../utils/handleErrors");

const registerController = async (req, res) => {
    try {
        const passwordHash = await encrypt(req.body.password);
        const body = { ...req.body, password: passwordHash };
        const dataUser = await userModel.create(body);
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({ data });
    } catch (error) {
        handleHttpErrors(res, "ERROR_REGISTER_USER");
    }
};

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
            .select('password name role email');
            console.log(user);
        if (!user) {
            handleHttpErrors(res, "USER_NOT_EXISTS", 404);
            return
        }
        const hashPassword = user.password;
        const check = await compare(req.body.password, hashPassword);
        if (!check) {
            handleHttpErrors(res, "PASSWORD_INCORRECT", 401);
            return
        }
        user.set("password", undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send(data);

    } catch (error) {
        handleHttpErrors(res, "ERROR_LOGIN_USER");
    }

};



module.exports = { registerController, loginController};