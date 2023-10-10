const { hash, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing the password.");
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing passwords.");
  }
};

const tokenGeneration = (email) => {
  return sign({ email }, process.env.SECRET, { expiresIn: "3d" });
};

const base64ToString = (password) => {
  return Buffer.from(password, "base64").toString("utf-8");
};

module.exports = {
  hashPassword,
  comparePassword,
  tokenGeneration,
  base64ToString,
};
