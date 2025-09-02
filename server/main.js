const express = require("express");
const User = require("./models/userModel");
const connectDB = require("./config/db_connection");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());



connectDB();

app.post("/adduser", async(req, res) => {
    try{
        // console.log(req.body);
        const { name, message } = req.body;
        await User.insertOne({name, message});
        res.status(200).send({popup: "User Inserted"});
    }
    catch(err){
        res.status(404).send({popup: err});
    }
})

app.get("/getusers", async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).send(users);
    }
    catch(err){
        res.status(404).send(users);
    }
})




app.listen(3000, () => {
    console.log("Server Started");
})