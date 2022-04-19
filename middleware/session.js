const { userModel } = require("../models/nosql/users");
const { handleHttpErrors } = require("../utils/handleErrors");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpErrors(res, "NEED_SESSION", 401);
        }
        const token = req.headers.authorization.split(" ").pop();
        const dataToken = await verifyToken(token);
        if (!dataToken._id) {
            handleHttpErrors(res, "ERROR_ID_TOKEN", 401);
            return
        }

        //save de user logged in a session
        const user = await userModel.findById(dataToken._id);
        req.user = user;

        next();

    } catch (error) {
        handleHttpErrors(res, "NOT_SESSION", 401);
    }

}

module.exports = authMiddleware;