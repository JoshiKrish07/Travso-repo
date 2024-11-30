import React, { useState } from "react";
import logo from "../../assets/headerIcon/logo.png";
import girl from "../../assets/headerIcon/girl.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Header.css";
import { Person, Settings, ExitToApp } from "@mui/icons-material";

const SuggestionHeader = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isProfile, setIsProfile] = useState(false);


  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 ">
        <div
          className={`w-full max-w-[99%] container mx-auto px-3 ${
            isSearchActive ? "" : "py-4"
          } flex items-center justify-between`}
        >
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TravSo Logo" className="h-8" />
          </div>

          {/* Mobile Menu Toggle (Visible on Mobile) */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Right Section (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            {/* Icons and Profile Section */}
            <div className="flex items-center">
              <div className="w-px h-6 bg-gray-300 mx-4"></div>
              <div
                className="relative"
                onMouseEnter={() => setIsProfile(true)}
                onMouseLeave={() => setIsProfile(false)}
              >
                <ProfileMenu />
                {isProfile && (
                  <div className="absolute -left-[10rem] right-0 top-full mt-[0.5px] max-w-80 bg-white shadow-lg rounded-b-lg overflow-hidden p-4 z-50">
                    {/* Profile, Settings, Logout */}
                    <div className="space-y-2">
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 p-2 rounded flex items-center ">
                        <Person className="mr-2 navitemDatas" />
                        Profile
                      </button>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 p-2 rounded flex items-center">
                        <Settings className="mr-2 navitemDatas" />
                        Settings
                      </button>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 p-2 rounded flex items-center">
                        <ExitToApp className="mr-2 navitemDatas" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Profile Menu Component
const ProfileMenu = () => {
  return (
    <div className="flex items-center">
      <img src={girl} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
      <span className="block font-medium text-gray-700 mr-5">Madhulika</span>
      <KeyboardArrowDownIcon className="h-4 w-4 text-gray-500" />
    </div>
  );
};

export default SuggestionHeader;
