const Users = require("../models/usersModel");

//get operation here.....
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json({
      status: 200,
      message: "success",
      total_users: users.length,
      users: users,
    });
  } catch (err) {
    console.log("errrrrr", err);
    res.json({
      status: false,
      message: "Users not found",
      error: err.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.json({
      status: 200,
      message: "success",
      user: user,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "faild",
      error: err,
    });
  }
};
//post operation here.....
const createUser = (req, res) => {
  let user = new Users({
    name: req.body.name,
    email: req.body.email,
  });
  user
    .save()
    .then((data) => {
      console.log("data....", data);
      res.json({
        status: 201,
        message: "user created",
        users: user,
      });
    })
    .catch((err) => {
      console.log("user error....", err);
      res.json({
        status: false,
        message: err,
      });
    });
};
//patch operation here.....
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await Users.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
    });
    const changedUser = await Users.findById(id);
    res.json({
      message: "successfully update",
      user: updateUser,
      updateUser: changedUser,
    });
  } catch (err) {
    console.log("user update error", err);
    res.json({
      status: false,
      message: "update faild",
      error: err,
    });
  }
};

// delete operation here .....
const deleteUser = async (req, res) => {
  const { id } = req.params;

   try{
    const delUser = await Users.findByIdAndDelete(id);
  res.json({
    status:true,
    message: "user successfully deleted",
    deletedUser:delUser
  })
   }
   catch(err){
    res.json({
      status:false,
      message:"user not found",
      error:err.message
    })
   }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
};
