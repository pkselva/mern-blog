const { model, Schema } = require("mongoose");


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;