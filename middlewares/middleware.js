const jwt = require("jsonwebtoken");
const db = require("../config/db");
class middleware {
  static checkAuth(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const token = req.headers.authorization;
    let verifyToken = null;
    if (token) {
      verifyToken = jwt.verify(token, "shhhhh");
      if (verifyToken) {
        next();
      }
      // res.status(401).json({ message: "Unauthorized" });
    }
    req.user = verifyToken;
    // console.log(req.user.user.id);
    //
  }
}

module.exports = middleware;
