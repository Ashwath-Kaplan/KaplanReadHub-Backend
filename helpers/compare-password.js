const { compare } = require("bcrypt");

const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing passwords.");
  }
};

module.exports = { comparePassword };
