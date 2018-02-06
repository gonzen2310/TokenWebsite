var mongoose = require("mongoose");
var Token = require("./models/token");

var data = [
]

function seedDB(){
  data.forEach(function(seed){
                Token.create(seed, function(err, token){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a token");
                    }
                });
  });
  /*
   //Remove all campgrounds
   Token.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Tokens!");
        Token.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Token.create(seed, function(err, token){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a token");
                    }
                });
            });
        });
    }); 
    //add a few comments
    */
}

module.exports = seedDB;