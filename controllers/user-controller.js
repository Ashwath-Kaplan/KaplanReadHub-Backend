const { base64ToString } = require("../helpers/auth-helpers");
const { isValidEmail } = require("../helpers/validate-email");
const {
  addUserService,
  loginUserService,
  logoutUserService,
  getUserService,
} = require("../services/user-service");

const addUser = async (req, res) => {
  try {
    let userDetails = req.body;

    if (!userDetails.firstName) {
      throw new Error("Valid First name is required !");
    }
    if (!userDetails.lastName) {
      throw new Error("Valid last name is required !");
    }
    if (!userDetails.email || !isValidEmail(userDetails.email)) {
      throw new Error("Valid email is required !");
    }
    if (!userDetails.password) {
      throw new Error("Valid password is required !");
    }

    // Convert password from type base64 to string
    userDetails.password = base64ToString(userDetails.password);

    const result = await addUserService(userDetails);
    return res
      .status(200)
      .json({ success: result.success, message: result.message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    var { email, password } = req.body;

    if (!email || !isValidEmail(email)) {
      throw new Error("Valid email is required !");
    }
    if (!password) {
      throw new Error("Valid password is required !");
    }

    password = base64ToString(password);

    const result = await loginUserService(email, password);
    return res.status(200).json({
      success: result.success,
      message: result.message,
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    if (!req.user.email || !isValidEmail(req.user.email)) {
      throw new Error("Valid email is required !");
    }

    const result = await logoutUserService(req.user.email);
    return res
      .status(200)
      .json({ success: result.success, message: result.message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
  const result = await getUserService(req.user.email);

  return res.status(200).json({
    user: result.user,
  });
};

module.exports = { addUser, login, logout, getUser };
