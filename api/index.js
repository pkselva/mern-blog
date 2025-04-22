const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const connection = require("./config/connection");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

connection();

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use("/", (req, res) => res.json({ message: "API is Working" }));

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

const port = 3000;
app.listen(port, console.log(`Server is Running on ${port}`));