const mongoose = require("mongoose");

/**
* Cinema Schema
*/

const cinemaSchema = new mongoose.Schema({
    CinemaName : {
        type:String,  
        required:true,
        unique:true 
    },
    City : {
        type:String, 
        required:true, 
        unique:true 
    },
    Capacity : {
        type:String, 
        required:true, 
        unique:true 
    },
    BookedSeats : {
        type:[Number], 
        required:true,
        unique:true
    }
    
})

const Model = new mongoose.model("Cinemas",cinemaSchema);
module.exports = Model;