/* eslint-disable no-useless-escape */
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faUser,
  faPaperclip,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Girl from "../../assets/headerIcon/girl.jpg";
import Boy from "../../assets/headerIcon/boy2.jpg";
import Boywithgirl from "../../assets/headerIcon/boywithgirl.png";
import yellowgirl from "../../assets/headerIcon/yellowGirl.png";
import bucket from "../../assets/headerIcon/bucket.png";
import Dialog from "../../assets/headerIcon/Dialog.png";
import fire from "../../assets/headerIcon/fire.png";
import send from "../../assets/headerIcon/send.png";
import ok from "../../assets/headerIcon/ok.png";
import p1 from "../../assets/headerIcon/p1.png";
import p2 from "../../assets/headerIcon/p2.png";
import p3 from "../../assets/headerIcon/p3.png";
import { useDispatch, useSelector } from "react-redux";
import {
  commentOnPost,
  getAllPosts,
  LikeUnlikePost,
} from "../../redux/slices/postSlice";
import SuccessError from "./SuccessError";
import CommentPopup from "./AllPopupComponent/CommentPopup";
import dummyUserImage from "../../assets/user_image-removebg-preview.png";
import SharePopup from "./AllPopupComponent/SharePopup";
import Saved from "../../assets/headerIcon/archive-minus.png";
import { getUserPosts } from "../../redux/slices/authSlice";

const posts = [
  {
    user: {
      name: "John Doe",
      avatar: Boy,
      time: "12 October at 09:00AM",
    },
    text: "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: Boywithgirl,
  },
  {
    user: {
      name: "Jane Smith",
      avatar: Boy,
      time: "12 October at 09:00AM",
    },
    text: "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: yellowgirl,
  },
];

const PostCard = () => {
  const dispatch = useDispatch();
  const [isSharePopup, setIsSharePopup] = useState(false);
  const [commentInputVal, setCommentInputVal] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [flashMsgType, setFlashMsgType] = useState("");
  const [isCommentPopup, setIsCommentPopup] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
  const triggerRef = useRef(null);

  // const { allPosts } = useSelector((state) => state.postSlice);
  const { user: userDetails, userPosts: allPosts } = useSelector(
    (state) => state.auth
  );
  // console.log("=====userPosts====>", allPosts);
  useEffect(() => {
    if (!allPosts) {
      // dispatch(getAllPosts());
      dispatch(getUserPosts());
    }
  }, [dispatch]);

  /* emoji functionality starts */
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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setCommentInputVal((prevComment) => prevComment + emoji);
    setShowEmojiPicker(false); // Close the emoji picker after selection
  };

  /* emoji functionality starts */

  // handle flash messages show
  const handleFlashMessage = (errorMessage, msgType) => {
    setFlashMessage(errorMessage);
    setFlashMsgType(msgType);
    setTimeout(() => {
      setFlashMessage("");
      setFlashMsgType("");
    }, 3000); // Hide the message after 3 seconds
  };

  const handleInputEnter = async (e, postId) => {
    // console.log("=====commentInputVal====>", commentInputVal);
    if (e.key === "Enter" && !e.shiftKey) {
      try {
        const commentResult = await dispatch(
          commentOnPost({ post_id: postId, content: commentInputVal })
        ).unwrap();
        if (commentResult) {
          console.log("=====commentResult===>", commentResult.message);
          // await dispatch(getAllPosts());
          await dispatch(getUserPosts());
          // handleFlashMessage(commentResult.message, 'success');
        }
      } catch (error) {
        console.log("error in comment api", error);
        const errorMessage = error.error || "Unexpected Error Occured";
        handleFlashMessage(errorMessage, "error");
      }
      setCommentInputVal("");
    }
  };

  // const handleSubmit = (event) => {
  //   if (event.key === 'Enter' && commentInputVal.trim()) {
  //     event.preventDefault(); // Prevent new line in input
  //     setCommentInputVal([...comments, inputValue]);
  //     setInputValue(''); // Clear input after submitting
  //   }
  // };

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

  // show post date and time
  function formatISODate(isoDate) {
    const date = new Date(isoDate);

    // Format options
    const options = {
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    // Format the date and adjust the output
    const formattedDate = date.toLocaleString("en-GB", options);
    return formattedDate.replace(",", " at").replace(/\s([AP]M)$/, "$1"); // Remove space before AM/PM
  }


  // for comment time difference
  function getHoursFromNow(timestamp) {
    const givenDate = new Date(timestamp);
    const currentDate = new Date();
  
    // Calculate the absolute difference in milliseconds
    const timeDifference = Math.abs(givenDate - currentDate);
  
    // Convert the difference to hours
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  
    if (hoursDifference >= 24) {
      const days = Math.floor(hoursDifference / 24);
      return `${days}d`;
    }
  
    return `${hoursDifference}h`;
  }

  // to extract the media URLs for a specific post
  const getFirstImage = (mediaUrl) => {
    // Clean the string and split it into an array
    const mediaArray = mediaUrl.replace(/^\[\"|\"?\]$/g, '').split('","');
    return mediaArray[0]; // Return the first image URL
  };

  // console.log("===allposts====>", allPosts);

  // handle onchange of image upload on post section
  const handlePostImageUpload = (e) => {
    console.log("=====handlePostImageUpload=====>", e.target.files[0]);
  }


  // handle onchange of image upload on comment section
  const handleCommentImage = (e) => {
    console.log("====handleCommentImage===>", e.target.files[0]);
  }

  return (
    <>
      {flashMessage && (
        <SuccessError message={flashMessage} messageType={flashMsgType} />
      )}

      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center gap-1">
          {/* Profile Image */}
          <img
            src={userDetails?.profile_image || dummyUserImage}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />

          {/* Input Field */}
          <input
            type="text"
            placeholder={`Write your story today ...`}
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-3 text-sm"
          />

          {/* Icons */}
          <div className="flex items-center space-x-3 text-gray-400">
            <button className="hover:text-gray-600" onClick={() => document.getElementById("postGallery").click()}>
              <FontAwesomeIcon icon={faImage} className="w-5 h-5" />
              <input type="file" id="postGallery" onChange={(e) => handlePostImageUpload(e)} hidden/>
            </button>

            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600" onClick={() => document.getElementById("postGallery").click()}>
              <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {allPosts &&
        allPosts?.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={allPosts[index]?.profile_image || dummyUserImage}
                // alt={allPosts[index].profile_image}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-1 items-center justify-between">
                {/* Left Content */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-left">
                      {allPosts[index]?.full_name}
                    </h3>

                    {/* Images beside h3 */}
                    <div className="flex space-x-1">
                      <img
                        src={p1}
                        alt="Image 1"
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <img
                        src={p2}
                        alt="Image 2"
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <img
                        src={p3}
                        alt="Image 3"
                        className="w-4 h-4 rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <p className="text-sm text-gray-500 text-left">
                    {formatISODate(allPosts[index].post_created_at)}
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="text-gray-500 cursor-pointer"
                />
              </div>
            </div>
            <p className="mb-4 text-left">{allPosts[index].description}</p>
            <p className="mb-3 text-left text-[#1DB2AA]">
              #arsitek #art #creative
            </p>
            {/* {post.image && ( */}
            <img
              src={getFirstImage(allPosts[index].media_url)}
              alt="Post"
              className="w-full h-[548px] rounded-lg object-cover"
            />
            {/* )} */}
            <div className="flex items-center justify-between mt-4">
              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[197px] h-[40px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full hover:bg-[#2DC6BE] hover:text-white"
                onClick={() => handleLikeUnlike(allPosts[index].id)}
              >
                <img src={fire} alt="Edit Icon" className="mr-2 w-6 h-6" />
                {/* <span className="text-md font-normal">72K Liked</span> */}
                <span className="text-md font-normal">
                  {allPosts[index].total_likes} Liked
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
                // onClick={() => setIsCommentPopup(true)}
                onClick={() => setActivePostId(allPosts[index].id)}
              >
                <img src={Dialog} alt="Edit Icon" className="mr-2 w-6 h-6" />
                {/* <span className="text-md font-normal">50K Comments</span> */}
                <span className="text-md font-normal">
                  {allPosts[index].total_comments} Comments
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
              >
                <img src={bucket} alt="Edit Icon" className="mr-2 w-6 h-6" />
                {/* <span className="text-md font-normal">2.3K Saved</span> */}
                <span className="text-md font-normal">
                  {allPosts[index].total_buckets} Saved
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
                onClick={() => setIsSharePopup(true)}
              >
                <img src={send} alt="Edit Icon" className="mr-2 w-6 h-6" />
                {/* <span className="text-md font-normal">1K Share</span> */}
                <span className="text-md font-normal">
                  {allPosts[index].total_shared} Share
                </span>
              </button>
              {/*--------------- Comment Popup ----------------*/}

              {/* <CommentPopup
              isOpen={isCommentPopup}
              onClose={() => setIsCommentPopup(false)}
              postId= {allPosts[index].id}
            /> */}

              {activePostId === allPosts[index].id && (
                <CommentPopup
                  isOpen={true}
                  onClose={() => setActivePostId(null)}
                  postId={allPosts[index].id}
                />
              )}

<SharePopup
              isOpen={isSharePopup}
              onClose={() => setIsSharePopup(false)}
            />

            </div>

            {/* Comment Section */}
            <div className="mt-6">
              <div className="text-[15px] text-[#415365] mb-2 text-left font-semibold">
                Previous comments
              </div>
              <div className="flex items-start space-x-3 rounded-md">
                {/* Profile Image */}
                <img
                  src={
                    allPosts[index].last_comment_user_profile_image ||
                    dummyUserImage
                  }
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />

                {/* Content Section */}
                <div className="flex flex-col space-y-2">
                  {/* Comment Content */}
                  <div className="bg-[#EEF0F29C] p-2 rounded-lg w-[120px]">
                    <p className="font-semibold text-[#415365] text-[15px] text-left">
                      {allPosts[index]?.last_comment_user_name}
                    </p>
                    <p className="text-[#415365] text-[14px] text-left">
                      {allPosts[index]?.last_comment_content}
                    </p>
                  </div>

                  {/* Interaction Section */}
                  <div className="flex items-center justify-between text-black text-sm mt-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <img src={ok} alt="Green Icon" className="w-4 h-4" />
                      </div>
                      <div className="">
                        {allPosts[index]?.last_comment_likes_count} <sup>Comments</sup>
                      </div>
                    </div>
                    <div className="">
                      62{" "}
                      <sup>
                        {getHoursFromNow(
                          allPosts[index]?.last_comment_created_at
                        )}
                      </sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 mb-2">
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
                    value={commentInputVal || ""}
                    onKeyDown={(e) => handleInputEnter(e, allPosts[index]?.id)}
                    onChange={(e) => setCommentInputVal(e.target.value)}
                  />

                  {/* Icons */}
                  <div className="flex items-center space-x-3 text-gray-400">
                    <button className="hover:text-gray-600" onClick={() => document.getElementById("commentImageUpload").click()}>
                      <FontAwesomeIcon icon={faImage} className="w-5 h-5" />
                      <input type="file" id="commentImageUpload" hidden onChange={(e) => handleCommentImage(e)} />
                    </button>
                    <div className="relative">
                      <button
                        className="hover:text-gray-600"
                        ref={triggerRef}
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      >
                        <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
                      </button>
                      {showEmojiPicker && (
                        <div
                          className="absolute bg-white border rounded-lg shadow-lg p-3 grid grid-cols-8 gap-2 z-50 max-h-48 overflow-y-auto"
                          style={{
                            right: 2, 
                            top: "-210px",
                            width: "23rem",
                          }}
                        >
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
                    </div>

                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
                    </button>

                    {/* {showEmojiPicker && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white border rounded-lg shadow-lg p-5 grid grid-cols-8 gap-2 max-h-48 overflow-y-auto">
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
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostCard;
