var express = require("express");
var router  = express.Router();
var State = require("../models/state");
var newCity = require("../models/post");
var middleware = require("../middleware");

// var data = require("../models/stateSeed"); // beware create all over again new with _id object

//INDEX - show all US
router.get("/", function(req, res){
    // find the US with provided JSON 
    State.find({}).populate('newcities').sort( { state: 1 } ).exec(function(err, allStates){
        if(err){
            console.log(err)
        }else{
            // console.log(allStates);
            // console.log("congs!");
            res.render("world/us/allStates", {states: allStates});
        }
    })
})

//SHOW - shows more info about one state
router.get("/:id", function(req, res){
    State.findById(req.params.id).populate("posts").exec(function(err, foundidState){
        if(err){
            console.log(err)
        } else {
            // console.log(foundidState)
            res.render("world/us/idState", {state: foundidState});
        }
    });
});

router.post("/:id", middleware.isLoggedIn,function(req, res){
    // get data from form and add to us array
    var imageValue = req.body.image;
    var priceValue = req.body.price;
    var desc = req.body.description;
    var city = req.body.city;
    var authorValue = {
        id:req.body._id,
        // username:req.body.username,
        name:req.body.name,
        name2: req.body.facebook.name
    }
    console.log("author: authorValue");
    console.log(authorValue);
    var newUS = {image: imageValue, price:priceValue, description:desc, city: city, author:authorValue}
    //  Create a new US and save to DB 
    newCity.create(newUS, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to US page
            // console.log(newlyCreated);
            console.log("add new city here");
            res.redirect("/us/");
        }
    });
});


module.exports = router;
