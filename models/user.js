const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

/**
* User Schema
*/

const userSchema = new mongoose.Schema({
    UserName : {
          type:String, 
          required:true,
          unique:true 
    },
    Mobile : {
        type:String,  
        required:true, 
        unique:true 
    },
    Email : {
        type:String, 
         required:true,
          unique:true 
    },
    Password : {
        type:[Number],  
        required:true,
        unique:true
    }
    
})

module.exports = mongoose.model("users",userSchema,"users");