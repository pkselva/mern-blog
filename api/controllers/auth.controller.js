const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" });
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
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    signup
}