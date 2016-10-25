var mongoose = require("mongoose");

var StatesSchema = new mongoose.Schema({
        state:          String,
        abbreviation:   String,
        capital:        String,
        image: {
            image_flag: String,
            image_state:String,
            location: String,
            credit: {
                author: String,
                url: String
            }
        }
});
module.exports = mongoose.model("State", StatesSchema);

// http://adamkinney.com/blog/2012/04/25/list-of-us-states-in-javascript-object-notation/

// https://gist.github.com/tvpmb/4734703

// http://jsfiddle.net/ck6en/

// https://github.com/tannerjt/state_images.json/tree/master/images

// http://flagpedia.net/the-united-states

// var data = [
//     {
//         name: "Cloud's Rest", 
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Desert Mesa", 
//         image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Canyon Floor", 
//         image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     }
// ]

// function seedDB2(){
//     data.forEach(function(seed){
//         USjson.create(seed, function(err, nameUS){
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log("added a state");
                
//             }
//         })
//     })
// }