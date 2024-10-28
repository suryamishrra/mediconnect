const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/MedConnect");
}
main().then(() => {
    console.log("mongo connected");
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")));

app.get( "/medconnect/register" , ( req, res) => {
    res.render("register.ejs");
})
app.post("/medconnect", async(req, res) => {
    const newUser = new User(req.body.user);
    await newUser.save();
    res.redirect("/medconnect/register");
})

app.listen( 3000, () => {
    console.log("app is listining");
})