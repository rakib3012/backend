const Posts = require("../models/postsModel");
const Users = require('../models/usersModel')

const getAllPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    posts.users = await Users.findById(posts.userId)
    res.json({
      status: true,
      message: "successfully fetch all post",
      data: posts,
      total_post: Posts.length,
    });
  } catch (err) {
    console.log("error>>>", err);
    res.json({
      status: false,
      message: "post not found",
      error: err.message,
    });
  }
};

const createPost = async (req, res) => {
   
    let post = new Posts({
        body:req.body.text,
        id:req.params.id
    });
    post.save()
    .then(data=>{
        console.log("post data>>>",data)

        res.json({
            status:true,
            message:"post successfully created",
            data:post
        })
    })
    .catch((err)=>{
        console.log("err");
        res.json({
            status:false,
            message:"post not found",
            error: err.message
        })
    })

    
  }
 



module.exports ={
    getAllPost,
    createPost
}