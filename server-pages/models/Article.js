const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title: String,
    description: String
});


const ArticleModel = mongoose.model("posts", PostSchema);
module.exports = ArticleModel;