var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,


module.exports = mongoose.model("Us", campgroundSchema);