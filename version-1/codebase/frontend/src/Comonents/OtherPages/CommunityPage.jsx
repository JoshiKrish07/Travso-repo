import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import CommunityLeftSidebar from "./CommunityLeftSidebar";
import CommunityRightSidebar from "./CommunityRightSidebar";
import Boy1 from "../../assets/headerIcon/boy1.png";
import Girl from "../../assets/headerIcon/girl.jpg";
import story from "../../assets/story.png";
import Travel from "../../assets/travel.png";
import First from "../../assets/1.png";
import BucketImageSecond from "../../assets/bucketimageSecond.png";
import dotThree from "../../assets/dotThree.png";
import leftIcon from "../../assets/lefticon.png";
import like from "../../assets/like.png";
import Dialog from "../../assets/Dialog.png";
import entypo_bucket from "../../assets/entypo_bucket.png";
import send from "../../assets/headerIcon/send.png";
import p1 from "../../assets/headerIcon/p1.png";
import p2 from "../../assets/headerIcon/p2.png";
import p3 from "../../assets/headerIcon/p3.png";
import floxy from "../../assets/floxy.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getOnlineFriends, getUserDetails, getUserPosts } from "../../redux/slices/authSlice";
import CreateaPostPopup from "./AllPopupComponent/CreateaPostPopup";
import PostDetailPopup from "./AllPopupComponent/PostDetailPopup";
import { commitPost } from "../../redux/slices/postSlice";
import dummyUserImage from "../../assets/user_image-removebg-preview.png";

const CommunityPage = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  const data = [
    { id: 1, src: story, label: "My Story" },
    { id: 2, src: Girl, label: "Priya Sharma" },
    { id: 3, src: Boy1, label: "Rohit Singh" },
    { id: 4, src: Girl, label: "Sneha Patel" },
    { id: 5, src: Boy1, label: "Vikram Das" },
    { id: 6, src: Boy1, label: "Amit Verma" },
    { id: 7, src: Girl, label: "Anjali Mehta" },
    { id: 8, src: Boy1, label: "Karan Thakur" },
    { id: 9, src: Boy1, label: "Vikram Das" },
    { id: 10, src: Boy1, label: "Vikram Das" },
    { id: 11, src: Boy1, label: "Vikram Das" },
    { id: 12, src: Boy1, label: "Amit Verma" },
    { id: 13, src: Girl, label: "Anjali Mehta" },
    { id: 14, src: Boy1, label: "Karan Thakur" },
    { id: 15, src: Boy1, label: "Vikram Das" },
  ];

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
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [isCreatePostPopup, setIsCreatePostPopup] = useState(false);
  const [isPostDetailPopup, setIsPostDetailPopup] = useState(false);

  const [postData, setPostData] = useState({
    description: "",
    location: "",
    buddies: [],
    tags: [],
    media_url: [],
    is_public: true,
    buddies_id: []
  });
  /* redux state data starts */

  const { onlineFriends, allUsers, user: userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!onlineFriends) {
      dispatch(getOnlineFriends());
    }

    if (!allUsers) {
      dispatch(getAllUsers());
    }

    if(!userDetails) {
      dispatch(getUserDetails());
    }

  }, [dispatch]);

  /* redux state data ends */

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

  // Sixth Section of Sample data for the popup
  const postDetails1 = {
    title: "Floxy",
    subtitle: "Sponsored",
    subtitleData: "🌍",
    description:
      "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: [BucketImageSecond, Travel, First],
    avtar: floxy,
    hastag: "#arsitek #art #creative",
  };

  const images1 = postDetails1.image;

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [isFullTextVisible1, setIsFullTextVisible1] = useState(false);

  // Function to toggle the full text
  const toggleFullText1 = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const goToPrevious1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide1 = (index) => {
    setCurrentIndex(index);
  };

  const ReelData = [
    {
      title: "Pankaj Reet Tech",
      subtitle: "Solo Traveler",
      subtitleData: "Rameswaram",
      image: BucketImageSecond, // Single image per object
      avtar: Boy1,
    },
    {
      title: "Another Traveler",
      subtitle: "Adventurous Spirit",
      subtitleData: "New York",
      image: Travel, // Single image per object
      avtar: Girl,
    },
    {
      title: "Tech Explorer",
      subtitle: "Gadget Geek",
      subtitleData: "San Francisco",
      image: BucketImageSecond, // Single image per object
      avtar: Boy1,
    },
    {
      title: "Food Lover",
      subtitle: "Chef in the Making",
      subtitleData: "Paris",
      image: Travel, // Single image per object
      avtar: Boy1,
    },
    {
      title: "Nature Enthusiast",
      subtitle: "Wilderness Seeker",
      subtitleData: "Amazon Rainforest",
      image: BucketImageSecond,
      avtar: Boy1,
    },
  ];

  const [ReelIndex, setReelIndex] = useState(0);

  const goToPreviousReel = () => {
    setReelIndex((prevIndex) =>
      prevIndex === 0 ? ReelData.length - 1 : prevIndex - 1
    );
  };

  const goToNextReel = () => {
    setReelIndex((prevIndex) =>
      prevIndex === ReelData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlideReel = (index) => {
    setReelIndex(index);
  };

  const handlePostDetailPopup = () =>{
    setIsPostDetailPopup(false);
    setIsCreatePostPopup(true);
    // isOpen();
  }

  const handlePostUpload = async() => {
    try {
      console.log("postData", postData)
      const commentResult = await dispatch(
        commitPost(postData)
      ).unwrap();
      if (commentResult) {
        // console.log("=====commentResult===>", commentResult.message);
        // await dispatch(getAllPosts());
        await dispatch(getUserPosts());
        setPostData({
          description: "",
          location: "",
          buddies: [],
          tags: [],
          media_url: [],
          is_public: true,
          buddies_id: []
        });
        setIsPostDetailPopup(false);
        // handleFlashMessage(commentResult.message, 'success');
      }
    } catch (error) {
      console.log("error in handlePostUpload", error)
    }
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-3 px-3 flex justify-center items-center">
        <div className="container mx-auto flex gap-3">
          {/*-------- Left Section -------*/}
          <div className="w-[340px] flex flex-col">
            <CommunityLeftSidebar />
          </div>
          {/*-------- Left Section -------*/}
          {/*-------- Middle Section -------*/}
          <div className="w-[696px] flex-grow flex flex-col">
            {/*-------- First Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5">
              <h2 className="mb-4 font-poppins text-[20px] font-semibold text-[#212626] text-left">
                TravSo Moments
              </h2>
              <div
                ref={sliderRef}
                className="flex overflow-x-auto scroll-smooth no-scrollbar scrollbar-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={(e) => handleMouseDown(e.touches[0])}
                onTouchMove={(e) => handleMouseMove(e.touches[0])}
                onTouchEnd={handleMouseUpOrLeave}
              >
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center mb-2 mr-2"
                    style={{ flex: "0 0 auto" }}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-[64px] h-[64px] object-cover rounded-full border-2 border-[#2DC6BE] p-[2px]"
                    />
                    <p className="font-inter font-medium text-[14px] mt-2 text-[#212626]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-5">
                {/* Profile Image */}
                <img
                  src={userDetails?.profile_image || dummyUserImage}
                  alt="Profile"
                  className="w-[44px] h-[44px] rounded-full"
                />

                <div className="flex items-center bg-[#F0F7F7] p-2 rounded-full w-[100%] h-[44px] ">
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Post a story about your travel..."
                    className="flex-1 bg-transparent border-none outline-none placeholder:font-inter font-medium text-[14px] text-[#869E9D] ml-2 "
                    onClick={() => setIsCreatePostPopup(true)}
                  />
                  {isCreatePostPopup && (
                    <CreateaPostPopup
                      isOpen={isCreatePostPopup}
                      onClose={() => setIsCreatePostPopup(false)}
                      openPostDetail={() => setIsPostDetailPopup(true)}
                      postData={postData}
                      setPostData={setPostData}
                    />
                  )}

                  {isPostDetailPopup && (
                    <>
                      <PostDetailPopup
                        isOpen={isPostDetailPopup}
                        onClose={handlePostDetailPopup}
                        postData={postData}
                        handlePostUpload={handlePostUpload}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            {/*-------- First Section --------*/}

            {/*-------- Second Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mt-4">
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
                  <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
                    {images.map((_, index) => (
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
                <p className="text-left text-[#1DB2AA] mb-2">
                  {postDetails.hastag}
                </p>
              </div>
              {/*---------- Scrollable Part ---------*/}

              {/* Bottom Fixed Section */}
              <div className="flex items-center justify-between">
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
                  <img
                    src={like}
                    alt="like"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
                    Liked
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
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
                  <img
                    src={send}
                    alt="send"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
                    {postDetails.share} Share
                  </span>
                </button>
              </div>
              {/* Bottom Fixed Section */}
            </div>
            {/*-------- Second Section --------*/}

            {/*-------- Third Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mt-4">
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
                  <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
                    {images.map((_, index) => (
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
                <p className="text-left text-[#1DB2AA] mb-2">
                  {postDetails.hastag}
                </p>
              </div>
              {/*---------- Scrollable Part ---------*/}

              {/* Bottom Fixed Section */}
              <div className="flex items-center justify-between">
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
                  <img
                    src={like}
                    alt="like"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
                    Liked
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
                >
                  <img
                    src={Dialog}
                    alt="dialog"
                    className="mr-1 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
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
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
                    Bucket List
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
                >
                  <img
                    src={send}
                    alt="send"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
                    {postDetails.share} Share
                  </span>
                </button>
              </div>
              {/* Bottom Fixed Section */}
            </div>
            {/*-------- Third Section --------*/}

            {/*-------- Fourth Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mt-4  ">
              {/* Top Fixed Section */}
              <h2 className="mb-4 font-poppins text-[32px] font-semibold text-[#212626] text-left">
                Reels
              </h2>

              {/* Top Fixed Section */}

              {/*---------- Slider Part ---------*/}
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Slider */}
                <div className="flex justify-between mb-4 overflow-hidden">
                  {Array.from({ length: 3 }).map((_, index) => {
                    const currentIndex = (ReelIndex + index) % ReelData.length; // Loop through data
                    const reel = ReelData[currentIndex];
                    return (
                      <div key={currentIndex} className="flex-shrink-0">
                        <img
                          src={reel.image}
                          alt={`Slide ${currentIndex}`}
                          className="rounded-lg"
                          style={{
                            width: "300px",
                            height: "400px",
                            objectFit: "cover",
                            marginRight: index < 2 ? "20px" : "0",
                          }}
                        />
                        <div className="flex items-center gap-2 mt-2">
                          <img
                            src={reel.avtar}
                            alt="Avatar"
                            className="w-[44px] h-[44px] object-cover rounded-full"
                          />
                          <div>
                            <h3 className="font-poppins text-left font-semibold text-[#212626] text-[16px]">
                              {reel.title}
                            </h3>
                            <p className="font-inter font-medium text-left text-[#212626] text-[14px]">
                              {reel.subtitle} • {reel.subtitleData}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Left Button */}
                <button
                  onClick={goToPreviousReel}
                  className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
                >
                  <img src={leftIcon} alt="leftIcon" />
                </button>

                {/* Right Button */}
                <button
                  onClick={goToNextReel}
                  className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
                >
                  <img src={leftIcon} alt="leftIcon" />
                </button>

                {/* Dots */}
                <div className="flex justify-center">
                  {ReelData.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => goToSlideReel(index)}
                      className={`w-2 h-2 mx-1 rounded-full ${
                        index === ReelIndex
                          ? "bg-[#2DC6BE]"
                          : "bg-[#364045] hover:bg-[#2DC6BE]"
                      } cursor-pointer`}
                    ></div>
                  ))}
                </div>
              </div>
              {/*---------- Slider Part ---------*/}
            </div>
            {/*-------- Fourth Section --------*/}

            {/*-------- Fifth Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mt-4">
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
                  <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
                    {images.map((_, index) => (
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
                <p className="text-left text-[#1DB2AA] mb-2">
                  {postDetails.hastag}
                </p>
              </div>
              {/*---------- Scrollable Part ---------*/}

              {/* Bottom Fixed Section */}
              <div className="flex items-center justify-between">
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
                  <img
                    src={like}
                    alt="like"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
                    Liked
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
                >
                  <img
                    src={Dialog}
                    alt="dialog"
                    className="mr-1 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
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
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
                    Bucket List
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
                >
                  <img
                    src={send}
                    alt="send"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626]">
                    {postDetails.share} Share
                  </span>
                </button>
              </div>
              {/* Bottom Fixed Section */}
            </div>
            {/*-------- Fifth Section --------*/}

            {/*-------- Sixth Section --------*/}
            <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5 mt-4  ">
              {/* Top Fixed Section */}
              <div className="flex items-center justify-between space-x-4 mb-1 pb-2">
                <div className="flex items-center gap-2">
                  <img
                    src={postDetails1.avtar}
                    alt="Avatar"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-poppins font-semibold text-left text-[16px] text-[#212626]">
                        {postDetails1.title}
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
                    <p className="-mt-1 font-inter font-medium text-left text-[12px] text-[#667877]">
                      {postDetails1.subtitle} • {postDetails1.subtitleData}
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
                  <div className="overflow-hidden relative mb-4">
                    <div>
                      <img
                        src={images1[currentIndex1]}
                        alt={`Slide ${currentIndex1}`}
                        className="rounded-lg w-full h-[432px] object-cover transition duration-500"
                      />
                    </div>
                  </div>

                  {/* Left Button */}
                  <button
                    onClick={goToPrevious1}
                    className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
                  >
                    <img src={leftIcon} alt="leftIcon" className="" />
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={goToNext1}
                    className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
                  >
                    <img src={leftIcon} alt="leftIcon" className="" />
                  </button>

                  {/* Dots */}
                  <div className="flex justify-center mt-1 absolute items-center justify-center inline-flex top-[400px] bg-[#FFFFFFBF] w-[68px] h-[16px] rounded-[16px]">
                    {images1.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => goToSlide1(index)}
                        className={`w-2 h-2 mx-1 rounded-full ${
                          index === currentIndex1
                            ? "bg-[#2DC6BE]"
                            : "bg-[#364045] hover:bg-[#2DC6BE]"
                        } cursor-pointer`}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Post Description */}
                <p className="font-inter font-medium text-[14px] text-[#212626] text-left text-justify mb-1 mt-3">
                  {isFullTextVisible1
                    ? postDetails1.description
                    : `${postDetails1.description.slice(0, 170)}...`}
                  <span
                    onClick={toggleFullText1}
                    className="text-[#2DC6BE] cursor-pointer"
                  >
                    {isFullTextVisible1 ? " Show less" : " See more"}
                  </span>
                </p>

                {/* Hashtags */}
                <p className="text-left text-[#1DB2AA] mb-2">
                  {postDetails1.hastag}
                </p>
              </div>
              {/*---------- Scrollable Part ---------*/}

              {/* Bottom Fixed Section */}
              <div className="flex items-center justify-between">
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
                  <img
                    src={like}
                    alt="like"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] hover:text-white">
                    Liked
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
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
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full relative"
                >
                  <img
                    src={entypo_bucket}
                    alt="saved"
                    className="mr-1 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626] ">
                    Bucket List
                  </span>
                </button>

                <button
                  aria-label="Edit Info"
                  className="flex items-center justify-center w-[130px] h-[36px] bg-[#F0F7F7] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
                >
                  <img
                    src={send}
                    alt="send"
                    className="mr-2 w-[20px] h-[20px]"
                  />
                  <span className="font-inter font-medium text-[14px] text-[#212626]">
                    Share
                  </span>
                </button>
              </div>
              {/* Bottom Fixed Section */}
              <div className="flex items-center justify-center rounded-full gap-[4px] padding-[8px] h-[36px] bg-[#F0F7F7] mt-4">
                <img
                  src={Dialog}
                  alt="Dialog"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
                <p className="font-inter font-medium text-[14px] text-[#212626] hover:text-[#2DC6BE] cursor-pointer">
                  Visit link
                </p>
              </div>
            </div>
            {/*-------- Sixth Section --------*/}
          </div>
          {/*-------- Middle Section -------*/}
          {/*-------- Right Section -------*/}
          <div className="w-[340px] flex flex-col">
            <CommunityRightSidebar />
          </div>
          {/*-------- Right Section -------*/}
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
