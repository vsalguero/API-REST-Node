/**
 * 
 * @param {arrglo de permisos permitidos} rol 
 * @returns 
 */

const {handleHttpErrors} = require("../utils/handleErrors");

const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req;
        const rolesByUser = user.roles;
        const checkValueRol = roles.some((rolSingle)=> rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpErrors(res, "USER_NOT_PERMISSIONS", 403);
            return
        }
        next();
        
    } catch (error) {
        handleHttpErrors(res, "ERROR_PERMISSIONS", 403);
    }
}

module.exports = {checkRol};