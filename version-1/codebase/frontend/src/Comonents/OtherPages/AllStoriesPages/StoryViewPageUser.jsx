/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Stories from "stories-react";
import "stories-react/dist/index.css";
import Background from "../../../assets/Background.png";
import logo from "../../../assets/headerIcon/logo.png";
import Girl from "../../../assets/headerIcon/girl.jpg";
import Travel from "../../../assets/travel.png";
import dummyUserImage from "../../../assets/user_image-removebg-preview.png";
import { useDispatch } from "react-redux";
import { deleteStory, getActiveStories } from "../../../redux/slices/postSlice";
import ShareStoryPopup from "../AllPopupComponent/ShareStoryPopup";
import EmojiPicker from "emoji-picker-react";
import ShowBadgeIcon from "../ShowBadgeIcons";

const StoryViewPageUser = ({
  closeBuddiesStoryPopup,
  currentBuddiesReelIndex,
  isShowvisibleStoryViewID,
  storyData,
  handleBuddiesStoryPrevious,
  handleBuddiesStoryNext,
  handleStoryCommentEnter,
  handleStoryReplyInputChange,
  storyReply,
  handleShareStoryPopupClose,
  handleEmojiSelectUserID,
  activeEmojiStoryId,
  showEmojiPickerStory,
  handleEmojiClickStory,
  handleLikeUnlikeStory,
  increaseViewersCount,
}) => {
  const dispatch = useDispatch();
  const [viewedStoryId, setViewedStoryId] = useState("");
  // console.log("====storyData===>", storyData);
  // console.log("====storyReply===>", storyReply);
  // console.log("====currentBuddiesReelIndex===>", currentBuddiesReelIndex);

  const handleStoryViewed = async () => {
    console.log("====viewedStoryId===>", viewedStoryId);
    await increaseViewersCount(viewedStoryId);
  };

  // useEffect(() => {
  //   handleStoryViewed();
  // }, []);

  // Verify and preprocess the stories data to ensure correct formatting
  const processedStoriesData = storyData?.map((story) => ({
    ...story,
    header: (
      <div key={story?.id}>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-[8px]">
            <div>
              <img
                src={story?.profile_image || dummyUserImage}
                alt="profile"
                className="w-[44px] h-[44px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="flex items-center gap-[5px] font-poppins font-semibold text-[16px] text-[#FFFFFF]">
                {story.full_name}
                {/* badge icon section  */}
                {story?.badge?.split("-")[0]?.trim() == "Solo Traveler" && (
                  <ShowBadgeIcon badge={story?.badge} />
                )}

                {story?.badge?.split("-")[0]?.trim() == "Luxury Traveler" && (
                  <ShowBadgeIcon badge={story?.badge} />
                )}

                {story?.badge?.split("-")[0]?.trim() == "Adventurer" && (
                  <ShowBadgeIcon badge={story?.badge} />
                )}

                {story?.badge?.split("-")[0]?.trim() == "Explorer" && (
                  <ShowBadgeIcon badge={story?.badge} />
                )}

                {story?.badge?.split("-")[0]?.trim() == "Foodie" && (
                  <ShowBadgeIcon badge={story?.badge} />
                )}
              </p>
              <p className="-mt-1 text-left font-inter font-medium text-[14px] text-[#FFFFFF]">
                {story?.badge?.split("-")[0]?.trim()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[5px]">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7479 4.99993C21.1652 6.97016 22 9.38756 22 11.9999C22 14.6123 21.1652 17.0297 19.7479 18.9999M15.7453 7.99993C16.5362 9.13376 17 10.5127 17 11.9999C17 13.4872 16.5362 14.8661 15.7453 15.9999M9.63432 5.36561L6.46863 8.5313C6.29568 8.70425 6.2092 8.79073 6.10828 8.85257C6.01881 8.9074 5.92127 8.9478 5.81923 8.9723C5.70414 8.99993 5.58185 8.99993 5.33726 8.99993H3.6C3.03995 8.99993 2.75992 8.99993 2.54601 9.10892C2.35785 9.20479 2.20487 9.35777 2.10899 9.54594C2 9.75985 2 10.0399 2 10.5999V13.3999C2 13.96 2 14.24 2.10899 14.4539C2.20487 14.6421 2.35785 14.7951 2.54601 14.8909C2.75992 14.9999 3.03995 14.9999 3.6 14.9999H5.33726C5.58185 14.9999 5.70414 14.9999 5.81923 15.0276C5.92127 15.0521 6.01881 15.0925 6.10828 15.1473C6.2092 15.2091 6.29568 15.2956 6.46863 15.4686L9.63431 18.6342C10.0627 19.0626 10.2769 19.2768 10.4608 19.2913C10.6203 19.3038 10.7763 19.2392 10.8802 19.1175C11 18.9773 11 18.6744 11 18.0686V5.9313C11 5.32548 11 5.02257 10.8802 4.88231C10.7763 4.76061 10.6203 4.69602 10.4608 4.70858C10.2769 4.72305 10.0627 4.93724 9.63432 5.36561Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5.12037C5 4.14921 5 3.66363 5.20249 3.39595C5.37889 3.16277 5.64852 3.01847 5.9404 3.00104C6.27544 2.98103 6.67946 3.25039 7.48752 3.78909L18.0031 10.7995C18.6708 11.2446 19.0046 11.4672 19.1209 11.7477C19.2227 11.9929 19.2227 12.2686 19.1209 12.5138C19.0046 12.7943 18.6708 13.0169 18.0031 13.462L7.48752 20.4724C6.67946 21.0111 6.27544 21.2805 5.9404 21.2604C5.64852 21.243 5.37889 21.0987 5.20249 20.8655C5 20.5979 5 20.1123 5 19.1411V5.12037Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={() => toggleSettingStoryView(story?.id)}
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between absolute -bottom-[585px] z-10 w-[396px] px-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Add a comment"
              onKeyDown={(e) =>
                handleStoryCommentEnter(e, story?.id, story?.user_id)
              }
              className="flex-1 bg-[#FFFFFFBF] focus:outline-none text-gray-600 rounded-[24px] md:w-[256px] h-[44px] placeholder:font-inter placeholder:font-medium placeholder:text-[14px] placeholder:text-[#212626] pl-9"
              value={storyReply[story?.id] || ""}
              onChange={(e) => handleStoryReplyInputChange(e, story?.id)}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 cursor-pointer"
              onClick={() => handleEmojiSelectUserID(story?.id)}
            >
              <g clipPath="url(#clip0_40000261_30967)">
                <path
                  d="M6.66602 11.6665C6.66602 11.6665 7.91602 13.3332 9.99935 13.3332C12.0827 13.3332 13.3327 11.6665 13.3327 11.6665M12.4993 7.49984H12.5077M7.49935 7.49984H7.50768M18.3327 9.99984C18.3327 14.6022 14.6017 18.3332 9.99935 18.3332C5.39698 18.3332 1.66602 14.6022 1.66602 9.99984C1.66602 5.39746 5.39698 1.6665 9.99935 1.6665C14.6017 1.6665 18.3327 5.39746 18.3327 9.99984ZM12.916 7.49984C12.916 7.72996 12.7295 7.9165 12.4993 7.9165C12.2692 7.9165 12.0827 7.72996 12.0827 7.49984C12.0827 7.26972 12.2692 7.08317 12.4993 7.08317C12.7295 7.08317 12.916 7.26972 12.916 7.49984ZM7.91602 7.49984C7.91602 7.72996 7.72947 7.9165 7.49935 7.9165C7.26923 7.9165 7.08268 7.72996 7.08268 7.49984C7.08268 7.26972 7.26923 7.08317 7.49935 7.08317C7.72947 7.08317 7.91602 7.26972 7.91602 7.49984Z"
                  stroke="#212626"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_40000261_30967">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {activeEmojiStoryId === story.id && showEmojiPickerStory && (
              <div className="absolute -top-[380px] left-0 z-50">
                <EmojiPicker
                  onEmojiClick={(emojiObject) =>
                    handleEmojiClickStory(emojiObject, story.id)
                  }
                  className="w-[250px] h-[300px] shadow-lg rounded-lg"
                />
              </div>
            )}
          </div>
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer "
              onClick={() => handleLikeUnlikeStory(story?.id)}
            >
              <rect width="44" height="44" rx="22" fill="#2DC6BE" />
              <path
                d="M17.556 18.3639C17.4669 19.3139 17.4044 20.9951 17.9654 21.7107C17.9654 21.7107 17.7013 19.8639 20.0685 17.5467C21.0216 16.6139 21.2419 15.3451 20.9091 14.3936C20.7201 13.8545 20.3748 13.4092 20.0748 13.0982C19.8998 12.9154 20.0341 12.6139 20.2888 12.6248C21.8294 12.6936 24.3263 13.1217 25.3873 15.7842C25.8529 16.9529 25.8873 18.1607 25.6654 19.3889C25.5248 20.1732 25.0248 21.917 26.1654 22.1311C26.9794 22.2842 27.3732 21.6373 27.5498 21.1717C27.6232 20.9779 27.8779 20.9295 28.0154 21.0842C29.3904 22.6482 29.5076 24.4904 29.2232 26.0764C28.6732 29.142 25.5685 31.3732 22.4841 31.3732C18.631 31.3732 15.5638 29.1685 14.7685 25.1779C14.4482 23.567 14.6107 20.3795 17.0951 18.1295C17.2794 17.9607 17.581 18.1107 17.556 18.3639Z"
                fill="white"
              />
              <path
                d="M23.8923 24.097C22.472 22.2689 23.1079 20.183 23.4564 19.3517C23.5032 19.2424 23.3782 19.1392 23.2798 19.2064C22.6689 19.622 21.4173 20.6002 20.8345 21.9767C20.0454 23.8377 20.1017 24.7486 20.5689 25.8611C20.8501 26.5314 20.5235 26.6736 20.3595 26.6986C20.2001 26.7236 20.0532 26.6174 19.936 26.5064C19.5989 26.1828 19.3587 25.7715 19.2423 25.3189C19.2173 25.222 19.0907 25.1955 19.0329 25.2752C18.5954 25.8799 18.3689 26.8502 18.3579 27.5361C18.3235 29.6564 20.0751 31.3752 22.1939 31.3752C24.8642 31.3752 26.8095 28.422 25.2751 25.9533C24.8298 25.2345 24.411 24.7642 23.8923 24.097Z"
                fill="#2DC6BE"
              />
            </svg>
          </div>
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer "
              // onClick={() =>
              //   handleOpenShareStoryPopup(
              //     userStory?.id
              //   )
              // }
            >
              <g filter="url(#filter0_b_40000261_30974)">
                <rect
                  width="44"
                  height="44"
                  rx="22"
                  fill="white"
                  fillOpacity="0.75"
                />
                <path
                  d="M17.9257 16.9667L25.4423 14.4584C28.8173 13.3334 30.6507 15.1751 29.534 18.5501L27.0257 26.0667C25.3423 31.1251 22.5757 31.1251 20.8923 26.0667L20.1507 23.8334L17.9173 23.0917C12.8673 21.4167 12.8673 18.6584 17.9257 16.9667Z"
                  fill="#212626"
                />
                <path
                  d="M22.0996 21.6916L25.2746 18.5083L22.0996 21.6916Z"
                  fill="white"
                />
                <path
                  d="M22.0995 22.317C21.9411 22.317 21.7828 22.2587 21.6578 22.1337C21.4161 21.892 21.4161 21.492 21.6578 21.2503L24.8245 18.067C25.0661 17.8253 25.4661 17.8253 25.7078 18.067C25.9495 18.3087 25.9495 18.7087 25.7078 18.9503L22.5411 22.1337C22.4161 22.2503 22.2578 22.317 22.0995 22.317Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_40000261_30974"
                  x="-15"
                  y="-15"
                  width="74"
                  height="74"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_40000261_30974"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_40000261_30974"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {/* to show sharepopup on story section */}
            {/* {activeStoryId === story?.id &&
                                          isShareStoryPopup && ( */}
            <ShareStoryPopup
              // isOpen={isShareStoryPopup}
              // onClose={() => setIsSharePopup(false)}
              onClose={() => handleShareStoryPopupClose()}
              storyId={story?.id}
              userName={story?.user_name}
            />
            {/* )} */}
          </div>
        </div>
      </div>
    ),
  }));

  //   console.log("====processedStoriesData===>", processedStoriesData)

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center z-50"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="relative w-full max-w-[396px] flex items-center">
        {/* Logo */}
        <div className="absolute -top-[10px] -left-[540px] z-10">
          <img
            src={logo}
            alt="Travso Logo"
            className="h-12 bg-white w-[248px] h-[80px] rounded-[16px] p-[16px]"
          />
        </div>

        {/* Close Tab */}
        <div
          className="absolute -top-[10px] -right-[540px] z-10 cursor-pointer"
          onClick={closeBuddiesStoryPopup}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_40000261_31302)">
              <rect
                width="44"
                height="44"
                rx="22"
                fill="white"
                fillOpacity="0.75"
              />
              <path
                d="M15.5188 28.4817L28.4824 15.5181"
                stroke="#212626"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M15.5188 15.5183L28.4824 28.4819"
                stroke="#212626"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_40000261_31302"
                x="-15"
                y="-15"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_40000261_31302"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_40000261_31302"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Left Navigation Button */}
        <button
          className="absolute top-1/2 -left-[50px] w-9 h-9 transform -translate-y-1/2 bg-white text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
          onClick={handleBuddiesStoryPrevious}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#212626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Image Slider */}
        <div className="relative w-[396px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-4"
            // style={{
            //   transform: `translateX(calc(-${
            //     currentBuddiesReelIndex * 100
            //   }% + ${currentBuddiesReelIndex * -16}px))`,
            // }}
          >
            <Stories
              stories={processedStoriesData}
              defaultInterval={3000}
              width={396}
              height={650}
              className="StoriesCss"
            />
          </div>
        </div>
        {/* Right Navigation Button */}
        <button
          className="absolute top-1/2 -right-[50px] w-9 h-9 transform -translate-y-1/2 bg-white text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
          onClick={() => handleBuddiesStoryNext()}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#212626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryViewPageUser;
