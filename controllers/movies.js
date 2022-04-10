const { matchedData } = require("express-validator");
const { send } = require("express/lib/response");
const { moviesModel } = require("../models/nosql/movies");
const { handleHttpErrors } = require("../utils/handleErrors");

/**
 * Obtener un listado de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    try {
        const data = await moviesModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpErrors(res, 'Error in getItems movies');
    }
}

/**
 * Obtener la información de un item
 * @param {*} req 
 * @param {*} res 
 */

const getItem = (req, res) => {

}

/**
 * Almacenar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {
    try {
        
        const body = matchedData(req);
        const data = await moviesModel.create(body);
        res.send({ data });
    } catch (error) {
        handleHttpErrors(res, 'Error in createItem movie');
    }

}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = (req, res) => {

}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {

}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };