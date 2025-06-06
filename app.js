var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    
    seedDB      = require("./seeds"),
    dotenv      = require('dotenv').config()
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index"),
    usRoutes         = require("./routes/us"),
    newpostsRoutes   = require('./routes/newposts')
    // newcommentsRoutes = require('.routes/newcomment')
// configuration ===============================================================

// mongoose.connect(process.env.LOCALHOST);    // connect to our local database
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });          // connect to mlab server db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log("MongoDB connection error:", err));

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
// app.use("/us/:id/newposts/:newpost", newcommentRoutes);


app.listen(process.env.PORT || 3000, function(){
   console.log("The vanVlymenList Server Has Started!");
   console.log('listening on', process.env.PORT);
});