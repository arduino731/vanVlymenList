var mongoose = require("mongoose");

var tagSchema = new mongoose.Schema({
    tag: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Tag", tagSchema);
