const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error");

const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        next(errorHandler(400, "All fields are Required"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

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

const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, "All fields are Required"));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(400, "Invalid Credentials"));
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Credentials"))
        }

        const { password: pass, ...rest } = validUser._doc;

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY);
        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    signup,
    signin
}