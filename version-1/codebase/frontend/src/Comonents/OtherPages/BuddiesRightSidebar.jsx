import React from "react";
import Boy1 from "../../assets/headerIcon/boy1.png";
import Girl from "../../assets/travel.png";
import Travel from "../../assets/travel.png";
import RectangleGlass from "../../assets/rectangle_glass.png";

const BuddiesRightSidebar = () => {
  const data = [
    { id: 1, src: Boy1, label: "Arjun Kumar" },
    { id: 2, src: Girl, label: "Priya Sharma" },
    { id: 3, src: Boy1, label: "Rohit Singh" },
    { id: 4, src: Girl, label: "Sneha Patel" },
    { id: 5, src: Boy1, label: "Vikram Das" },
    { id: 6, src: Boy1, label: "Amit Verma" },
    { id: 7, src: Girl, label: "Anjali Mehta" },
    { id: 8, src: Boy1, label: "Karan Thakur" },
  ];

  const users = [
    {
      id: 1,
      name: "Madhulika",
      username: "@Madhu.lika",
      image: Girl,
      isFollowing: false,
    },
    {
      id: 2,
      name: "Reet Sharma",
      username: "@Reet.sharma",
      image: Boy1,
      isFollowing: true,
    },
    {
      id: 3,
      name: "Anjali Roy",
      username: "@Anjali.roy",
      image: Girl,
      isFollowing: false,
    },
  ];

  return (
    <>
      <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.10)] p-5">
        <h2 className="mb-4 font-poppins text-[20px] font-semibold text-[#212626] text-left">
          Ads Platform
        </h2>
        <div className="relative">
          <img
            src={Travel}
            alt="{item.label}"
            className="w-full h-[178px] object-cover rounded-[18px]"
          />
          <div
            className="absolute right-2 bottom-2 gap-[4px] bg-[#000000B8] flex w-[108px] h-[36px] flex items-center justify-center bg-cover bg-center rounded-[8px]"
            style={{
              backgroundImage: `url(${RectangleGlass})`,
            }}
          >
            <p className="font-poppins font-semibold text-[16px] text-[#2DC6BE]">
              ₹9950
            </p>
            <p className="font-poppins font-semibold text-[12px] text-[#CCCCCC]">
              ₹<span className="line-through">15000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuddiesRightSidebar;
