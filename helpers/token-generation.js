var { sign } = require("jsonwebtoken");

const tokenGeneration = (email) => {
  return sign({ email }, process.env.SECRET, { expiresIn: "3d" });
};

module.exports = { tokenGeneration };
