const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/middleware");
const controllerMerchant = require("../controllers/controllerMerchant");

// Merchant login
router.post("/login", controllerMerchant.login);

// Get all merchant data
router.get("/", middleware.checkAuth, controllerMerchant.getMerchant);

// Get merchant info by name
router.get(
  "/:id",
  middleware.checkAuth,
  controllerMerchant.getMerchantInfoByName
);

// Update merchant password
router.put(
  "/password/:id",
  middleware.checkAuth,
  controllerMerchant.updateMerchantPassword
);

// Post new merchant
router.post("/", middleware.checkAuth, controllerMerchant.postMerchant);

// Delete merchant
router.delete("/:id", middleware.checkAuth, controllerMerchant.deleteMerchant);

module.exports = router;
