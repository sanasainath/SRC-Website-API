const {UserService} = require('../services/index');

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const user = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            collegeId:req.body.collegeId,
            role:req.body.role
        });
        return res.status(201).json({
            success: true,
            data: user,
            message: "Successfully created a new user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        });
    }
}

const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            data: token,
            message: "Successfully logged in",
            err: {}
        });
    } catch (error) {
        console.log("problem");
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        });
    }
}

module.exports = {
    signup,
    login
};
