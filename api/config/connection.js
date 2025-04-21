const { connect } = require("mongoose");

const connection = () => {
    try {
        connect(process.env.MONGO_URL);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(`Connection Error: ${error.message}`);
    }
}

module.exports = connection;