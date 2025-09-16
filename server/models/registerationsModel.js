const mongoose = require("mongoose");

const registerationsModel = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

module.exports = mongoose.model("Registeration", registerationsModel);