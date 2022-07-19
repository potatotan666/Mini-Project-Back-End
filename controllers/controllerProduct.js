const jwt = require("jsonwebtoken");
const modelProduct = require("../models/modelProduct");
const Product = require("../models/modelProduct");

class controllerProduct {
  static getAllProducts(req, res, next) {
    modelProduct.getAllProducts(req, res, next);
  }
  static PostNewProduct(req, res, next) {
    const body = req.body;
    req.user = jwt.verify(req.headers.authorization, "shhhhh");
    if (body.name == null) {
      res.status(400).json({ message: "Please fill all form!" });
    }
    Product.postNewProducts(req, body);
    res.status(201).json({ message: "Success create new product!" });
  }
  static updateQuantity(req, res, next) {
    modelProduct.updateQuantity(req, res, next);
    res.status(200).json({ message: "Success updating quantity!" });
  }
  static updatePrice(req, res, next) {
    modelProduct.updatePrice(req, res, next);
    res.status(200).json({ message: "Success updating price!" });
  }
  static deleteProduct(req, res, next) {
    modelProduct.deleteProduct(req, res, next);
    res.status(200).json({ message: "Success deleting product!" });
  }
}

module.exports = controllerProduct;
