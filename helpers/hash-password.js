const { hash } = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing the password.");
  }
};

module.exports = { hashPassword };
