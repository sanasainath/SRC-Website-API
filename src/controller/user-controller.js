const { UserService } = require("../services/index");
const path = require("path");
const userService = new UserService();

const signup = async (req, res) => {
  try {
    const user = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role,
    });
    return res.status(201).json({
      success: true,
      data: user,
      message: "Successfully created a new user",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.signin(req.body);
    return res.status(200).json({
      success: true,
      data: token,
      message: "Successfully logged in",
      err: {},
    });
  } catch (error) {
    console.log("problem");
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.params.token;
    const response = await userService.verifyUser(token);
    // return res.status(201).json({
    //   success: true,
    //   err: {},
    //   data: response,
    //   message: response.message,
    // });
    return res
      .status(201)
      .sendFile(path.join(__dirname, "../", "/utils/valid.js"));
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong,123",
      data: {},
      err: error.message,
    });
  }
};
const passwordResetLink = async (req, res) => {
  console.log("req body:" + req.body);
  try {
    const response = await userService.sendResetLink(req.body.email);
    return res.status(201).json({
      success: true,
      err: {},
      data: response,
      message: response.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong,123",
      data: {},
      err: error.message,
    });
  }
};
const updatePassword = async (req, res) => {
  try {
    const password = req.body.password;
    const response = await userService.resetPassword(
      req.params.token,
      password
    );
    return res.status(201).json({
      success: true,
      err: {},
      data: response,
      message: response.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong,123",
      data: {},
      err: error.message,
    });
  }
};

module.exports = {
  signup,
  login,
  verify,
  passwordResetLink,
  updatePassword,
};
