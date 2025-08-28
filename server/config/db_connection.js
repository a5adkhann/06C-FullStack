const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://asadkaptech:pr2-202306c-2@cluster0.yaarief.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MDB Connected");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;