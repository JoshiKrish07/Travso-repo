import React, { useState } from "react";
import Girl from "../../assets/headerIcon/girl.jpg";
import Travel from "../../assets/travel.png";
import Header from "./Header";
import BuddiesLeftSidebar from "./BuddiesLeftSidebar";
import BuddiesRightSidebar from "./BuddiesRightSidebar";
import BadgesIconFirst from "./../../assets/BadgesIconFirst.png";

const BuddiesRequestPage = () => {
  const [activeButton, setActiveButton] = useState("Received");

  const toggleSection = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-4 px-4 flex justify-center items-center">
        <div className="container mx-auto flex gap-3">
          {/*-------- Left Section -------*/}
          <div className="w-[340px] flex flex-col">
            <BuddiesLeftSidebar />
          </div>
          {/*-------- Left Section -------*/}
          {/*-------- Middle Section -------*/}
          <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 mb-4 w-[696px] flex-grow flex flex-col">
            <div className="flex items-center gap-[20px] mb-5">
              <button
                className={`w-[144px] h-[40px] font-poppins font-semibold text-[20px] flex items-center justify-center ${
                  activeButton === "Received"
                    ? "text-[#2DC6BE] border-b-4 border-b-[#2DC6BE] rounded-tl-[100px] rounded-tr-[100px]"
                    : "text-[#667877]"
                }`}
                onClick={() => toggleSection("Received")}
              >
                Received
              </button>
              <button
                className={`w-[144px] h-[40px] font-poppins font-semibold text-[20px] flex items-center justify-center ${
                  activeButton === "Sent"
                    ? "text-[#2DC6BE] border-b-4 border-b-[#2DC6BE] rounded-tl-[100px] rounded-tr-[100px]"
                    : "text-[#667877]"
                }`}
                onClick={() => toggleSection("Sent")}
              >
                Sent
              </button>
            </div>
            <div>
              {/*------------------------ Full Button Section -----------------------*/}
              {activeButton === "Received" && (
                <>
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-poppins font-semibold text-[24px] text-[#212626]">
                          Received requests (25)
                        </h4>
                        <p className="font-inter font-medium text-[16px] text-[#2DC6BE]">
                          See more
                        </p>
                      </div>
                      <div className="flex flex-col gap-[16px]">
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-poppins font-semibold text-[24px] text-[#212626]">
                          Suggested travelers
                        </h4>
                        <p className="font-inter font-medium text-[16px] text-[#2DC6BE]">
                          See more
                        </p>
                      </div>
                      <div className="flex flex-col gap-[16px] grid grid-cols-2">
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeButton === "Sent" && (
                <>
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-poppins font-semibold text-[24px] text-[#212626]">
                        Sent requests
                        </h4>
                        <p className="font-inter font-medium text-[16px] text-[#2DC6BE]">
                          See more
                        </p>
                      </div>
                      <div className="flex flex-col gap-[16px]">
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                              <img
                                src={Girl}
                                alt={Girl}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="flex flex-1 items-center justify-between">
                                {/* Left Content */}
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                      Madhulika Sharma
                                    </h3>
                                    <img
                                      src={BadgesIconFirst}
                                      alt="BadgesIconFirst"
                                      className=""
                                    />
                                  </div>

                                  {/* Time */}
                                  <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                    @Madhu.lika
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-black bg-[#F0F7F7] border-[#F0F7F7] placeholder:font-inter placeholder:font-medium placeholder:text-[#667877] placeholder:text-[14px]">
                                    Decline
                                  </button>
                                  <button className="w-[120px] h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-[368px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                              <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                Solo Traveler &nbsp;•&nbsp; 252 Trips
                                &nbsp;•&nbsp; 14K followers &nbsp;•&nbsp; 24
                                Buddies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-poppins font-semibold text-[24px] text-[#212626]">
                          Suggested travelers
                        </h4>
                        <p className="font-inter font-medium text-[16px] text-[#2DC6BE]">
                          See more
                        </p>
                      </div>
                      <div className="flex flex-col gap-[16px] grid grid-cols-2">
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4">
                          <div className="flex flex-col">
                            {/* Cover Photo section */}
                            <div className="relative rounded-[12px]">
                              <img
                                src={Travel}
                                alt="Cover"
                                className="w-full h-[80px] rounded-[12px] object-cover bg-[#D9D9D9]"
                              />
                              <img
                                src={Girl}
                                alt="Profile"
                                className="absolute top-[55px] left-[15px] w-[48px] h-[48px] object-cover border-4 border-[#FFFFFF] rounded-full"
                              />
                              {/* Buttons on hover */}
                            </div>
                            <div className="flex flex-col mt-6">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-1 items-center justify-between">
                                  {/* Left Content */}
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <h3 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                                        Madhulika Sharma
                                      </h3>
                                      <img
                                        src={BadgesIconFirst}
                                        alt="BadgesIconFirst"
                                        className=""
                                      />
                                    </div>

                                    {/* Time */}
                                    <p className="-mt-1 flex items-center gap-3 font-inter font-medium text-[16px] text-[16px] text-[#667877] text-left">
                                      @Madhu.lika
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="md:w-[174px] md:h-[32px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-2">
                                <p className="font-inter font-medium items-center text-center text-[12px] text-[#212626]">
                                  Solo Traveler &nbsp;•&nbsp; 252 Trips
                                </p>
                              </div>
                              <div className="flex flex-col mt-4 gap-[20px]">
                                <p className="font-poppins font-medium text-[14px] text-[#212626] text-justify text-left">
                                  Adipiscing sapien felis in semper porttitor
                                  massa senectus nunc. Non ac cursus nisl luctus
                                  diam dignissim. Cras tincidunt etiam morbi
                                  egestas.
                                </p>
                                <div className="flex items-center justify-between gap-[16px]">
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Add as Buddy
                                  </button>
                                  <button className="w-full h-[36px] flex items-center justify-center rounded-[4px] text-white bg-[#2DC6BE] border-[#FFFFFF] placeholder:font-inter placeholder:font-medium placeholder:text-white placeholder:text-[14px]">
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/*-------- Middle Section -------*/}
          {/*-------- Right Section -------*/}
          <div className="w-[340px] flex flex-col">
            <BuddiesRightSidebar />
          </div>
          {/*-------- Right Section -------*/}
        </div>
      </div>
    </>
  );
};

export default BuddiesRequestPage;
