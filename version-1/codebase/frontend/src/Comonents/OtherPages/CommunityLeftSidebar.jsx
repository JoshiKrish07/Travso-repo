import React, { useState } from "react";
import dotThree from "../../assets/dotthree.png";
import Girl from "../../assets/headerIcon/girl.jpg";
import Boy1 from "../../assets/headerIcon/boy1.png";
import Boy2 from "../../assets/headerIcon/boy2.jpg";
import ArchiveMinus from "../../assets/archive-minus.png";
import communityafter from "../../assets/communityafter.png";
import communitybefore from "../../assets/communitybefore.png";
import RightArrow from "../../assets/rightarrow.png";
// import energy from "../../assets/energy.png";
import plus from "../../assets/plus.png";
import earth from "../../assets/earth.png";
import BucketIcon from "../../assets/BucketIcon.svg";
import RightIconBuddies from "../../assets/RightIconBuddies.svg";

const CommunityLeftSidebar = () => {
  const [joinCommunity, setJoinCommunity] = useState([
    {
      id: 1,
      name: "Adventurer",
      handle: "12K member",
      image: Girl,
    },
    {
      id: 2,
      name: "Explorer",
      handle: "12K member",
      image: Boy1,
    },
    {
      id: 3,
      name: "Foodie",
      handle: "12K member",
      image: Boy2,
    },
    {
      id: 4,
      name: "Traveler",
      handle: "12K member",
      image: Boy1,
    },
    {
      id: 5,
      name: "TravSo",
      handle: "12K member",
      image: Girl,
    },
  ]);

  const [imageStates, setImageStates] = useState({});

  const handleImageClick = (id) => {
    setImageStates((prevStates) => {
      const newState = { ...prevStates };
      newState[id] =
        newState[id] === communitybefore ? communityafter : communitybefore;
      return newState;
    });
  };

  const users = [
    { id: 1, image: Girl, name: "User 1" },
    { id: 2, image: Girl, name: "User 2" },
    { id: 3, image: Girl, name: "User 3" },
    { id: 4, image: Girl, name: "User 4" },
    { id: 5, image: Girl, name: "User 5" },
    { id: 6, image: Girl, name: "User 6" },
  ];

  const totalUsers = 20;

  return (
    <>
 
      <div className="bg-white rounded-[16px] shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5">
        <div className="flex items-center justify-between gap-[10px]">
          <div className="flex items-center gap-2">
            <img
              src={BucketIcon}
              alt="BucketIcon"
              className="w-[74px] h-[74px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <h5 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
              Bucket List
            </h5>
            <p className="-mt-1 font-inter font-medium text-[14px] text-[#667877] text-left">
              Nec viverra ac aliquam urna quisque
            </p>
          </div>
          <div>
            <img
              src={RightIconBuddies}
              alt="RightIconBuddies"
              className="w-[24px] h-[24px] rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-[#09857E] rounded-[16px] shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5">
        <div className="flex flex-col items-start justify-between gap-[10px]">
          <div className="flex items-center">
            {users.map((user, index) => (
              <div
                key={user.id}
                className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white${
                  index === users.length - 2
                    ? "-translate-y-2 z-10"
                    : index === users.length - 1
                    ? "-translate-y-4 z-20"
                    : ""
                }`}
                style={{
                  marginLeft: index > 0 ? "-8px" : "0",
                }}
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#09857E] font-bold border-2 border-[#09857E] ml-[-15px] z-20">
              +{totalUsers - users.length}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="font-poppins font-semibold text-[20px] text-[#FFFFFF] text-left">
              Meet Industry experts
            </h5>
            <p className="font-inter font-medium text-[14px] text-[#FFFFFFBF] text-left">
              Nec viverra ac aliquam urna quisque quis in id. Nec viverra ac
              aliquam urna
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <button className="bg-[#FFFFFF] flex items-center justify-center w-[166px] h-[36px] rounded-[4px] placeholder:font-inter placeholder:font-medium placeholder:text-[14px] placeholder:text-[#09857E]">
              Connect with experts
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5">
        <div className="flex items-center justify-between">
        <h2 className="font-poppins text-[20px] font-semibold text-[#212626] text-left">
          Join Community
        </h2>
        <img 
         src={dotThree}
         className="w-[24px ]h-[24px] object-cover"
         alt="dotThree"
        />
        </div>
        
        <div className="mt-2 mb-4 space-y-4 border-b py-3">
          {joinCommunity.map((buddy) => (
            <div key={buddy.id} className="flex items-center justify-between">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={buddy.image}
                  alt={buddy.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-inter font-medium text-[16px] text-[#212626] text-left">
                    {buddy.name}
                  </p>
                  <p className="font-inter font-medium text-[12px] text-[#667877] text-left">
                    {buddy.handle}
                  </p>
                </div>
              </div>

              {/* Show Image Data Section */}
              <img
                src={imageStates[buddy.id] || communityafter}
                alt="Toggleable"
                onClick={() => handleImageClick(buddy.id)}
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          ))}
        </div>
        <button className="font-inter font-medium text-[#2DC6BE] text-[14px] px-4 py-2 hover:px-4 hover:py-2 rounded-md hover:bg-teal-600 hover:text-white">
          See All
        </button>
      </div>

      <div className="mt-2 flex-col text-center justify-center">
        <div className="flex text-center justify-center gap-5">
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            About
          </p>
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            Help
          </p>
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            Privacy
          </p>
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            Jobs
          </p>
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            Language
          </p>
        </div>
        <div className="mt-1">
          <p className="text-[#667877] text-[12px] cursor-pointer hover:text-teal-600 font-semibold font-inter">
            Copyright @2024 TravSo
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunityLeftSidebar;