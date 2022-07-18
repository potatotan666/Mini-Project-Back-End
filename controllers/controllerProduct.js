const Product = require("../models/modelProduct");

class controllerProduct {
  static PostNewProduct(req, res, next) {
    const body = req.body;
    if (body.name == null) {
      res.status(400).json({ message: "Please fill all form!" });
    }
    Product.postNewProducts(body);
    res.status(201).json({ message: "Success create new product!" });
  }
}

module.exports = controllerProduct;
