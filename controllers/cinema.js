var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "MovieApp";
const express = require('express');
var Collection = "Cinemas";


const User = require('../models/cinema');

module.exports.GetAllCinemas = (req,res)=> {
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

 module.exports.GetCinemaListInCity = (req,res)=> {
   var City = req.params.City;
  try {
    MongoClient.connect(url, function(err, db) {
        if (err) {
          throw err;
        }
        var dbo = db.db(Database);
        dbo.collection(Collection).find({"City":City}).toArray(function(err, result) {
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
     res.send(err.message); console.error(err.message)

  }
};


module.exports.GetBookedSeats = (req,res)=> {
   console.log('GetBookedSeats Called');
   var CinemaID = req.params.CinemaID;
   var BookedSeats = [];
   var Bookings = null;
   try {
    MongoClient.connect(url, function(err, db) {
        if (err) {
          throw err;
        }  
        var dbo = db.db(Database);
        dbo.collection("Bookings").find({"Cinema":CinemaID}).toArray(function(err, result) {
          if (err) {
            throw err;
          }
          Bookings = result;
          for(var n = 0;n<Bookings.length;n++)
             {
              Bookings[n].Seats.forEach(function(item, index){BookedSeats.push(item);});
             }
          
           res.statusCode = 200;
           res.send(BookedSeats);
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


module.exports.GetAvailableSeats = (req,res)=> {
  console.log('GetAvailableSeats Called');
  var CinemaID = req.params.CinemaID;
  var BookedSeats = [];
  var Bookings = null;
   try {
    MongoClient.connect(url, function(err, db) {
        if (err) {
          throw err;
        }
        var dbo = db.db(Database);
        dbo.collection("Bookings").find({"Cinema":CinemaID}).toArray(function(err, result) {
          if (err) {
            throw err;
          }
          Bookings = result;
          for(var n = 0;n<Bookings.length;n++)
              {
              Bookings[n].Seats.forEach(function(item, index){BookedSeats.push(item);});
              }
              dbo.collection("Cinemas").findOne({"_id":ObjectId(CinemaID)},function(err, result) {
                if (err) {
                  throw err;
                }
                var CinemaSeats=result.Seats;
                result.Seats.forEach(element => {
                  CinemaSeats.splice(CinemaSeats.indexOf(element),1);
                });
                res.statusCode = 200;
                res.send(CinemaSeats);
                db.close();
              });
          
        });
    });
 } 
    catch (err) {
    res.statusCode = 500;
    res.send(err.message);
    console.error(err.message);

    }
 };



module.exports.GetCinemaByID = (req,res)=> {
    var id = req.params.id;
   
    var query = new RegExp(id, "g");
    MongoClient.connect(url, function(err, db) {
      if (err) {
        throw err;
      }
       var dbo = db.db(Database);
       dbo.collection(Collection).find({"name": query},{ projection: {name:1 } }).limit(100).toArray(function(err, result) {
        if (err) {
          throw err;
        }
        res.send(result);
        console.log(Number.isInteger(req.params.Limit));
        db.close();
      });
    });
}
