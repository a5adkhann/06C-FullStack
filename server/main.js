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
        res.status(404).send(err);
    }
})

app.put("/updateuser/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const { editName, editMessage } = req.body;

        console.log(editName);
        console.log(id);

        await User.updateOne({_id: id}, {$set: {name: editName, message: editMessage}});
        res.status(200).send({message: "Updated Successfully"});
    }
    catch(err){
        res.status(404).send(err);
    }
})




app.listen(3000, () => {
    console.log("Server Started");
})