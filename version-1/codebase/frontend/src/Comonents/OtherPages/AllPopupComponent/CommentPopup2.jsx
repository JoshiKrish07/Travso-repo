/* eslint-disable no-useless-escape */
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
import First from "../../../assets/1.png";
import BucketImageSecond from "../../../assets/bucketimageSecond.png";
import Dialog from "../../../assets/Dialog.png";
import entypo_bucket from "../../../assets/entypo_bucket.png";

import like from "../../../assets/like.png";
import Saved from "../../../assets/headerIcon/archive-minus.png";
import send from "../../../assets/headerIcon/send.png";
import Girl from "../../../assets/headerIcon/girl.jpg";
import "../Header.css";
import leftIcon from "../../../assets/lefticon.png";
import dotThree from "../../../assets/dotThree.png";
import chevron_down from "../../../assets/chevron-down.png";
import dots_vertical from "../../../assets/dots-vertical.png";
import noto_fire from "../../../assets/noto_fire.png";
import face_smile from "../../../assets/face_smile.png";
import Send from "../../../assets/Send.png";
import trash from "../../../assets/trash.png";
import alert from "../../../assets/alert.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, getUserPosts } from "../../../redux/slices/authSlice";
import {
  commentOnPost,
  getCommentOnPost,
  likeAnyComment,
  LikeUnlikePost,
} from "../../../redux/slices/postSlice";
import dummyUserImage from "../../../assets/user_image-removebg-preview.png";

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
  const dispatch = useDispatch();

  // State for handling "See more"
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [dropdownOpenSetting, setDropdownOpenSetting] = useState(false);
  const [commentInputVal, setCommentInputVal] = useState("");
  const [allPosts, setAllPosts] = useState(null);
  const [showReplyField, setShowReplyField] = useState(false);

  const toggleSetting = () => {
    setDropdownOpenSetting(!dropdownOpenSetting);
  };

  // Function to toggle the full text
  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const { postComment } = useSelector((state) => state.postSlice);
  const { userPosts, user: userDetails } = useSelector((state) => state.auth);

  /* emoji functionality starts */

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setCommentInputVal((prevComment) => prevComment + emoji);
    setShowEmojiPicker(false); // Close the emoji picker after selection
  };
  //  console.log("===showEmojiPicker==>", showEmojiPicker);
  /* emoji functionality ends */

  useEffect(() => {
    if (!userPosts) {
      // dispatch(getAllPosts());
      dispatch(getUserPosts());
    }

    if (!postComment) {
      dispatch(getCommentOnPost(postId));
    }

    if (!userDetails) {
      dispatch(getUserDetails());
    }

    const foundPost = userPosts.find((post) => post.id === postId);

    if (foundPost) {
      setAllPosts([foundPost]); // Place the found post at the 0 index
    }
  }, [dispatch, userPosts]);

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

  // sending comment on button click
  const sendComment = async (postId) => {
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
      console.log("error in sendComment", error);
    } finally {
      setCommentInputVal("");
    }
  };

  // show post date and time
  function formatISODate(isoDate) {
    const date = new Date(isoDate);

    // Format options for date only
    const options = {
      day: "numeric",
      month: "short", // "short" for abbreviated month (e.g., Oct)
      year: "numeric",
    };

    // Format the date
    return date.toLocaleDateString("en-GB", options);
  }

  // for comment time difference
  function getTimeDifferenceFromNow(timestamp) {
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

  // Sample data for the popup
  const postDetails = {
    title: "Pankaj Reet Tech",
    subtitle: "Solo Traveler",
    subtitleData: "Rameswaram",
    description:
      "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: [Travel, BucketImageSecond, First],
    avtar: Boy1,
    hastag: "#arsitek #art #creative",
  };

  const images = postDetails.image;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleCommentLikeUnlike = async (commentId) => {
    try {
      const response = await dispatch(likeAnyComment(commentId)).unwrap();
      console.log("=====response=====>", response);
    } catch (error) {
      console.log("error in handleCommentLikeUnlike", error);
    }
  };

  // to show post images
  const mediaArray =
    allPosts && allPosts[0].media_url.replace(/^\[\"|\"?\]$/g, "").split('","'); // Split the string into individual URLs



  // handle 
  const handleReplyInputEnter = async() => {
      try {
        console.log("hello")
      } catch (error) {
        console.log("error in handleReplyInputEnter commentpopup page", error);
      }
  }


  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[1040px] md:w-[1040px] h-[640px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-4 sticky top-0 bg-white z-10">
          <h2 className="font-poppins font-semibold text-[#212626] text-[24px]">
            Comment section
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
          <div className="w-3/5 px-6 py-4 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between space-x-4 mb-1 pb-2 ">
              <div className="flex items-center gap-2">
                <img
                  src={
                    (allPosts && allPosts[0]?.profile_image) || dummyUserImage
                  }
                  alt="Avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-poppins font-semibold text-left text-[16px] text-[#212626]">
                    {allPosts && allPosts[0]?.full_name}
                  </h3>
                  <p className="-mt-1 font-inter font-medium text-left text-[12px] text-[#667877]">
                    {postDetails.subtitle} • {postDetails.subtitleData}
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={dotThree}
                  alt="dotThree"
                  className="h-4 object-cover"
                />
              </div>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-hidden">
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Slider */}
                <div className="overflow-hidden relative">
                  <div>
                    <img
                      // src={images[currentIndex]}
                      src={mediaArray && mediaArray[currentIndex]}
                      alt={`Slide ${currentIndex}`}
                      className="rounded-lg w-full h-[344px] object-cover transition duration-500"
                    />
                  </div>
                </div>

                {/* Left Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
                >
                  <img src={leftIcon} alt="leftIcon" className="" />
                </button>

                {/* Right Button */}
                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
                >
                  <img src={leftIcon} alt="leftIcon" className="" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-1">
                  {mediaArray &&
                    mediaArray?.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 mx-1 rounded-full ${
                          index === currentIndex
                            ? "bg-[#2DC6BE]"
                            : "bg-[#364045] hover:bg-[#2DC6BE]"
                        } cursor-pointer`}
                      ></div>
                    ))}
                </div>
              </div>
              {/* Post Description */}
              <p className="font-inter font-medium text-[14px] text-[#212626] text-left text-justify mb-1">
                {isFullTextVisible
                  ? allPosts && allPosts[0].description
                  : allPosts && `${allPosts[0].description.slice(0, 170)}...`}
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
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="flex items-center justify-between">
              <ul className="flex gap-2">
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  {allPosts && allPosts[0]?.total_likes} Love &nbsp; &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  {allPosts && allPosts[0]?.total_comments} comments &nbsp;
                  &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  {allPosts && allPosts[0]?.total_buckets} Bucket listed &nbsp;
                  &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  {allPosts && allPosts[0]?.total_shared} Shared &nbsp; &nbsp;
                </li>
              </ul>
              <p className="font-inter font-medium text-[12px] text-[#667877] ">
                {" "}
                {/* 12 Oct 2024{" "} */}
                {allPosts && formatISODate(allPosts[0]?.post_created_at)}{" "}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full hover:bg-[#2DC6BE] hover:text-white"
                onClick={() => handleLikeUnlike(allPosts[0].id)}
              >
                <img src={like} alt="like" className="mr-2 w-[20px] h-[20px]" />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Liked
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img
                  src={Dialog}
                  alt="dialog"
                  className="mr-1 w-[20px] h-[20px]"
                />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Comment
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full relative"
              >
                <img
                  src={entypo_bucket}
                  alt="saved"
                  className="mr-1 w-[20px] h-[20px]"
                />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Bucket List
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img src={send} alt="send" className="mr-2 w-[20px] h-[20px]" />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  {postDetails.share} Share
                </span>
              </button>
            </div>
            {/* Bottom Fixed Section */}
          </div>

          {/* Right Section - Post Activity */}
          <div className="w-2/5 px-6 py-4 h-full border-l border-gray-100 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between sticky top-0 bg-white z-10 cursor-pointer">
              <h3 className="font-poppins font-semibold text-[20px] text-[#212626]">
                Comments ({allPosts && allPosts[0]?.total_comments})
              </h3>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-thin space-y-4">
              {/* <div className="mt-6"> */}
              {postComment &&
                postComment.map((userPosts, index) => {
                  return (
                    <div className="mt-6" key={index}>
                      {/* Parent Comment Reaction */}
                      <div className="flex items-start space-x-3 rounded-md">
                        {/* Profile Image */}
                        <img
                          src={userPosts?.profile_image || dummyUserImage}
                          alt="User"
                          className="w-8 h-8 rounded-full"
                        />

                        {/* Content Section */}
                        <div className="w-full flex flex-col space-y-2">
                          {/* Comment Content */}
                          <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                            <div className="flex items-center justify-between">
                              <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                                {userPosts?.user_name || userPosts?.full_name}{" "}
                                &nbsp;{" "}
                                <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                                &nbsp;{" "}
                                <span className="font-inter font-medium text-[16px] text-[#667877]">
                                  {getTimeDifferenceFromNow(
                                    userPosts?.created_at
                                  )}{" "}
                                  ago
                                </span>
                              </p>
                              <img
                                src={dots_vertical}
                                alt="dots_vertical"
                                className="w-[24px] h-[24px] cursor-pointer"
                                onClick={toggleSetting}
                              />
                              {/* DropdownSetting Menu */}
                              {dropdownOpenSetting && (
                                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#ddd] rounded-md rounded-[16px] shadow-md w-[200px]">
                                  <div className="flex items-center justify-between p-2 px-4 ">
                                    <h6 className="font-poppins font-semibold text-[16px] text-[#212626]">
                                      More Options
                                    </h6>

                                    {/* Close Button (X) */}
                                    <button
                                      className="hover:text-[#2DC6BE] font-poppins font-semibold text-[16px] text-[#212626]"
                                      onClick={() =>
                                        setDropdownOpenSetting(false)
                                      }
                                      aria-label="Close"
                                    >
                                      &#x2715;
                                    </button>
                                  </div>
                                  <ul>
                                    <li className="font-inter font-medium text-[16px] text-[#212626] px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                      <img
                                        src={alert}
                                        alt="alert"
                                        className="w-[20px] h-[20px] cursor-pointer mr-2"
                                      />{" "}
                                      Report comment
                                    </li>
                                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                      <img
                                        src={trash}
                                        alt="alert"
                                        className="w-[20px] h-[20px] cursor-pointer mr-2"
                                      />{" "}
                                      Delete comment
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <p className="font-inter font-normal text-[14px] text-[#212626] text-left">
                              {userPosts?.content}
                            </p>
                          </div>

                          {/* Interaction Section */}
                          <div className="-mt-5 flex items-center gap-2">
                            <div className="flex items-center">
                              <div
                                className="flex items-center cursor-pointer"
                                onClick={() =>
                                  handleCommentLikeUnlike(userPosts.id)
                                }
                              >
                                <img
                                  src={noto_fire}
                                  alt="noto_fire"
                                  className="w-4 h-4"
                                />
                              </div>
                              <div className="flex items-center">
                                <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                                  {userPosts?.total_likes_on_comment || "0"}{" "}
                                  likes
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center" onClick={() => setShowReplyField(!showReplyField)}>
                              <div className="flex items-center">
                                <img
                                  src={Dialog}
                                  alt="Dialog"
                                  className="w-4 h-4"
                                />
                              </div>
                              <div className="flex items-center cursor-pointer">
                                <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                                  {userPosts?.total_reply_on_comment || "0"}{" "}
                                  replies
                                </p>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        {userPosts.comment_reply &&
                          userPosts.comment_reply.map(
                            (userReply, replyIndex) => {
                              return (
                                <div key={replyIndex}>
                                  <div className="mt-4 ml-8">
                                    {/* Child Comment Reaction */}
                                    <div className="flex items-start rounded-md">
                                      {/* Profile Image */}
                                      <img
                                        src={Girl}
                                        alt="User"
                                        className="w-8 h-8 rounded-full"
                                      />

                                      {/* Content Section */}
                                      <div className="w-full flex flex-col space-y-2">
                                        {/* Comment Content */}
                                        <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                                          <div className="flex items-center justify-between">
                                            <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                                              Joana Almeida &nbsp;{" "}
                                              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                                              &nbsp;{" "}
                                              <span className="font-inter font-medium text-[16px] text-[#667877]">
                                                4 hrs ago
                                              </span>
                                            </p>
                                            <img
                                              src={dots_vertical}
                                              alt="dots_vertical"
                                              className="w-[24px] h-[24px]"
                                            />
                                          </div>

                                          <p className="font-inter font-medium text-[14px] text-[#212626] text-left">
                                            Nice View 🎉
                                          </p>
                                        </div>

                                        {/* Interaction Section */}
                                        <div className="flex items-center gap-2">
                                          <div className="flex items-center">
                                            <div className="flex items-center">
                                              <img
                                                src={noto_fire}
                                                alt="noto_fire"
                                                className="w-4 h-4"
                                              />
                                            </div>
                                            <div className="flex items-center">
                                              <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                                                62 likes
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex items-center">
                                            <div className="flex items-center">
                                              <img
                                                src={Dialog}
                                                alt="Dialog"
                                                className="w-4 h-4"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Child Comment Reaction */}
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </div>
                      {/* Parent Comment Reaction */}
                    </div>
                  );
                })}
              {/* </div> */}
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="mt-3">
              <div className="flex items-center gap-2">
                {/* Profile Image */}
                <img
                  src={
                    (userDetails && userDetails.profile_image) || dummyUserImage
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex items-center bg-gray-200 p-2 rounded-full w-[100%]">
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
                  <img
                    src={face_smile}
                    alt="smile"
                    className="cursor-pointer"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  />
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Add a comment"
                    onKeyDown={(e) => handleInputEnter(e, allPosts[0]?.id)}
                    value={commentInputVal}
                    onChange={(e) => setCommentInputVal(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-2 text-sm"
                  />

                  {/* Icons */}
                  <div className="flex items-center justify-center space-x-3 text-gray-400 mr-8">
                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
                    </button>
                    <button className="relative">
                      <img
                        src={Send}
                        onClick={() => sendComment(allPosts[0]?.id)}
                        className="fixed bottom-[44px] w-[44px] h-[44px]"
                      />
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
