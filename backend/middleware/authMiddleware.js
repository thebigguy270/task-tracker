const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token.split(" ")[1], jwtConfig.secret, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Failed to authenticate token" });
    req.userId = decoded.userId;
    next();
  });
};
