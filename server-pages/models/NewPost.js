const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title: String,
    description: String
});


const PostModel = mongoose.model("postarticle", LoginSchema);
module.exports = PostModel;