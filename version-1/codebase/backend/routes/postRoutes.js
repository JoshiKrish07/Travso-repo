const express = require("express");
const router = express.Router();
const {  allPosts, postWithlikes , getActiveStories , getPostComments ,getUserPosts, postComment, postLike, likeAnyComment, replyOnComment, storePost, deleteComments, deleteReply, followAndUnfollow, likeToReply} = require('../controllers/postController');
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
router.post("/reply-on-comment",verifyToken, replyOnComment);
router.post("/commit-post",verifyToken, storePost);
router.post("/owner-delete-comment/:id",verifyToken, deleteComments);
router.post("/owner-delete-reply/:replyId",verifyToken, deleteReply);
router.post("/follow-unfollow",verifyToken, followAndUnfollow);
router.post("/like-unlike-reply/:reply_id",verifyToken, likeToReply);



module.exports = router;