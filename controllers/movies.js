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
    //handleHttpErrors(res, 'Error in getItems movies');
    res.send({ data: 0 });
  }
};

/**
 * Obtener la información de un item
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    const data = await moviesModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, "ERROR_GET_ITEM");
  }
};

/**
 * Almacenar un registro
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  try {
    //const {body} = matchedData(req);
    const { body } = req;
    const data = await moviesModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, `Error in createItem movie ${error}`);
  }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => {
  try {
    //const {body} = matchedData(req);
    const { body } = req;
    const id = req.params.id;
    console.log(body);
    const data = await moviesModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, `Error updating movie ${error}`);
  }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    //req = matchedData(req);
    const id = req.params.id;
    const data = await moviesModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, `Error deleting movie ${error}`);
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
