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
   },
   {
       model: "12-0328", 
       description: "MEN’S LONG SLEEVE NEW YORK T-SHIRT", 
       image: "https://i.imgur.com/EJA5yUW.jpg"
   },
   {
       model: "12-0317", 
       description: "MEN’S V-NECK LION T-SHIRT", 
       image: "https://i.imgur.com/QqxWzdF.jpg"
   },
   {
       model: "12-0325", 
       description: "MEN’S LION V NECK TIE T-SHIRT", 
       image: "https://i.imgur.com/Z0ZtDKf.jpg"
   },
   {
       model: "12-0327", 
       description: "MEN’S LONG SLEEVE V-NECK EAGLE T-SHIRT", 
       image: "https://i.imgur.com/Uu1j71i.jpg"
   },
   {
       model: "12-0323", 
       description: "MEN’S LONG SLEEVE V-NECK T-SHIRT", 
       image: "https://i.imgur.com/Y8Xoabh.jpg"
   },
   {
       model: "12-0322", 
       description: "MEN’S LONG SLEEVE STRIPE T-SHIRT", 
       image: "https://i.imgur.com/acO49bm.jpg"
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