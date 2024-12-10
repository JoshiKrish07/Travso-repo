import React from "react";
import Header from "./Header";
// import ProfilePageHeaderData from "./ProfilePageHeaderData";

const PostDataDetailPage = () => {
  const posts = [
    {
      username: "Pankaj Reet Tech",
      userTitle: "Solo Traveler",
      location: "Rameswaram",
      image: "https://via.placeholder.com/600x400",
      love: "72K",
      comments: "50K",
      bucketList: "2.3K",
      shared: "1K",
      date: "12 Oct 2024",
    },
    {
      username: "Alex Johnson",
      userTitle: "Explorer",
      location: "Paris",
      image: "https://via.placeholder.com/600x400",
      love: "50K",
      comments: "30K",
      bucketList: "2.3K",
      shared: "1K",
      date: "10 Oct 2024",
    },
    {
      username: "Sophia Garcia",
      userTitle: "Photographer",
      location: "New York",
      image: "https://via.placeholder.com/600x400",
      love: "120K",
      comments: "80K",
      bucketList: "2.3K",
      shared: "1K",
      date: "8 Oct 2024",
    },
    {
      username: "Rajesh Kumar",
      userTitle: "Food Blogger",
      location: "Delhi",
      image: "https://via.placeholder.com/600x400",
      love: "90K",
      comments: "60K",
      bucketList: "2.3K",
      shared: "1K",
      date: "5 Oct 2024",
    },
    {
      username: "Emily Brown",
      userTitle: "Hiker",
      location: "Swiss Alps",
      image: "https://via.placeholder.com/600x400",
      love: "85K",
      comments: "40K",
      bucketList: "2.3K",
      shared: "1K",
      date: "3 Oct 2024",
    },
    {
      username: "Chris Lee",
      userTitle: "Travel Enthusiast",
      location: "Seoul",
      image: "https://via.placeholder.com/600x400",
      love: "65K",
      comments: "35K",
      bucketList: "2.3K",
      shared: "1K",
      date: "1 Oct 2024",
    },
    {
      username: "Fatima Noor",
      userTitle: "Adventure Seeker",
      location: "Dubai",
      image: "https://via.placeholder.com/600x400",
      love: "78K",
      comments: "42K",
      bucketList: "2.3K",
      shared: "1K",
      date: "28 Sep 2024",
    },
    {
      username: "Michael Robinson",
      userTitle: "Cyclist",
      location: "Amsterdam",
      image: "https://via.placeholder.com/600x400",
      love: "55K",
      comments: "25K",
      bucketList: "2.3K",
      shared: "1K",
      date: "25 Sep 2024",
    },
  ];

  return (
    <>
      <Header />
      {/* <ProfilePageHeaderData /> */}
      <div className="min-h-screen bg-gray-50 p-4">
        <p className="font-poppins text-[#212626] font-semibold text-[28px] mb-5 text-left flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 27L13.5 18L22.5 9"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Posts (74)
        </p>
        <div className="container mx-auto flex gap-5">
          {/* Main Content */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="h-[588px] bg-white relative rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 mb-4"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="w-[44px] h-[44px] rounded-full"
                    />
                    <div className="ml-3">
                      <h4 className="font-poppins text-[20px] text-[#212626] font-semibold flex items-center">
                        {post.username}
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
                      <p className="text-left text-[14px] text-[#667877] font-inter font-medium">
                        {post.userTitle} • {post.location}
                      </p>
                    </div>
                  </div>

                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full rounded-[5px] h-[432px] object-cover"
                  />

                  {/* Post Stats */}
                  <div className="mt-4 text-sm flex justify-between items-center text-gray-600">
                    <div className="flex items-center gap-3 text-[12px] text-[#667877] font-inter font-medium">
                      <span>
                        {post.love} Love&nbsp; • &nbsp;{post.comments} Comments&nbsp; •{" "}
                        &nbsp;{post.bucketList} Bucket listed&nbsp; • &nbsp;{post.shared} Shared
                      </span>
                    </div>
                    <div className="text-right text-[12px] text-[#667877] font-inter font-medium">
                      {post.date}
                    </div>
                  </div>

                  {/* Footer */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDataDetailPage;