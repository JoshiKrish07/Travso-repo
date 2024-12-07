import React, { useState } from "react";
import Girl from "../../assets/headerIcon/girl.jpg";
import Boy from "../../assets/headerIcon/boy2.jpg";
import Boywithgirl from "../../assets/headerIcon/boywithgirl.png";
import yellowgirl from "../../assets/headerIcon/yellowGirl.png";
import Dialog from "../../assets/headerIcon/Dialog.png";
import like from "../../assets/like.png";
import send from "../../assets/headerIcon/send.png";
import ok from "../../assets/headerIcon/ok.png";
import CommentPopup from "./AllPopupComponent/CommentPopup";
import Saved from "../../assets/headerIcon/archive-minus.png";
import SharePopup from "./AllPopupComponent/SharePopup";
import SavedPopup from "./AllPopupComponent/SavedPopup";
import Travel from "../../assets/travel.png";
import leftIcon from "../../assets/lefticon.png";
import BucketImageSecond from "../../assets/bucketimageSecond.png";
import First from "../../assets/1.png";
import Boy1 from "../../assets/headerIcon/boy1.png";
import p1 from "../../assets/headerIcon/p1.png";
import p2 from "../../assets/headerIcon/p2.png";
import p3 from "../../assets/headerIcon/p3.png";
import dotThree from "../../assets/dotThree.png";
import entypo_bucket from "../../assets/entypo_bucket.png";
import noto_fire from "../../assets/noto_fire.png";

const PostCard = () => {
  const [isCommentPopup, setIsCommentPopup] = useState(false);
  const [isCommentWithSavedPopup, setIsCommentWithSavedPopup] = useState(false);
  const [isSharePopup, setIsSharePopup] = useState(false);
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

  const postDetailsData = {
    title: "Ramesh",
    subtitle: "Tracking",
    subtitleData: "Indore",
    description:
      "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: [Travel, BucketImageSecond, First],
    avtar: Girl,
    hastag: "#arsitek #art #creative",
  };

  const images = postDetails.image;
  const imagesData = postDetailsData.image;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  // Function to toggle the full text
  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 px-4 mb-4">
        <h5 className="text-left font-poppins font-semibold text-[20px] text-[#212626]">
          Create a post
        </h5>
        <div className="flex items-center gap-1 mt-4 mb-1">
          {/* Profile Image */}
          <img
            src={Girl}
            alt="Profile"
            className="w-[44px] h-[44px] rounded-full"
          />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Post a story about your travel..."
            className="h-[44px] flex-1 bg-[#F0F7F7] border border-[#F0F7F7] rounded-[24px] outline-none placeholder:text-[#869E9D] pl-3 placeholder:text-[14px] placeholder:font-medium placeholder:font-inter"
          />
        </div>
      </div>

      {/* First Data */}
      <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mb-4">
        {/* Top Fixed Section */}
        <div className="flex items-center justify-between space-x-4 mb-1 pb-2">
          <div className="flex items-center gap-2">
            <img
              src={postDetails.avtar}
              alt="Avatar"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-poppins font-semibold text-left text-[16px] text-[#212626]">
                  {postDetails.title}
                </h3>
                {/* Images beside h3 */}
                <div className="flex space-x-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                      fill="#9747FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6846 5.53463C11.8636 5.71362 11.8636 6.00382 11.6846 6.18281L7.4068 10.4606C7.22781 10.6396 6.93761 10.6396 6.75862 10.4606L4.31417 8.01615C4.13518 7.83716 4.13518 7.54696 4.31417 7.36797C4.49316 7.18898 4.78337 7.18898 4.96236 7.36797L7.08271 9.48832L11.0364 5.53463C11.2154 5.35564 11.5056 5.35564 11.6846 5.53463Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p className="-mt-1 font-inter font-medium text-left text-[12px] text-[#667877]">
                {postDetails.subtitle} • {postDetails.subtitleData}
              </p>
            </div>
          </div>
          <div>
            <img src={dotThree} alt="dotThree" className="h-4 object-cover" />
          </div>
        </div>
        {/* Top Fixed Section */}

        {/*---------- Scrollable Part ---------*/}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Slider */}
            <div className="overflow-hidden relative mb-4">
              <div>
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="rounded-lg w-full h-[432px] object-cover transition duration-500"
                />
              </div>
            </div>

            {/* Left Button */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#212626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#212626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 mx-1 rounded-full transform transition-transform duration-300 ${
                    index === currentIndex
                      ? "bg-[#2DC6BE] scale-150"
                      : "bg-[#869E9D] hover:bg-[#2DC6BE] scale-100"
                  } cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
          {/* Post Description */}
          <p className="font-inter font-medium text-[14px] text-[#212626] text-left text-justify mb-1 mt-3">
            {isFullTextVisible
              ? postDetails.description
              : `${postDetails.description.slice(0, 170)}...`}
            <span
              onClick={toggleFullText}
              className="text-[#2DC6BE] cursor-pointer"
            >
              {isFullTextVisible ? " Show less" : " See more"}
            </span>
          </p>

          {/* Hashtags */}
          <p className="text-left text-[#1DB2AA] mb-4">{postDetails.hastag}</p>
        </div>
        {/*---------- Scrollable Part ---------*/}

        {/* Bottom Fixed Section */}
        <div className="flex items-center justify-between mb-2">
          <ul className="flex gap-2">
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              72K Love &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              50K comments &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              2.3K Bucket listed &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              1K Shared &nbsp; &nbsp;
            </li>
          </ul>
          <p className="font-inter font-medium text-[12px] text-[#667877] ">
            {" "}
            12 Oct 2024{" "}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[144px] h-[36px] bg-[#F0F7F7] text-white text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full hover:bg-[#2DC6BE] hover:text-white"
          >
            <img
              src={noto_fire}
              alt="like"
              className="mr-2 w-[20px] h-[20px]"
            />
            <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
              Liked
            </span>
          </button>

          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[144px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
          >
            <img src={Dialog} alt="dialog" className="mr-1 w-[20px] h-[20px]" />
            <span className="font-inter font-medium text-[14px] text-[#212626]">
              Comment
            </span>
          </button>

          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[144px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full relative"
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
            className="flex items-center justify-center w-[144px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
          >
            <img src={send} alt="send" className="mr-2 w-[20px] h-[20px]" />
            <span className="font-inter font-medium text-[14px] text-[#212626] ">
              {postDetails.share} Share
            </span>
          </button>
        </div>
        {/* Bottom Fixed Section */}
      </div>

      {/* Second Data */}
      <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mb-4">
        {/* Top Fixed Section */}
        <div className="flex items-center justify-between space-x-4 mb-1 pb-2">
          <div className="flex items-center gap-2">
            <img
              src={postDetailsData.avtar}
              alt="Avatar"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-poppins font-semibold text-left text-[16px] text-[#212626]">
                  {postDetailsData.title}
                </h3>
                {/* Images beside h3 */}
                <div className="flex space-x-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                      fill="#9747FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6846 5.53463C11.8636 5.71362 11.8636 6.00382 11.6846 6.18281L7.4068 10.4606C7.22781 10.6396 6.93761 10.6396 6.75862 10.4606L4.31417 8.01615C4.13518 7.83716 4.13518 7.54696 4.31417 7.36797C4.49316 7.18898 4.78337 7.18898 4.96236 7.36797L7.08271 9.48832L11.0364 5.53463C11.2154 5.35564 11.5056 5.35564 11.6846 5.53463Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p className="-mt-1 font-inter font-medium text-left text-[12px] text-[#667877]">
                {postDetailsData.subtitle} • {postDetailsData.subtitleData}
              </p>
            </div>
          </div>
          <div>
            <img src={dotThree} alt="dotThree" className="h-4 object-cover" />
          </div>
        </div>
        {/* Top Fixed Section */}

        {/*---------- Scrollable Part ---------*/}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Slider */}
            <div className="overflow-hidden relative mb-4">
              <div>
                <img
                  src={imagesData[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="rounded-lg w-full h-[432px] object-cover transition duration-500"
                />
              </div>
            </div>

            {/* Left Button */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#212626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#212626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
              {imagesData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 mx-1 rounded-full transform transition-transform duration-300 ${
                    index === currentIndex
                      ? "bg-[#2DC6BE] scale-150"
                      : "bg-[#869E9D] hover:bg-[#2DC6BE] scale-100"
                  } cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
          {/* Post Description */}
          <p className="font-inter font-medium text-[14px] text-[#212626] text-left text-justify mb-1 mt-3">
            {isFullTextVisible
              ? postDetailsData.description
              : `${postDetailsData.description.slice(0, 170)}...`}
            <span
              onClick={toggleFullText}
              className="text-[#2DC6BE] cursor-pointer"
            >
              {isFullTextVisible ? " Show less" : " See more"}
            </span>
          </p>

          {/* Hashtags */}
          <p className="text-left text-[#1DB2AA] mb-4">
            {postDetailsData.hastag}
          </p>
        </div>
        {/*---------- Scrollable Part ---------*/}

        {/* Bottom Fixed Section */}
        <div className="flex items-center justify-between mb-2">
          <ul className="flex gap-2">
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              72K Love &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              50K comments &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              2.3K Bucket listed &nbsp; &nbsp;{" "}
              <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
            </li>
            <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
              1K Shared &nbsp; &nbsp;
            </li>
          </ul>
          <p className="font-inter font-medium text-[12px] text-[#667877] ">
            {" "}
            12 Oct 2024{" "}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[130px] h-[36px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full hover:bg-[#2DC6BE] hover:text-white"
          >
            <img src={like} alt="like" className="mr-2 w-[20px] h-[20px]" />
            <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
              Liked
            </span>
          </button>

          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
          >
            <img src={Dialog} alt="dialog" className="mr-1 w-[20px] h-[20px]" />
            <span className="font-inter font-medium text-[14px] text-[#212626]">
              Comment
            </span>
          </button>

          <button
            aria-label="Edit Info"
            className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full relative"
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
            className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
          >
            <img src={send} alt="send" className="mr-2 w-[20px] h-[20px]" />
            <span className="font-inter font-medium text-[14px] text-[#212626] ">
              {postDetailsData.share} Share
            </span>
          </button>
        </div>
        {/* Bottom Fixed Section */}
      </div>
    </>
  );
};

export default PostCard;
