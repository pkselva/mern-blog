const express = require("express");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const connection = require("./config/connection");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use("/", (req, res) => res.json({ message: "API is Working" }));

const port = 3000;
app.listen(port, console.log(`Server is Running on ${port}`));