var express = require("express");
var router  = express.Router();
var US = require("../models/us");
var middleware = require("../middleware");
var USjson = require("../models/state");

var data = require("../models/seeddb2");

//INDEX - show all US
router.get("/", function(req, res){
    // Get all US from DB
    US.find({}, function(err, showAllUs){
      if(err){
          console.log(err);
      } else {
          res.render("world/us/index",{allUs:showAllUs});
      }
    });
});

//CREATE - add new US to DB 
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to us array
    var stateValue = req.body.state;
    var imageValue = req.body.image;
    var priceValue = req.body.price;
    // var desc = req.body.description;
    var authorValue ={
        id:req.body._id,
        username:req.body.username
    }
    // var newUS = {image: image, description: desc, author:author} // after added description by views/world/us file
    var newUS = {state:stateValue, image: imageValue, price:priceValue, author:authorValue}
    //  Create a new US and save to DB 
    US.create(newUS, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to US page
            console.log(newlyCreated);
            res.redirect("/us");
        }
    });
    
});

//NEW - show form to create new world us
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("world/us/new"); 
});

router.get("/2", function(req, res){
    // find the US with provided JSON 
    USjson.find().populate('usjsons').sort( { state: 1 } ).exec(function(err, foundAState){
        if(err){
            console.log(err)
        }else{
            console.log(foundAState);
            console.log("congs!");
            res.render("world/us/show", {USjsons: foundAState});
        }
    })
        
})
module.exports = router;
