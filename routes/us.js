var express = require("express");
var router  = express.Router();
var middleware = require("../middleware");
var State = require("../models/state");

// var data = require("../models/stateSeed");

var newCity = require("../models/post");

//INDEX - show all US
router.get("/", function(req, res){
    // find the US with provided JSON 
    State.find({}).populate('newcities').sort( { state: 1 } ).exec(function(err, allStates){
        if(err){
            console.log(err)
        }else{
            // console.log(foundAState);
            // console.log("congs!");
            res.render("world/us/allStates", {states: allStates});
        }
    })
        
})

//CREATE show form to create new state
// router.post('/', function(req, res){
// })
//NEW show form to create new state
// router.get('/new', function(req, res){
// })

//SHOW - shows more info about one state
router.get("/:id", function(req, res){
    State.findById(req.params.id).populate("posts").exec(function(err, foundidState){
        if(err){
            console.log(err)
        } else {
            console.log(foundidState)
            res.render("world/us/idState", {state: foundidState});
        }
    });
});

router.post("/:id", function(req, res){
    // States.findById(req.params.id).populate("states").exec(function(err, foundIdState){
    // get data from form and add to us array
    // var imageValue = req.body.image;
    var priceValue = req.body.price;
    // var desc = req.body.description;
    var city = req.body.city;
    var authorValue ={
        id:req.body._id,
        username:req.body.username
    }
    var newUS = {city: city, price:priceValue, author:authorValue}
    //  Create a new US and save to DB 
    newCity.create(newUS, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to US page
            console.log(newlyCreated);
            console.log("add new city here");
            res.redirect("/us/");
        }
    });
});
// });

router.get("/:id/new", function(req, res){
        State.findById(req.params.id).populate("states").exec(function(err, foundIdState){
        if(err){
            console.log(err)
        } else {
            res.render("world/us/newState", {aState: foundIdState});
            // console.log(foundIdState)
        }
    });
});

router.get("/1", function(req, res){
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
router.post("/1", middleware.isLoggedIn, function(req, res){
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
            res.redirect("/us/1");
        }
    });
    
});

//NEW - show form to create new world us
router.get("/1/new", middleware.isLoggedIn, function(req, res){
   res.render("world/us/new"); 
});

//SHOW - shows more info about one state
router.get("/1/:id", function(req, res){
    //find the campground with provided ID
    US.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("world/us/1show", {campground: foundCampground});
        }
    });
});

module.exports = router;
