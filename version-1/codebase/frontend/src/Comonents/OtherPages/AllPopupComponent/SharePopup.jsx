/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Boy1 from "../../../assets/headerIcon/boy1.png";
import Girl from "../../../assets/headerIcon/girl.jpg";
import SearchIcon from "@mui/icons-material/Search";
import "../Header.css";

const SharePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const data = [
    { id: 1, src: Boy1, label: "Arjun Kumar" },
    { id: 2, src: Girl, label: "Priya Sharma" },
    { id: 3, src: Boy1, label: "Rohit Singh" },
    { id: 4, src: Girl, label: "Sneha Patel" },
    { id: 5, src: Boy1, label: "Vikram Das" },
    { id: 6, src: Boy1, label: "Amit Verma" },
    { id: 7, src: Girl, label: "Anjali Mehta" },
    { id: 8, src: Boy1, label: "Karan Thakur" },
    { id: 9, src: Girl, label: "Simran Kaur" },
    { id: 10, src: Boy1, label: "Rahul Gupta" },
    { id: 11, src: Boy1, label: "Siddharth Rao" },
    { id: 12, src: Girl, label: "Nisha Agarwal" },
    { id: 13, src: Boy1, label: "Aakash Roy" },
    { id: 14, src: Girl, label: "Pooja Iyer" },
    { id: 15, src: Boy1, label: "Deepak Mishra" },
    { id: 16, src: Boy1, label: "Rahul Gupta" },
    { id: 17, src: Boy1, label: "Siddharth Rao" },
    { id: 18, src: Girl, label: "Nisha Agarwal" },
    { id: 19, src: Boy1, label: "Aakash Roy" },
    { id: 20, src: Girl, label: "Pooja Iyer" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.15)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] shadow-lg w-[696px] px-5 py-5 md:w-[696px] h-[660px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10 md:h-[55px]">
          <h4 className="text-[#303037] font-poppins font-semibold text-[24px]">
            Share with your friends
          </h4>
          <button
            className="text-black hover:text-[#2DC6BE] font-bold text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>

        <div className="flex flex-col h-full  flex-1 overflow-y-auto scrollbar-hidden">
          <div className="block relative w-full py-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[48px] pl-12 pr-4 py-2 rounded-full bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#FFFFFF] outline-none placeholder:text-sm"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-[96px] h-[96px] rounded-full border-2 border-gray-300 object-cover"
                />
                <p className="font-inter font-medium text-[14px] mt-2 text-[#212626]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5  mt-5">
          <input
            type="text"
            placeholder="Add your thoughts..."
            className="w-full h-[48px] pl-5 pr-4 py-2 rounded-[8px] bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#FFFFFF] outline-none placeholder:text-[16px] placeholder:font-inter placeholder:font-medium"
          />

          <div className="flex items-center justify-between gap-10">
            <button className="rounded-[8px] border border-[#F0F7F7] bg-[#F0F7F7] p-[12px] w-full font-inter font-medium text-[16px] text-[#2DC6BE] hover:bg-teal-400 hover:text-white">
              Copy link
            </button>
            <button className="rounded-[8px] border border-[#F0F7F7] bg-[#F0F7F7] p-[12px] w-full font-inter font-medium text-[16px] text-[#2DC6BE] hover:bg-teal-400 hover:text-white">
            Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
