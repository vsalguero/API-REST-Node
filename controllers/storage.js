const fs = require("fs");
const { send } = require("express/lib/response");
const { storageModel } = require("../models/nosql/storages");
const { handleHttpErrors } = require("../utils/handleErrors");


const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener un listado de la base de datos
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, "Error in getItems storage");
  }
};

/**
 * Obtener la información de un item
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpErrors(res, "Error in getItem storage");
  }
};

/**
 * Almacenar un registro
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
   try {
    const { body, file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
   } catch (error) {
    handleHttpErrors(res, "Error uploading file");
   }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id);
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted : 1
        }
        res.send({ data });
      } catch (error) {
        handleHttpErrors(res, "Error in delete item storage");
      }

};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
