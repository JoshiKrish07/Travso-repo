/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Boy1 from "../../../assets/headerIcon/boy1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faImage,
  faSmile,
  faUser,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import Travel from "../../../assets/travel.png";
import bucket from "../../../assets/headerIcon/bucket.png";
import Dialog from "../../../assets/headerIcon/Dialog.png";
import like from "../../../assets/like.png";
import Saved from "../../../assets/headerIcon/archive-minus.png";
import send from "../../../assets/headerIcon/send.png";
import Girl from "../../../assets/headerIcon/girl.jpg";
import ok from "../../../assets/headerIcon/ok.png";
import "../Header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  commentOnPost,
  getAllPosts,
  getCommentOnPost,
  LikeUnlikePost,
} from "../../../redux/slices/postSlice";
import dummyUserImage from "../../../assets/user_image-removebg-preview.png"
import { getUserDetails, getUserPosts } from "../../../redux/slices/authSlice";


const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😋",
  "😜",
  "🤔",
  "🤩",
  "😏",
  "🙃",
  "🤯",
  "😱",
  "😴",
  "😷",
  "🤗",
  "🤠",
  "🤡",
  "👻",
  "💀",
  "👽",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "🙀",
  "😿",
  "😾",
  "🐶",
  "🐱",
];

const CommentPopup = ({ isOpen, onClose, postId }) => {
  // State for handling "See more"
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [commentInputVal, setCommentInputVal] = useState("");

  const dispatch = useDispatch();

  // Function to toggle the full text
  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const { postComment } = useSelector((state) => state.postSlice);
  const { userPosts : allPosts, user: userDetails } = useSelector((state) => state.auth);
  console.log("=====allPosts====>", allPosts);

  /* emoji functionality starts */
  
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setCommentInputVal((prevComment) => prevComment + emoji);
    setShowEmojiPicker(false); // Close the emoji picker after selection
  };
 console.log("===showEmojiPicker==>", showEmojiPicker);
  /* emoji functionality ends */

  useEffect(() => {
    if (!allPosts) {
      // dispatch(getAllPosts());
      dispatch(getUserPosts());
    }

    if(!postComment) {
      dispatch(getCommentOnPost(postId))
    }

    if(!userDetails) {
      dispatch(getUserDetails());
    }
  }, [dispatch]);

  // to handle like and unlike
  const handleLikeUnlike = async (postId) => {
    try {
      const likeUnlikeResult = await dispatch(
        LikeUnlikePost({ post_id: postId })
      ).unwrap();
      if (likeUnlikeResult) {
        // await dispatch(getAllPosts());
        await dispatch(getUserPosts());
        // handleFlashMessage(likeUnlikeResult.message, 'success');
      }
    } catch (error) {
      console.log("error in likeunlike api", error);
      const errorMessage = error.error || "Unexpected Error Occured";
      // handleFlashMessage(errorMessage, 'error')
    }
  };

  // Sample data for the popup
  const postDetails = {
    title: "Pankaj Reet Tech",
    subtitle: "Rameshwaram",
    description:
      "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: Travel,
    avtar: Boy1,
    hastag: "#arsitek #art #creative",
    like: "72k",
    comment: "50k",
    saved: "2.3k",
    share: "1k",
  };

  const handleInputEnter = async (e, postId) => {
    // console.log("=====commentInputVal====>", commentInputVal);
    if (e.key === "Enter" && !e.shiftKey) {
      try {
        const commentResult = await dispatch(
          commentOnPost({ post_id: postId, content: commentInputVal })
        ).unwrap();
        if (commentResult) {
          // await dispatch(getAllPosts());
          // handleFlashMessage(commentResult.message, 'success');
          await dispatch(getCommentOnPost(postId));
          await dispatch(getUserPosts());
        }
      } catch (error) {
        console.log("error in comment api", error);
        const errorMessage = error.error || "Unexpected Error Occured";
        // handleFlashMessage(errorMessage, 'error')
      }
      setCommentInputVal("");
    }
  };

  // show post date and time
  function formatISODate(isoDate) {
    const date = new Date(isoDate);
  
    // Format options
    const options = {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    // Format the date and adjust the output
    const formattedDate = date.toLocaleString('en-GB', options);
    return formattedDate.replace(',', ' at').replace(/\s([AP]M)$/, '$1'); // Remove space before AM/PM
  }
  
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[85%] md:w-[85%] h-[92%] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {allPosts[postId]?.full_name} Post Details
          </h2>
          <button
            className="text-black hover:text-[#2DC6BE] font-bold text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Section */}
          <div className="w-3/5 p-4 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between space-x-4 mb-1 pb-2 border-b-2 border-gray-300 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-4">
                <img
                  src={allPosts[postId]?.profile_image || dummyUserImage}
                  alt="Avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-left text-gray-800 font-semibold">
                    {allPosts[postId]?.full_name}
                  </h3>
                  <p className="text-left text-gray-600 text-sm">
                    {/* {postDetails.subtitle} */}
                  </p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="text-gray-400 gap-4 cursor-pointer"
                />
              </div>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-hidden">
              {/* Post Description */}
              <p className="text-left text-justify text-[#222224] mb-2">
                {isFullTextVisible
                  ? allPosts[postId]?.description
                  : `${allPosts[postId]?.description.slice(0, 170)}...`}
                <span
                  onClick={toggleFullText}
                  className="text-[#2DC6BE] cursor-pointer"
                >
                  {isFullTextVisible ? " Show less" : " See more"}
                </span>
              </p>

              {/* Hashtags */}
              <p className="text-left text-[#1DB2AA] mb-2">
                {postDetails.hastag}
              </p>

              {/* Post Image */}
              <div>
                <img
                  src={allPosts[postId]?.media_url}
                  alt="Travel"
                  className="rounded-lg w-full h-[380px] object-cover"
                />
              </div>
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="flex items-center justify-between mt-3">
              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[150px] h-[40px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full hover:bg-[#2DC6BE] hover:text-white"
                onClick={() => handleLikeUnlike(allPosts[postId].id)}
              >
                <img src={like} alt="like" className="mr-2 w-5 h-5" />
                <span className="text-md font-normal">
                  {allPosts[postId]?.total_likes} Liked
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[180px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img src={Dialog} alt="dialog" className="mr-1 w-6 h-6" />
                <span className="text-md font-normal">
                  {allPosts[postId]?.total_comments} Comments
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[180px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img src={Saved} alt="saved" className="mr-1 w-5 h-5" />
                <span className="text-md font-normal">
                  {allPosts[postId]?.total_buckets} Saved
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[150px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img src={send} alt="send" className="mr-2 w-5 h-5" />
                <span className="text-md font-normal">
                  {allPosts[postId]?.total_shared} Share
                </span>
              </button>
            </div>
            {/* Bottom Fixed Section */}
          </div>

          {/* Right Section - Post Activity */}
          <div className="w-2/5 p-4 h-full border-l border-gray-100 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-2xl text-left text-[#415365] font-semibold">
                Post Activity
              </h3>
              {/* <p className="text-gray-600">12 October at 09:00AM</p> */}
              <p className="text-gray-600">{formatISODate(allPosts[postId]?.post_created_at)}</p>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-thin space-y-4">
              <div className="mt-6">
            {
              postComment && postComment.map((userPost, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-start space-x-3 rounded-md">
                  {/* Profile Image */}
                  <img src={userPost?.profile_image || dummyUserImage} alt="User" className="w-8 h-8 rounded-full" />

                  {/* Content Section */}
                  <div className="flex flex-col space-y-2">
                    {/* Comment Content */}
                    <div className="bg-[#EEF0F29C] p-2 rounded-lg w-[120px]">
                      <p className="font-semibold text-[#415365] text-[15px] text-left">
                        {userPost?.user_name || userPost?.full_name}
                      </p>
                      <p className="text-[#415365] text-[14px] text-left">
                        {userPost?.content}
                      </p>
                    </div>

                    {/* Interaction Section */}
                    <div className="flex items-center justify-between text-black text-sm mt-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <img
                            src={ok}
                            alt="Green Icon"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="">
                          62 <sup>Comments</sup>
                        </div>
                      </div>
                      <div className="">
                        62 <sup>10 h</sup>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                )
              })
            }
            
              </div>
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="mt-3">
              <div className="flex items-center gap-1">
                {/* Profile Image */}
                <img
                  src={userDetails?.profile_image || dummyUserImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md w-[100%]">
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="What’s on your mind?"
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-3 text-sm"
                    value={commentInputVal}
                    onKeyDown={(e) => handleInputEnter(e, allPosts[postId]?.id)}
                    onChange={(e) => setCommentInputVal(e.target.value)}
                  />

                  {showEmojiPicker && (
                    <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg p-3 grid grid-cols-8 gap-2 z-50 max-h-48 overflow-y-auto">
                      {emojis.map((emoji, index) => (
                        <button
                          key={index}
                          className="text-2xl hover:bg-gray-200 p-2 rounded"
                          onClick={() => handleEmojiClick(emoji)}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Icons */}
                  <div className="flex items-center justify-center space-x-3 text-gray-400">
                    <button className="hover:text-gray-600" >
                      <FontAwesomeIcon icon={faImage} className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-600" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                      <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Fixed Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
