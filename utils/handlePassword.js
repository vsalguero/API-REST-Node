const bcryptjs = require("bcryptjs");

/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 */

const encrypt = async (passwordPlain) => {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(passwordPlain, salt);
    return hash;
    //TODO: "879adfOIFijjee892384y9"
}


/**
 * Comparar contraseña plana con la contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
   return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {encrypt, compare};