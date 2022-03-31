const { send } = require("express/lib/response");
const {storageModel} = require("../models/nosql/storages");

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener un listado de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
   const data = await storageModel.find({});
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
    const {body, file} = req;
    const fileData = {
        filename : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
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