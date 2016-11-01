var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    // Tag         = require("./models/tag"), // not need this
    // Us          = require("./models/us"), // not need this
    // USjson      = require("./models/USjson"),
    // USjson      = require("./models/seeddb2"),
    User        = require("./models/user"),
    seedDB      = require("./seeds")
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index"),
    usRoutes         = require("./routes/us"),
    newpostsRoutes   = require('./routes/newposts')
    
var configDB = require('./config/database.js');
// console.log(process.env.DATABASEURL); // looking at the note.txt
// configuration ===============================================================
mongoose.connect(configDB.localhost); // connect to our database
// mongoose.connect(configDB.url);
// mongoose.connect(process.env.DATABASEURL);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "vanVlymensList",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.use("/us", usRoutes);
app.use("/us/:id/newposts", newpostsRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The vanVlymensList Server Has Started!");
});