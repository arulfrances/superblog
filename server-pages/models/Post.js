const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: String,
    author: String
});


const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;