const {
  comparePassword,
  hashPassword,
  tokenGeneration,
} = require("../helpers/auth-helpers");
const {
  selectUserByEmail,
  addNewUser,
  loginUser,
  logoutUser,
} = require("../models/user-query");

const addUserService = async (userDetails) => {
  try {
    // Chech if the email is already present in the database
    const [user] = await selectUserByEmail(userDetails.email);
    if (user) {
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
    throw error;
  }
};

const loginUserService = async (email, password) => {
  try {
    // Check if there is an existing user with the email
    const [user] = await selectUserByEmail(email);
    if (!user) {
      throw new Error("Login failed. Invalid email !");
    }

    // Compare the password sent by the user with the password stored in database
    const isMatch = await comparePassword(password, user.Password);
    if (!isMatch) {
      throw new Error("Login failed. Invalid password !");
    }
    // Set the IsLoggedIn flag as true in database
    await loginUser(user.UserID);

    // Create a new session token
    const token = tokenGeneration(user.Email);

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
    throw error;
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
    throw error;
  }
};

const getUserService = async (email) => {
  const [user] = await selectUserByEmail(email);

  return {
    user: {
      firstName: user.FirstName,
      lastName: user.LastName,
      email: user.Email,
    },
  };
};

module.exports = {
  addUserService,
  loginUserService,
  logoutUserService,
  getUserService,
};
