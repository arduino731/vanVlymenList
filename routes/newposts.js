var express = require("express");
var router  = express.Router({mergeParams: true});
var State = require("../models/state");
var NewPost = require("../models/post");
var middleware = require("../middleware");

//Comments New
router.get("/", middleware.isLoggedIn, function(req, res){
  // find state by id
  // console.log(req.params.id);
  State.findById(req.params.id, function(err, state){
      if(err){
          console.log(err);
      } else {
           res.render("world/posts/newPost", {state: state});
      }
  })
});

//Posts Create
router.post("/", middleware.isLoggedIn, function(req, res){
  //lookup state using ID
  State.findById(req.params.id, function(err, state){
      if(err){
          console.log(err);
          res.redirect("/us");
      } else {
        NewPost.create(req.body.newPost, function(err, newpost){
          if(err){
              console.log(err);
          } else {
              //add username and id to newpost
              newpost.author.id = req.user._id;
              newpost.author.username = req.user.username;
              //save newpost
              newpost.save();
              state.posts.push(newpost);
              state.save();
              console.log("push here");
              console.log(newpost);
              console.log(newpost.author.username);
              
              res.redirect('/us/' + state._id);
          }
        });
      }
  });
});

router.get("/:newpost_id", function(req, res){
  NewPost.findById(req.params.newpost_id).populate("posts").exec(function(err, foundPost){
    if(err){
      res.redirect("back");
    }else{
      res.render("world/posts/show" , {post: foundPost});
      // console.log(foundPost);
    }
  });
});

// // COMMENT EDIT ROUTE
// router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
//   Comment.findById(req.params.comment_id, function(err, foundComment){
//       if(err){
//           res.redirect("back");
//       } else {
//         res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
//       }
//   });
// });

// // COMMENT UPDATE
// router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
//   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
//       if(err){
//           res.redirect("back");
//       } else {
//           res.redirect("/campgrounds/" + req.params.id );
//       }
//   });
// });

// // COMMENT DESTROY ROUTE
// router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
//     //findByIdAndRemove
//     Comment.findByIdAndRemove(req.params.comment_id, function(err){
//       if(err){
//           res.redirect("back");
//       } else {
//           res.redirect("/campgrounds/" + req.params.id);
//       }
//     });
// });

module.exports = router;