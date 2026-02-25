const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
});


const Posts = mongoose.model('Post',postSchema)

module.exports = Posts;