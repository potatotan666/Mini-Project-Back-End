const express = require("express");
const router = express.Router();
const db = require("../config/db");
const controllerProduct = require("../controllers/controllerProduct");
const middleware = require("../middlewares/middleware");
const modelProduct = require("../models/modelProduct");

// Get all products data
router.get("/", middleware.checkAuth, controllerProduct.getAllProducts);

// Post new products
router.post("/", middleware.checkAuth, controllerProduct.PostNewProduct);

// Update product quantity
router.put("/:id/quantity", controllerProduct.updateQuantity);

// Update product price
router.put("/:id/price", controllerProduct.updatePrice);

// Delete product
router.delete("/:id", controllerProduct.deleteProduct);

module.exports = router;
