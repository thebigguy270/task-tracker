const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const jwtConfig = require("../config/jwtConfig");

exports.register = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hashedPassword],
    (err) => {
      if (err) return res.status(400).json({ error: "User already exists" });
      res.status(201).json({ message: "User registered successfully" });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (err || !user || !bcrypt.compareSync(password, user.password))
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, {
      expiresIn: "1h",
    });
    res.json({ token });
  });
};
