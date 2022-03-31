/**
 * Obtener un listado de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const { send } = require("express/lib/response");
const {moviesModel} = require("../models/nosql/movies");

const getItems = async (req, res) => {
   const data = await moviesModel.find({});
   res.send({data});
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
    const {body} = req;
    const data = await moviesModel.create(body);
    res.send({data});
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

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};