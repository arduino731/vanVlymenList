var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

require('../config/passport')(passport);
//root route

router.get("/", function(req, res){
    res.render("home");
});

router.get("/us", function(req, res){
    res.render("us");
});

router.get("/canada", function(req, res){
    res.render("canada");
});

router.get("/europe", function(req, res){
    res.render("europe");
});


// show register form
router.get("/register", function(req, res){
   res.render("register"); 
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/campgrounds"); 
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

	// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
	successRedirect : '/campgrounds',
	failureRedirect : '/login'
}));
// logout route
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/campgrounds");
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;