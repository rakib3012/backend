
const express = require("express");
const postController = require('../controllers/postsController');

const router = express.Router();


router.get('/',postController.getAllPost);
router.post('/',postController.createPost);



module.exports= router;
