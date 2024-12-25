import React from "react";
import Header from "./Header";
import Travel from "../../assets/travel.png";
import Girl from "../../assets/headerIcon/girl.jpg";

const ExplorerPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between px-4 py-4 gap-[16px]">
        {/* Parent First Data */}
        <div className="w-full flex flex-col gap-[16px]">
          {/* Semi User Data multiple Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data multiple Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Video Data influencer from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data single Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Semi User Data single Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Video Data simple from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Parent First Data */}
        {/* Parent Second Data */}
        <div className="w-full flex flex-col gap-[16px]">
          {/* Video Data influencer from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data single Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Semi User Data multiple Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Video Data simple from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data multiple Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>

          {/* Semi User Data single Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* Parent Second Data */}
        {/* Parent Third Data */}
        <div className="w-full flex flex-col gap-[16px]">
          {/* Semi User Data multiple Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data multiple Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Video Data influencer from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data single Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Semi User Data single Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Video Data simple from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Parent Third Data */}
        {/* Parent Fourth Data */}
        <div className="w-full flex flex-col gap-[16px]">
          {/* Video Data influencer from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi Influencer Data multiple Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>

          {/* Semi Influencer Data single Image*/}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] bg-gradient-to-r from-[#2DC6BE] to-[#BAE53D] bg-clip-text text-transparent font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L14.2547 3.01208L15.7994 9.78017L11.4711 15.2078H4.52893L0.200577 9.78017L1.74535 3.01208L8 0Z"
                        fill="url(#paint0_linear_40000104_9038)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6853 5.53415C11.8643 5.71314 11.8643 6.00334 11.6853 6.18233L7.40753 10.4601C7.22854 10.6391 6.93834 10.6391 6.75935 10.4601L4.31491 8.01566C4.13592 7.83667 4.13592 7.54647 4.31491 7.36748C4.4939 7.18849 4.7841 7.18849 4.96309 7.36748L7.08344 9.48783L11.0371 5.53415C11.2161 5.35515 11.5063 5.35515 11.6853 5.53415Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_40000104_9038"
                          x1="2.98734"
                          y1="-7.36843"
                          x2="25.9372"
                          y2="-2.27837"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2DC6BE" />
                          <stop offset="1" stopColor="#BAE53D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Video Data simple from User */}
          <div className="h-[600px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[500px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M6.66699 6.65285C6.66699 5.35796 6.66699 4.71052 6.93698 4.35362C7.17218 4.0427 7.53169 3.8503 7.92086 3.82707C8.36757 3.8004 8.90628 4.15953 9.98369 4.8778L24.0044 14.225C24.8947 14.8185 25.3398 15.1152 25.4949 15.4892C25.6305 15.8163 25.6305 16.1838 25.4949 16.5108C25.3398 16.8848 24.8947 17.1815 24.0044 17.775L9.98368 27.1222C8.90628 27.8405 8.36757 28.1996 7.92086 28.1729C7.53169 28.1497 7.17218 27.9573 6.93698 27.6464C6.66699 27.2895 6.66699 26.6421 6.66699 25.3472V6.65285Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Semi User Data multiple Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  fill="white"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  fill="white"
                />
                <path
                  d="M2.66699 3.99984C2.66699 3.26346 3.26395 2.6665 4.00033 2.6665H12.0003C12.7367 2.6665 13.3337 3.26346 13.3337 3.99984V11.9998C13.3337 12.7362 12.7367 13.3332 12.0003 13.3332H4.00033C3.26395 13.3332 2.66699 12.7362 2.66699 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 3.99984C18.667 3.26346 19.2639 2.6665 20.0003 2.6665H28.0003C28.7367 2.6665 29.3337 3.26346 29.3337 3.99984V11.9998C29.3337 12.7362 28.7367 13.3332 28.0003 13.3332H20.0003C19.2639 13.3332 18.667 12.7362 18.667 11.9998V3.99984Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M18.667 19.9998C18.667 19.2635 19.2639 18.6665 20.0003 18.6665H28.0003C28.7367 18.6665 29.3337 19.2635 29.3337 19.9998V27.9998C29.3337 28.7362 28.7367 29.3332 28.0003 29.3332H20.0003C19.2639 29.3332 18.667 28.7362 18.667 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
                <path
                  d="M2.66699 19.9998C2.66699 19.2635 3.26395 18.6665 4.00033 18.6665H12.0003C12.7367 18.6665 13.3337 19.2635 13.3337 19.9998V27.9998C13.3337 28.7362 12.7367 29.3332 12.0003 29.3332H4.00033C3.26395 29.3332 2.66699 28.7362 2.66699 27.9998V19.9998Z"
                  stroke="white"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
          {/* Semi User Data single Image */}
          <div className="h-[400px] flex flex-col justify-between bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-5">
            <div className="flex items-center mb-4">
              <img
                src={Girl}
                alt="User Avatar"
                className="w-[36px] h-[36px] rounded-full"
              />
              <div className="ml-2">
                <h4 className="font-inter text-[14px] text-[#212626] font-medium flex items-center">
                  Pankaj Reet Tech
                  <span className="ml-1 text-blue-500 text-xs">
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
                        d="M11.6843 5.53463C11.8633 5.71362 11.8633 6.00382 11.6843 6.18281L7.40656 10.4606C7.22757 10.6396 6.93736 10.6396 6.75837 10.4606L4.31393 8.01615C4.13494 7.83716 4.13494 7.54696 4.31393 7.36797C4.49292 7.18898 4.78312 7.18898 4.96211 7.36797L7.08246 9.48832L11.0362 5.53463C11.2151 5.35564 11.5053 5.35564 11.6843 5.53463Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </h4>
                <p className="text-left text-[12px] text-[#667877] font-inter font-medium -mt-1">
                  Solo Traveler • Rameswaram
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={Travel}
                alt="Post"
                className="w-full rounded-[5px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* Parent Fourth Data */}
      </div>
    </>
  );
};

export default ExplorerPage;
