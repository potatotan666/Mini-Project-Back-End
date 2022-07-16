const jwt = require("jsonwebtoken");
class middleware {
  static checkAuth(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const token = req.headers.authorization;
    // const verifyHeaders =
    let verifyToken = null;
    if (token) {
      verifyToken = jwt.verify(token, "shhhhh");
      if (verifyToken) {
        next();
      }
      // res.status(401).json({ message: "Unauthorized" });
    }
    //
  }
}

module.exports = middleware;
