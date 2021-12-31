const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");



mongoose
    .connect("mongodb://localhost:27017/dcs")
    .then(() => console.log("mongo db connected"));

app.get("/api", (req, res) => res.send("Hello Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
    const userList = await userModel.find({}, { username: true });

    if (userList.length === 0) {
        return res.json({ data: "no users in fullstack" });
    }
    console.log("List");
    return res.json({ data: userList });
});

// Register user
app.post("/api/registration", (req, res) => {
    const newUser = req.body;
    userModel.create(newUser);
    return res.json({ data: "registered successfully" });
});

//Login

app.post("/api/login", async (req, res) => {

    const uname = req.body.username;
    const pass = req.body.password;

    const udata = await userModel.findOne({
        username:uname,
        password:pass
    });

    if(udata)
    {
        res.json({ data: udata});

    }else{
        res.json({data:"Not Found User"});
    }
});

//Search other users

app.get('/api/user/:name', async (req, res) => {
    const uname = req.params.name;

    const cdata = await userModel.findOne({
        name: uname
    });

    if (cdata) {
        res.json({ data : cdata });
    } else {
        res.json({ data: "User not found" });
    }
});

//Update own details(user should not be able to update other user's details)

app.put("/api/updateuser", async (req, res) => {
    const newUser = req.body;
    const updateuser = await userModel.findOneAndUpdate({
        
        name: newUser.name,
        age:newUser.age,
        password:newUser.password
    });
    return res.json({ data: "Updated successfully" });
});


//Delete own account(user should not be able to delete other user accounts)

app.delete("/api/user/:name", async (req, res) => {

    const deleteuser = await userModel.findOneAndDelete({
        name: req.params.name,
    });
    return res.json({ data: deleteuser });
});

app.listen(port, () => console.log(`server running on port 4000`));