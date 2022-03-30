/**
 * Obtener un listado de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const {Movies} = require("../models/nosql/movies");

const getItems = async (req, res) => {
   const data = await Movies.find({});

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

const createItem = (req, res) => {
    
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