const User = require("../models/modelMerchant");
const jwt = require("jsonwebtoken");
const modelMerchant = require("../models/modelMerchant");

class controllerMerchant {
  static async login(req, res, next) {
    const body = req.body;
    const user = await modelMerchant.findUserByNameAndPassword(
      body.name,
      body.password
    );
    if (user && user.length != 0) {
      const token = jwt.sign({ user }, "shhhhh");
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}

module.exports = controllerMerchant;
