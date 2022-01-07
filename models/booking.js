const mongoose = require("mongoose");

/**
* Booking Schema
*/

const bookingSchema = new mongoose.Schema({
    MovieID:{
        type:String, 
        required:true, 
        unique:true 
    },
    UserName:{
        type:String,
        required:true, 
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Mobile:{
        type:String, 
        required:true,
        unique:true 
    },
    BookingDate:{
        type:Date, 
        required:true,
        unique:true 
    },
    SeatNumbers:{
        type:[String], 
        required:true,
        unique:true 
    }
    
    
})

const Model = new mongoose.model("Bookings",bookingSchema);
module.exports =  Model;