import React, { useState } from "react";
import Girl from "../../../assets/headerIcon/girl.jpg";
import Travel from "../../../assets/travel.png";
import BadgesIconFirst from "../../../assets/BadgesIconFirst.png";

const ArchiveSetting = () => {
  const [activeButton, setActiveButton] = useState("Posts");
  const [postUnarchieve, setPostUnarchieve] = useState(false);

  const handleSureUnacrhivePost = () => {
    setPostUnarchieve(true);
  };

  const toggleSection = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  const travelArchivePOstData = [
    {
      id: 1,
      imageSrc: Travel,
      travelerLove: "72K Love",
      tripsComment: "50K comments",
      BucketList: "2.3K Bucket listed",
      Shared: "1K Shared",
      date: "12 Oct 2024",
    },
    {
      id: 2,
      imageSrc: Travel,
      travelerLove: "72K Love",
      tripsComment: "50K comments",
      BucketList: "2.3K Bucket listed",
      Shared: "1K Shared",
      date: "20 Dec 2024",
    },
    {
      id: 3,
      imageSrc: Travel,
      travelerLove: "72K Love",
      tripsComment: "50K comments",
      BucketList: "2.3K Bucket listed",
      Shared: "1K Shared",
      date: "20 Dec 2024",
    },
    {
      id: 4,
      imageSrc: Travel,
      travelerLove: "72K Love",
      tripsComment: "50K comments",
      BucketList: "2.3K Bucket listed",
      Shared: "1K Shared",
      date: "20 Dec 2024",
    },
  ];

  const travelArchiveStoriesData = [
    {
      id: 1,
      imageSrc: Travel,
      date: "20 May 2024",
    },
    {
      id: 2,
      imageSrc: Travel,
      date: "21 May 2024",
    },
    {
      id: 3,
      imageSrc: Travel,
      date: "22 May 2024",
    },
    {
      id: 4,
      imageSrc: Travel,
      date: "23 May 2024",
    },
    {
      id: 5,
      imageSrc: Travel,
      date: "24 May 2024",
    },
    {
      id: 6,
      imageSrc: Travel,
      date: "25 May 2024",
    },
    {
      id: 7,
      imageSrc: Travel,
      date: "26 May 2024",
    },
    {
      id: 8,
      imageSrc: Travel,
      date: "27 May 2024",
    },
    {
      id: 9,
      imageSrc: Travel,
      date: "28 May 2024",
    },
    {
      id: 10,
      imageSrc: Travel,
      date: "29 May 2024",
    },
    {
      id: 11,
      imageSrc: Travel,
      date: "30 May 2024",
    },
    {
      id: 12,
      imageSrc: Travel,
      date: "31 May 2024",
    },
  ];

  return (
    <div className="bg-white rounded-[16px] px-4 mb-4">
      <div className="flex items-center gap-[20px] mb-5 w-[296px] border-b border-b-gray">
        <button
          className={`w-[144px] h-[40px] font-poppins font-semibold text-[20px] flex items-center justify-center ${
            activeButton === "Posts"
              ? "text-[#2DC6BE] border-b-4 border-b-[#2DC6BE] rounded-tl-[100px] rounded-tr-[100px]"
              : "text-[#667877]"
          }`}
          onClick={() => toggleSection("Posts")}
        >
          Posts
        </button>
        <button
          className={`w-[144px] h-[40px] font-poppins font-semibold text-[20px] flex items-center justify-center ${
            activeButton === "Stories"
              ? "text-[#2DC6BE] border-b-4 border-b-[#2DC6BE] rounded-tl-[100px] rounded-tr-[100px]"
              : "text-[#667877]"
          }`}
          onClick={() => toggleSection("Stories")}
        >
          Stories
        </button>
      </div>
      {/*------------------------ Full Button Section -----------------------*/}
      {activeButton === "Posts" && (
        <>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[20px] grid grid-cols-2">
                {travelArchivePOstData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4"
                  >
                    <div className="flex flex-col">
                      {/* Cover Photo section */}
                      <div className="rounded-[12px]">
                        <img
                          src={item.imageSrc}
                          alt="Cover"
                          className="w-full h-[420px] rounded-[12px] object-cover bg-[#D9D9D9]"
                        />
                      </div>
                      <div className="flex flex-col mt-6">
                        <div className="flex items-center gap-4">
                          <div className="flex flex-1 items-center justify-between w-full">
                            {/* Left Content */}
                            <div className="flex flex-col w-full">
                              <div className="flex items-center justify-between w-full">
                                <h3 className="font-inter font-medium text-[15px] text-[#667877]">
                                  {item.travelerLove} &nbsp;•&nbsp;{" "}
                                  {item.tripsComment} &nbsp;•&nbsp;{" "}
                                  {item.BucketList} &nbsp;•&nbsp; {item.Shared}
                                </h3>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={handleSureUnacrhivePost}
                                >
                                  <path
                                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                    stroke="#212626"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                    stroke="#212626"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                    stroke="#212626"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                {/* postUnarchieve Menu */}
                                {postUnarchieve && (
                                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.3] flex items-center justify-center z-50">
                                    <div className="bg-white border border-[#ddd] rounded-md rounded-[16px] px-[24px] py-[20px] shadow-md w-[360px]">
                                      <div className="flex items-center justify-between">
                                        <h6 className="font-poppins font-semibold text-[18px] text-[#212626]">
                                          Unarchive Post
                                        </h6>

                                        {/* Close Button (X) */}
                                        <button
                                          className="hover:text-[#2DC6BE] font-poppins font-semibold text-[16px] text-[#212626]"
                                          onClick={() =>
                                            setPostUnarchieve(false)
                                          }
                                          aria-label="Close"
                                        >
                                          &#x2715;
                                        </button>
                                      </div>
                                      <div className="flex flex-col gap-[16px] mt-5">
                                        <h5 className="font-poppins font-semibold text-[18px] flex items-center justify-center text-[#212626]">
                                          Are you sure you want to unarchive
                                          this post?
                                        </h5>
                                        <div className="flex items-center justify-between w-full gap-[16px]">
                                          <button className="bg-[#F0F7F7] h-[48px] flex items-center justify-center rounded-[7px] font-intern font-medium text-[16px] text-[#667877] w-full">
                                            Discard
                                          </button>
                                          <button className="bg-[#2DC6BE] h-[48px] flex items-center justify-center rounded-[7px] font-intern font-medium text-[16px] text-white w-full">
                                            Yes, unarchive
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* Time */}
                              <p className="mt-1 flex items-center gap-3 font-inter font-medium text-[12px] text-[#667877] text-left">
                                {item.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {activeButton === "Stories" && (
        <>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[16px] grid grid-cols-4">
                {travelArchiveStoriesData.map((item) => (
                  <div key={item.id} className="">
                    <div className="flex flex-col">
                      {/* Cover Photo section */}
                      <div className="relative rounded-[12px]">
                        <img
                          src={item.imageSrc}
                          alt="Cover"
                          className="w-full h-[230px] rounded-[8px] object-cover bg-[#D9D9D9]"
                        />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] px-[8px] py-[4px] z-10 w-[116px] h-[32px] flex items-center justify-center">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArchiveSetting;
