const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(`Connection Error: ${err.message}`))


const port = 3000;
app.listen(port, console.log(`Server is Running on ${port}`));