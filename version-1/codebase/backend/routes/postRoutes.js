const express = require("express");
const router = express.Router();
const {  allPosts, postWithlikes , getActiveStories , getPostComments ,getUserPosts, postComment, postLike, likeAnyComment} = require('../controllers/postController');
const verifyToken = require("../utils/verifyToken");


// // router.get('/allposts', allPosts);
// router.get('/allposts', postWithlikes);
// router.get('/stories', getActiveStories);
// router.get('/comments/:postId', getPostComments);
// // router.get('/userpost/:postId', getUserPosts);
// router.get('/userpost',verifyToken, getUserPosts);


// router.get('/allposts', allPosts);
router.get('/allposts', postWithlikes);
router.get('/stories', getActiveStories);
router.get('/comments/:postId', getPostComments);
// router.get('/userpost/:postId', getUserPosts);
router.get('/userpost',verifyToken, getUserPosts);
router.post("/comment-on-post", verifyToken, postComment);
router.post("/like-unlike-post", verifyToken, postLike);
router.post("/like-a-comment/:comment_id",verifyToken, likeAnyComment);



module.exports = router;