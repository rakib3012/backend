const Posts = require("../models/postsModel");
const Users = require('../models/usersModel')

const getAllPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json({
      status: true,
      message: "successfully fetch all post",
      data: posts,
      total_post: posts.length,
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


const getSinglePost = async (req, res) => {

  const {id}= req.params;
  console.log("idddd",id)
  try {
    
   const post = await Posts.findById(id).populate('userId')
    res.json({
      status: true,
      message: "successfully fetch all post",
      data: post,
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
        userId:req.body.userId
    });
    console.log("post....",post)
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
    getSinglePost,
    createPost,
    
}