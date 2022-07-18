const express = require("express");
const router = express.Router();
const controllerProduct = require("../controllers/controllerProduct");
const middleware = require("../middlewares/middleware");

// Get all products data
router.get("/", middleware.checkAuth, controllerProduct.getAllProducts);

// Post new products
router.post("/", middleware.checkAuth, controllerProduct.PostNewProduct);

// Update product quantity
router.put(
  "/:id/quantity",
  middleware.checkAuth,
  controllerProduct.updateQuantity
);

// Update product price
router.put("/:id/price", middleware.checkAuth, controllerProduct.updatePrice);

// Delete product
router.delete("/:id", middleware.checkAuth, controllerProduct.deleteProduct);

module.exports = router;
