const express = require("express");
const router = express.Router();
const modelMerchant = require("../models/modelMerchant");
const db = require("../config/db");
const controllerMerchant = require("../controllers/controllerMerchant");

// Merchant login
router.post("/login", controllerMerchant.login);

// Get all merchant data
router.get("/", controllerMerchant.getMerchant);

// Get merchant info by name
router.get("/:id", controllerMerchant.getMerchantInfoByName);

// Update merchant data
router.put("/password/:id", controllerMerchant.updateMerchantPassword);

// Post new merchant
router.post("/", controllerMerchant.postMerchant);

// Delete merchant
router.delete("/:id", controllerMerchant.deleteMerchant);

module.exports = router;
