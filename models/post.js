var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    city: String,
    image: String,
    date: { type: Date, default: Date.now},
    price: Number,
    desc: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        Localpicture: String,
        // Facebook
        link: String,
        picture: String,
        name: String,
        email: String
        // Twitter ???
    }
});

module.exports = mongoose.model("Post", PostSchema);