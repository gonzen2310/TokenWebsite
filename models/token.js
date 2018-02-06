var mongoose = require("mongoose");

// Database and SCHEMA setup 

// Define collection: Structure
var tokenSchema = new mongoose.Schema({
    type: String,
    model: String,
    description: String,
    image: String
});

// Define model
module.exports = mongoose.model("Token", tokenSchema);