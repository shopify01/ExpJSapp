var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "MovieApp";
var Collection = "Bookings";



const User = require('../models/booking');
module.exports.GetAllBookings = (req,res)=>{
    try {
      MongoClient.connect(url, function(err, db) {
          if (err) {
            throw err;
          }
          var dbo = db.db(Database);
          dbo.collection(Collection).find({}).toArray(function(err, result) {
          if (err) {
            throw err;
          }
          res.statusCode = 200;
          res.send(result);
          db.close();
          });
       });
    } 
    catch (err) {
       res.statusCode = 500;
       res.send(err.message); 
       console.error(err.message);

    }
 };




module.exports.GetBookingByID = (req,res)=>{
    var id = req.params.id;
    console.log(id);
  
   MongoClient.connect(url, function(err, db) {
      if (err) {
       throw err;
      }
      var dbo = db.db(Database);
      dbo.collection(Collection).find({"_id":ObjectId(id)}).limit(100).toArray(function(err, result) {
        if (err) { 
          throw err; 
        }
        res.send(result);
        console.log(Number.isInteger(req.params.Limit));
        db.close();
      });
    });
}



module.exports.CreateBooking=(req,res)=>{
    var record = req.body;
    console.log(record);
    //res.send(record);return;
    MongoClient.connect(url, function(err, db) {
      if (err) {
        throw err;
      }
       var dbo = db.db(Database);
       var myobj = record;
       dbo.collection(Collection).insertOne(myobj, function(err, result) {
         if (err) {
           throw err;
         }  
         res.send(result);
         db.close();
      });   
    }
  ); 
};
