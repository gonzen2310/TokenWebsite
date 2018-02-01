var mongoose = require("mongoose");
var Token = require("./models/token");

var data = [
    {
        model: "12-0324",
        description: "MEN’S Long Sleeve Star T-SHIRT", 
        image: "https://i.imgur.com/32IeJkw.jpg"
    },
    {
        model: "12-0326", 
        description: "MEN’S Long Sleeve NEW YORK T-SHIRT", 
        image: "https://i.imgur.com/fLJ1cif.jpg"
        
    },
   {
       model: "12-0319", 
       description: "MEN’S Long Sleeve Gran Prix T-SHIRT", 
       image: "https://i.imgur.com/0AvYA79.jpg"
   }
]

function seedDB(){
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
}

module.exports = seedDB;