const express = require("express");
const User = require("./models/userModel");
const connectDB = require("./config/db_connection");
const app = express();

connectDB();



app.listen(3000, () => {
    console.log("Server Started");
})