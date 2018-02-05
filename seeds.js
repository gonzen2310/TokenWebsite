var mongoose = require("mongoose");
var Token = require("./models/token");

var data = [
    {
  type: "graphicTee",
  model: "12-0294",
  description: "MEN’S SHORT SLEEVE T-SHIRT",
  image: "https://i.imgur.com/xYjGpEW.jpg"
},
{
  type: "graphicTee",
  model: "12-0295",
  description: "MEN’S NEW YORK T-SHIRT",
  image: "https://i.imgur.com/Ut7Rfbd.jpg"
},
{
  type: "graphicTee",
  model: "12-0295/A",
  description: "MEN’S MAKE EMOS NOISE T-SHIRT",
  image: "https://i.imgur.com/bycGXzT.jpg"
},
{
  type: "graphicTee",
  model: "12-0293",
  description: "MEN’S NEW YORK US DIVISION T-SHIRT",
  image: "https://i.imgur.com/omm3FU2.jpg"
},
{
  type: "graphicTee",
  model: "12-0290",
  description: "MEN’S EAGLE V-NECK T-SHIRT",
  image: "https://i.imgur.com/sBF2Opi.jpg"
},
{
  type: "graphicTee",
  model: "12-0295",
  description: "MEN’S NEW YORK EAGLE T-SHIRT",
  image: "https://i.imgur.com/RHQPf3L.jpg"
},
{
  type: "graphicTee",
  model: "12-0292",
  description: "MEN’S LONG NEW YORK STAR T-SHIRT",
  image: "https://i.imgur.com/nhwV2VL.jpg"
},
{
  type: "graphicTee",
  model: "12-0291",
  description: "MEN’S NOTHING WEAR T-SHIRT",
  image: "https://i.imgur.com/mxMcrSe.jpg"
},
{
    type: "graphicTee",
    model: "12-0295/A",
    description: "MEN’S ALL ISTANT V-NECK T-SHIRT",
    image: "https://i.imgur.com/bMsCxJu.jpg"
},
{
  type:"graphicTee",
  model:"12-0206",
  description:"MEN’S Long Sleeve EAGLE T-SHIRT",
  image:"https://i.imgur.com/5ZPoHSk.jpg"
},
{
  type:"graphicTee",
  model:"12-0316",
  description:"MEN’S NY CITY V-NECK T-SHIRT",
  image:"https://i.imgur.com/1MydYp8.jpg"
},
{
  type:"graphicTee",
  model:"12-0315",
  description:"MEN’S LOST N’ THE NIGHT T-SHIRT",
  image:"https://i.imgur.com/zz64wJ4.jpg"
},
{
  type:"graphicTee",
  model:"12-0314",
  description:"MEN’S POSITIVE VIBES ONLY T-SHIRT",
  image:"https://i.imgur.com/kjmIw9b.jpg"
},
{
  type:"graphicTee",
  model:"12-0301",
  description:"MEN’S V-NECK EAGLE T-SHIRT",
  image:"https://i.imgur.com/WAeQVLl.jpg"
},
{
  type:"graphicTee",
  model:"12-0207",
  description:"MEN’S NEW YORK EAGLE T-SHIRT",
  image:"https://i.imgur.com/E4pGbOt.jpg"
},
{
  type:"graphicTee",
  model:"12-0208",
  description:"MEN’S YORK CITY T-SHIRT",
  image:"https://i.imgur.com/gjUEWPb.jpg"
},
{
  type:"graphicTee",
  model:"12-0205",
  description:"MEN’S LONG SLEEVE EAGLE T-SHIRT",
  image:"https://i.imgur.com/W197khj.jpg"
},
{
  type:"graphicTee",
  model:"12-0202",
  description:"MEN’S EAGLE V-NECK T-SHIRT",
  image:"https://i.imgur.com/VnYcOXP.jpg"
},

// PULL OVERS
{
  type:"pullOver",
  model: "12-0324",
  description: "MEN’S Long Sleeve Star T-SHIRT",
  image: "https://i.imgur.com/32IeJkw.jpg"
},
{
  type:"pullOver",
  model: "12-0326",
  description: "MEN’S Long Sleeve NEW YORK T-SHIRT",
  image: "https://i.imgur.com/fLJ1cif.jpg"

},
{
  type:"pullOver",
  model: "12-0319",
  description: "MEN’S Long Sleeve Gran Prix T-SHIRT",
  image: "https://i.imgur.com/0AvYA79.jpg"
},
{
  type:"pullOver",
  model: "12-0328",
  description: "MEN’S LONG SLEEVE NEW YORK T-SHIRT",
  image: "https://i.imgur.com/EJA5yUW.jpg"
},
{
  type:"pullOver",
  model: "12-0317",
  description: "MEN’S V-NECK LION T-SHIRT",
  image: "https://i.imgur.com/QqxWzdF.jpg"
},
{
  type:"pullOver",
  model: "12-0325",
  description: "MEN’S LION V NECK TIE T-SHIRT",
  image: "https://i.imgur.com/Z0ZtDKf.jpg"
},
{
  type:"pullOver",
  model: "12-0327",
  description: "MEN’S LONG SLEEVE V-NECK EAGLE T-SHIRT",
  image: "https://i.imgur.com/Uu1j71i.jpg"
},
{
  type:"pullOver",
  model: "12-0323",
  description: "MEN’S LONG SLEEVE V-NECK T-SHIRT",
  image: "https://i.imgur.com/Y8Xoabh.jpg"
},
{
  type:"pullOver",
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