const { isValidEmail } = require("../helpers/validate-email");
const {
  addUserService,
  loginUserService,
  logoutUserService,
} = require("../services/user-service");

const addUser = async (req, res) => {
  try {
    var userDetails = req.body;
    var { firstName, lastName, email, password } = userDetails;

    if (!firstName) {
      throw new Error("Valid First name is required !");
    }
    if (!lastName) {
      throw new Error("Valid last name is required !");
    }
    if (!email || !isValidEmail(email)) {
      throw new Error("Valid email is required !");
    }
    if (!password) {
      throw new Error("Valid password is required !");
    }

    const result = await addUserService(userDetails);
    if (result.success) {
      return res
        .status(200)
        .json({ success: result.success, message: result.message });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !isValidEmail(email)) {
      throw new Error("Valid email is required !");
    }
    if (!password) {
      throw new Error("Valid password is required !");
    }

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
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      throw new Error("Valid email is required !");
    }

    const result = await logoutUserService(email);
    return res
      .status(200)
      .json({ success: result.success, message: result.message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { addUser, login, logout };
