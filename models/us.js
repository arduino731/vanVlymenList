var mongoose = require("mongoose");

var usSchema = new mongoose.Schema({
    state: String,
    image: String,
    date: { type: Date, default: Date.now},
    price: Number,
    // desc: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Us", usSchema);