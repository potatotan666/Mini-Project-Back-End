const express = require("express");
const router = express.Router();
const modelMerchant = require("../models/modelMerchant");
const db = require("../config/db");
const controllerMerchant = require("../controllers/controllerMerchant");

// Merchant login
router.post("/login", controllerMerchant.login);

// Get all merchant data
router.get("/", modelMerchant.getMerchant);

// Get merchant info by name
router.get("/:id", modelMerchant.getMerchantInfoByName);

// Update merchant data
router.put("/password/:id", modelMerchant.updateMerhant);
// Post new merchant
router.post("/", modelMerchant.postMerchant);

// Delete merchant
router.delete("/:id", modelMerchant.deleteMerchant);

module.exports = router;
