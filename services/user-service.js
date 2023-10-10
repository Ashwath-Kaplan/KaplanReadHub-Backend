const { comparePassword } = require("../helpers/compare-password");
const { hashPassword } = require("../helpers/hash-password");
const { tokenGeneration } = require("../helpers/token-generation");
const {
  checkUserEmail,
  addNewUser,
  loginUser,
  logoutUser,
} = require("../models/user-query");

const addUserService = async (userDetails) => {
  try {
    // Chech if the email is already present in the database
    const results = await checkUserEmail(userDetails.email);
    if (results.length > 0) {
      throw new Error("Email is already taken !");
    }
    // Hash the password
    userDetails.password = await hashPassword(userDetails.password);
    // Add new user
    await addNewUser(userDetails);

    return {
      success: true,
      message: "User added successfully !",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUserService = async (email, password) => {
  try {
    // Check if there is an existing user with the email
    const result = await checkUserEmail(email);
    if (result.length !== 1) {
      throw new Error("Login failed. Invalid email !");
    }

    const user = result[0];
    // Compare the password sent by the user with the password stored in database
    const isMatch = await comparePassword(password, user.Password);
    if (!isMatch) {
      throw new Error("Login failed. Invalid password !");
    }

    // Set the IsLoggedIn flag as true in database
    await loginUser(user.UserID);

    // Create a new session token
    const token = tokenGeneration(user.email);

    return {
      success: true,
      message: "Login successful !",
      user: {
        firstName: user.FirstName,
        lastName: user.LastName,
        email: user.Email,
      },
      token: token,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const logoutUserService = async (email) => {
  try {
    // Set IsloggedIn flag as false
    await logoutUser(email);

    return {
      success: true,
      message: "Logout successful !",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { addUserService, loginUserService, logoutUserService };
