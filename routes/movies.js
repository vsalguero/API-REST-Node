const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/movies");
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/movies.js");



//TODO: http://localhost/movies GET, POST, DELETE, PUT

/**
 * Get list
 */
router.get('/', getItems);

/**
 * Get list
 */
 router.get('/:id', getItem);

/**
 * Create a new movie
 */

router.post('/', createItem);

/**
 * Actualizar un registro
 */

 router.put('/:id', updateItem);

 /**
 * Actualizar un registro
 */

  router.delete('/:id', deleteItem);

module.exports = router;