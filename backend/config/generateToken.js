const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
JWT_SECRET = "abhijith";
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = generateToken;
