const express = require("express");
const router = express.Router();
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/movies");
const authMiddleware = require("../middleware/session");
const {checkRol} = require("../middleware/rol");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/movies.js");


//TODO: http://localhost/movies GET, POST, DELETE, PUT

/**
 * Get list
 */
router.get("/", getItems);

/**
 * Get list
 */
router.get("/:id", authMiddleware, checkRol(["admin"]), getItem);

/**
 * Create a new movie
 */

router.post("/", authMiddleware, createItem);

/**
 * Actualizar un registro
 */

router.put("/:id", authMiddleware, updateItem);

/**
 * Actualizar un registro
 */

router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;
