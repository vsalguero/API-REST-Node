const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require("../controllers/storage");

router.post("/", uploadMiddleware.single("myFile"), createItem, (req, res) => {
  res.send({ data: 1 });
});

/**
 * Get all registers
 */
router.get("/", getItems);

/**
 * Get single item by id
 */
router.get("/:id", getItem);

/**
 * Delete item by id
 */

router.delete("/:id", deleteItem);

module.exports = router;
