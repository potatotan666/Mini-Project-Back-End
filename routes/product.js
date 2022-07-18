const express = require("express");
const router = express.Router();
const db = require("../config/db");
const controllerProduct = require("../controllers/controllerProduct");
const middleware = require("../middlewares/middleware");
const modelProduct = require("../models/modelProduct");

// Get all products data
router.get("/", middleware.checkAuth, modelProduct.getAllProducts);

// Post new products
router.post("/", middleware.checkAuth, controllerProduct.PostNewProduct);

// Update product quantity
router.put("/:id/quantity", modelProduct.updateQuantity);

// Update product price
router.put("/:id/price", modelProduct.updatePrice);

// Delete product
router.delete("/:id", modelProduct.deleteProduct);

module.exports = router;
