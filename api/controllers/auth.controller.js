const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const errorHandler = require("../utils/error");

const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        next(errorHandler(400, "All fields are Required"));
    }

    const hashedPassword = bcrypt.hashSync(password,10)

    const newUser = new User({
        userName,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json({ message: "Signup Succeessfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    signup
}