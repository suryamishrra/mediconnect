const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fullname: {
        type: String,
        reqired: true,
    },
    username: {
        type: String,
        reqired: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    number: {
        type: Number,
        reqired: true,
    },
    password: {
        type: String,
        reqired: true,
    },
    gender:{
        type: String,
       
    }


    
});

const User = mongoose.model("User", userSchema );
    module.exports = User;