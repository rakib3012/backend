const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
});


const Posts = mongoose.model('Post',postSchema)

module.exports = Posts;