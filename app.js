// Require libraries
var express = require("express");
var app = express();
var mongoose = require("mongoose");

// Connect mongoose to server
mongoose.connect("mongodb://localhost/token_collection");

// Add .ejs extension at the end of view
app.set("view engine", "ejs");

// Database and SCHEMA setup 

// Define collection: Structure
var tokenSchema = new mongoose.Schema({
    model: String,
    description: String,
    image: String
});

// Define model
var Token = mongoose.model("Token", tokenSchema);

/*
Token.create(
    {
    model: "12-0322",
    description: "MEN’S LONG SLEEVE STRIPE T-SHIRT",
    image: "https://i.imgur.com/acO49bm.jpg"
    }, function(err, token){
        if (err) {
            console.log(err);
        }
        else {
            console.log("New Token");
            console.log(token);
        }
    });
    */
 // t-shirt images
    var collection = [
        //{model: "12-0324", image: "https://i.imgur.com/32IeJkw.jpg"},
        //{model: "12-0326", image: "https://i.imgur.com/fLJ1cif.jpg"},
        //{model: "12-0319", image: "https://i.imgur.com/0AvYA79.jpg"},
        //{model: "12-0328", image: "https://i.imgur.com/EJA5yUW.jpg"},
        //{model: "12-0317", image: "https://i.imgur.com/QqxWzdF.jpg"},
        //{model: "12-0325", image: "https://i.imgur.com/Z0ZtDKf.jpg"},
        //{model: "12-0327", image: "https://i.imgur.com/Uu1j71i.jpg"},
        //{model: "12-0323", image: "https://i.imgur.com/Y8Xoabh.jpg"},
        //{model: "12-0322", image: "https://i.imgur.com/acO49bm.jpg"},
    ];
    
// ROUTES

// Home Page
app.get("/", function(req, res){
    res.render("home");
});


// Gallery Page
app.get("/gallery", function(req, res){
   // Get tokens from DB
   Token.find({}, function(err, allCollections){
       if (err) {
           console.log(err);
       }
       else {
           res.render("gallery", {collection: allCollections}); 
       }
   });
});

// Individual element
app.get("/gallery/:id", function(req, res) {
    // Find token
    res.render("show");
});

// Company Page
app.get("/company", function(req, res) {
    res.render("company");
});

// Contact Us Page
app.get("/contact", function(req, res){
    res.render("contact");
});

// Start Server
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("SERVER CONNECTED"); 
});
    
    