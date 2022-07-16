const db = require("../config/db");

class modelProduct {
  static getAllProducts(req, res, next) {
    const query = "SELECT * FROM product";
    db.all(query, (err, row) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(row);
    });
  }
  static postNewProducts(req, res, next) {
    const body = req.body;
    if (body.name == null) {
      res.status(400).json({ message: "Name is required" });
    }
    const query =
      "INSERT INTO product (name, quantity, price, created_by, updated_by) VALUES (?,?,?,?,?)";
    db.run(
      query,
      [body.name, body.quantity, body.price, body.created_by, body.updated_by],
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    res.status(201).json({ message: "Success create new product!" });
  }
  static updateQuantity(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    const query =
      "UPDATE product SET quantity = ?, updated_at = (DATETIME('now')) WHERE id = ?";
    db.run(query, [body.quantity, id], function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ message: "Success updating quantity!" });
  }
  static updatePrice(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    const query =
      "UPDATE product SET price = ?, updated_at = (DATETIME('now')) WHERE id = ?";
    db.run(query, [body.price, id], function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ message: "Success updating price!" });
  }
  static deleteProduct(req, res, next) {
    const query = "DELETE from product WHERE id = ?";
    const userId = req.params.id;

    db.run(query, [userId], function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ message: "Success deleting product!" });
  }
}

module.exports = modelProduct;
