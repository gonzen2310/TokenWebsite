// Require libraries
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Token = require("./models/token");
var seedDB = require("./seeds")

seedDB();

app.use(bodyParser.urlencoded({extended: true}));
// Connect mongoose to server
//mongoose.connect("mongodb://localhost/token_collection");
mongoose.connect("mongodb://gonzen2310:gonzalo2310@ds123718.mlab.com:23718/tokendb");


// Add .ejs extension at the end of view
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES

// Home Page
app.get("/", function(req, res){
    res.render("home");
});

///////////////////////////////////////
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

// Gallery Page
app.get("/gallery2", function(req, res){
   // Get tokens from DB
   Token.find({}, function(err, allCollections){
       if (err) {
           console.log(err);
       }
       else {
           res.render("gallery2", {collection: allCollections}); 
       }
   });
});

// Gallery Page
app.get("/gallery3", function(req, res){
   // Get tokens from DB
   Token.find({}, function(err, allCollections){
       if (err) {
           console.log(err);
       }
       else {
           res.render("gallery3", {collection: allCollections}); 
       }
   });
});

// Gallery Page
app.get("/gallery4", function(req, res){
   // Get tokens from DB
   Token.find({}, function(err, allCollections){
       if (err) {
           console.log(err);
       }
       else {
           res.render("gallery4", {collection: allCollections}); 
       }
   });
});

// Gallery Page
app.get("/gallery5", function(req, res){
   // Get tokens from DB
   Token.find({}, function(err, allCollections){
       if (err) {
           console.log(err);
       }
       else {
           res.render("gallery5", {collection: allCollections}); 
       }
   });
});

///////////////////////////////


// Individual element
app.get("/gallery/:id", function(req, res) {
    // Find token with provides ID
    Token.findById(req.params.id, function(err, foundToken){
        if (err) {
            console.log(err);
        }
        else {
            // Find token
            res.render("show", {foundToken: foundToken});
        }
    });
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
    
    