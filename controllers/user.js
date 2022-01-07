var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "MovieApp";
const express = require('express');
var Collection = "users";
const User = require("../Modals/userSchema");

const router = express.Router();



module.exports.Test = (req,res)=> {

  res.send('Success');
}

module.exports.Login = (req,res)=> {
      var id = req.params.id;
      var SearchObject = req.body;
      console.log(SearchObject);
     
      MongoClient.connect(url, function(err, db) {
         if (err) {
           throw err;
         }
          var dbo = db.db(Database);
          var myquery = SearchObject;
          dbo.collection(Collection).find({}).toArray(function(err, result) {
            if (err)  {
              throw err;
            }
             console.log(result);
             res.statusCode = 200;
             res.send(result);
             db.close();
         });
       });

}
  
