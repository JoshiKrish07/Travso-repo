/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/headerIcon/logo.png";
import Message from "../../assets/headerIcon/Message.png";
import girl from "../../assets/headerIcon/girl.jpg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import ProfilePage from "./ProfilePage";
import { Person, Settings, ExitToApp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getUserBuddies,
  getUserDetails,
  logoutUser,
  resetAuthState,
} from "../../redux/slices/authSlice";
import { getAllTags } from "../../redux/slices/tagSlices";
import { getAllPosts } from "../../redux/slices/postSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dummyUserImage from "../../assets/user_image-removebg-preview.png";
import { addToRecentSearch } from "../../redux/slices/searchSlice";


const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchBarRef = useRef(null);
  const [seacrhResult, setSearchResult] = useState([]);
  const [searchAction, setSearchAction] = useState(null);
  const [searchedKeyword, setSearchedKeyword] = useState(null);
  const [activeFilter, setActiveFilter] = useState("");
  const [activeTab, setActiveTab] = useState("Home");
  const [suggestionShow, setSuggestionShow] = useState([{ id: 1,name: "Reet sharma", img: girl },
    {
      id: 2,
      name: "Madhulika",
      username: "@Madhu.lika",
      followers: "12k Followers",
      img: girl,
    },
    {
      id: 3,
      name: "Pankaj",
      username: "@Reet.Pankaj",
      followers: "12k Followers",
      img: girl,
    },
    {
      id: 4,
      name: "Rishab",
      username: "@frontend",
      followers: "12k Followers",
      img: girl,
    }]);

    useEffect(() => {
      const path = location.pathname;
    
      // Define the mapping of paths to active tab names
      const tabMapping = {
        "/explorer": "Explorer",
        "/buddiesRequest": "Buddies",
        "/Message": "Message",
        "/isNotificationsOpen": "isNotificationsOpen",
      };
    
      // Set active tab based on the current path or default to "Home"
      setActiveTab(tabMapping[path] || "Home");
   },[location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsSearchActive(false); // Close dropdown if clicked outside
        setSearchAction(false);
        setActiveFilter("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  const {
    user: userDetails,
    userBuddies,
    allUsers,
  } = useSelector((state) => state.auth);
  const { allTags } = useSelector((state) => state.tagSlice);
  const { allPosts } = useSelector((state) => state.postSlice);

  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDetails());
    }

    if (!userBuddies) {
      dispatch(getUserBuddies());
    }

    if (!allTags) {
      dispatch(getAllTags());
    }

    if (!allUsers) {
      dispatch(getAllUsers());
    }

    if(!allPosts) {
      dispatch(getAllPosts());
    }
  }, [dispatch]);

  const recentUsers = [
    { name: "Madhulika Gupta", img: girl },
    { name: "Pankaj Sharma", img: girl },
    { name: "Shaukin Jehn", img: girl },
    { name: "Reet Loyer", img: girl },
  ];

  const searchSuggestions = [
    { id: 1,name: "Reet sharma", img: girl },
    {
      id: 2,
      name: "Madhulika",
      username: "@Madhu.lika",
      followers: "12k Followers",
      img: girl,
    },
    {
      id: 3,
      name: "Pankaj",
      username: "@Reet.Pankaj",
      followers: "12k Followers",
      img: girl,
    },
    {
      id: 4,
      name: "Rishab",
      username: "@frontend",
      followers: "12k Followers",
      img: girl,
    },
  ];

  const seacrhAccordingTo = async (option) => {
    // console.log("=====option=====>", option);

    if (option === "Buddies") {
      let searchBuddies;
      if (searchedKeyword) {
        searchBuddies = userBuddies?.filter(
          (item) =>
            item?.user_name
              ?.toLowerCase()
              .includes(searchedKeyword?.toLowerCase()) ||
            item?.full_name
              ?.toLowerCase()
              .includes(searchedKeyword?.toLowerCase())
        );
      } else {
        searchBuddies = userBuddies;
      }
      setSearchResult(searchBuddies);
      setSearchAction("Buddies");
      setActiveFilter("Buddies");
    }

    if (option === "Hashtags") {
      let seacrhTags;
      if (searchedKeyword) {
        seacrhTags = allTags?.filter((item) =>
          item?.name?.toLowerCase().includes(searchedKeyword?.toLowerCase())
        );
      } else {
        seacrhTags = allTags;
      }
      setSearchResult(seacrhTags);
      setSearchAction("Hashtags");
      setActiveFilter("Hashtags");
    }

    if (option === "Place") {
      setSearchAction("Place");
      setActiveFilter("Place");
    }

    if (option === "Post") {
      let searchPosts;
      if (searchedKeyword) {
        searchPosts = allPosts?.filter((item) =>
          item?.description?.toLowerCase().includes(searchedKeyword?.toLowerCase())
        );
      } else {
        searchPosts = allPosts;
      }
      setSearchResult(searchPosts);
      setSearchAction("Post");
      setActiveFilter("Post");
    }

    if (option === "Badges") {
      setSearchAction("Badges");
      setActiveFilter("Badges");
    }

    // setIsSearchActive(false)
  };

  // remove from search list
  const removeFromSeacrh = async (removeId) => {
    setSearchResult((prevResults) =>
      prevResults.filter((item) => item.id !== removeId)
    );
  };

  // search data according to search text field
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchedKeyword(value);
    console.log("value", value);

    if (!searchAction) {
      // console.log("===allUsers===", allUsers);
      const showSearchUser = allUsers?.filter(
        (item) =>
          item?.user_name
            ?.toLowerCase()
            .includes(value?.toLowerCase()) ||
          item?.full_name
            ?.toLowerCase()
            .includes(value?.toLowerCase())
      )
      setSearchResult(showSearchUser);
    } 
    else if (searchAction === "Buddies" && value !== "") {
      const searchBuddies = userBuddies?.filter(
        (item) =>
          item?.user_name
            ?.toLowerCase()
            .includes(value?.toLowerCase()) ||
          item?.full_name
            ?.toLowerCase()
            .includes(value?.toLowerCase())
      );
      setSearchResult(searchBuddies);
    } 
    else if (searchAction === "Hashtags" && value !== "") {
      const searchHashTags = allTags?.filter((item) =>
        item?.name?.toLowerCase().includes(value?.toLowerCase())
      );
      setSearchResult(searchHashTags);
    } 
    else if (searchAction === "Post" && value !== "") {
      const searchPosts = allPosts?.filter((item) =>
        item?.description?.toLowerCase().includes(value?.toLowerCase())
      );
      setSearchResult(searchPosts);
    } 
    else if (value === "") {
      setSearchResult([]);
      setSearchedKeyword(null);
      setSearchAction(null);
      setActiveFilter("");
    }
  };

  const sendToSearch = async(searchedId) => {
    try {
       const addRecentSearch = await dispatch(addToRecentSearch(searchedId)).unwrap();
      //  console.log("=======addRecentSearch=====>", addRecentSearch);
    } catch (error) {
      console.log("error on add recent search", error);
    }
  }

  const logOut = async() => {
    try {
      const logOutResult = await dispatch(logoutUser()).unwrap();
      if(logOutResult) {
        // console.log("==logOutResult====>", logOutResult);
        await dispatch(resetAuthState());
        navigate('/login');
      }
    } catch (error) {
      console.log("error in logout", error);
    }
  }


  const removeFromSearchSuggestion = async(removeId) => {
    try {
      console.log("===removeId====", removeId);
      setSuggestionShow((prevResults) =>
        prevResults.filter((item) => item.id !== removeId)
      );
    } catch (error) {
      console.log("error in logout", error);
    }
  }

  const handleExplorer = () => {
    setActiveTab("Explorer");
    navigate("/explorer");
  };

  const handleHome = () =>{
    setActiveTab("Home");
    navigate("/community"); 
  }

  const handleBuddiesRequest = () =>{
    setActiveTab("Buddies");
    navigate("/buddies-request");
  }

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 ">
        <div
          className={`w-full max-w-[99%] h-[80px] container mx-auto px-3 ${
            isSearchActive ? "" : "py-4"
          } flex items-center justify-between`}
        >
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TravSo Logo" className="h-10" />
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
            {/* Search Bar */}
            <div
              className={`block relative max-w-96 w-full ${
                isSearchActive ? "shadow-lg py-5 px-2" : "px-2"
              }`}
              ref={searchBarRef}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[#FFFFFF] outline-none placeholder:text-sm"
                onClick={() => setIsSearchActive(true)}
                onChange={(e) => handleSearchChange(e)}
                // onBlur={() => setIsSearchActive(false)}
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>

              {/* Dropdown */}
              {isSearchActive && (
                <div className="absolute left-0 top-full mt-[0.5px] w-full bg-white shadow-lg rounded-b-lg overflow-hidden p-4 z-50">
                  {/* Filters */}
                  <div className="flex items-center gap-2 mb-3">
                    {["Place", "Buddies", "Post", "Hashtags", "Badges"].map(
                      (filter, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeFilter === filter
                              ? "bg-blue-500 text-white" // Active styles
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Default styles
                          }`}
                          // className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                          onClick={() => seacrhAccordingTo(filter)}
                        >
                          {filter}
                        </button>
                      )
                    )}
                  </div>

                  <div className="flex-1 h-[400px] overflow-auto scrollbar-hidden">

                  {!searchAction && searchedKeyword && (
                    <>
                      {seacrhResult.map((suggestion, index) => (
                        <li
                          key={suggestion.id}
                          className="flex items-center justify-between py-2"
                          
                        >
                          <div className="flex items-center gap-3 cursor-pointer" onClick={() => sendToSearch(suggestion.id)}>
                            <img
                              src={suggestion.profile_image || dummyUserImage}
                              alt={suggestion.user_name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                {suggestion.full_name}
                              </p>
                              <div className="flex justify-between text-left gap-5">
                                <p className="text-sm text-gray-500">
                                  {suggestion.user_name || 'Test'}
                                </p>
                                <p className="text-sm text-gray-400">
                                  {suggestion.total_followers}
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="text-[#000000] font-medium"
                            onClick={() => removeFromSeacrh(suggestion.id)}
                          >
                            X
                          </button>
                        </li>
                      ))}
                    </>
                  )}


                  {searchAction === "Buddies" && (
                    <>
                      { seacrhResult ? seacrhResult.map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={suggestion.profile_image || dummyUserImage}
                              alt={suggestion.user_name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                {suggestion.full_name}
                              </p>
                              <div className="flex justify-between text-left gap-5">
                                <p className="text-sm text-gray-500">
                                  {suggestion.user_name}
                                </p>
                                {/* <p className="text-sm text-gray-400">
                                  {suggestion.followers}
                                </p> */}
                              </div>
                            </div>
                          </div>
                          <button
                            className="text-[#000000] font-medium"
                            onClick={() => removeFromSeacrh(suggestion.id)}
                          >
                            X
                          </button>
                        </li>
                      ))
                    : 
                    (
                      <>
                       <p>No Data</p>
                      </>
                    )
                    }
                    </>
                  )}
                  

                  {searchAction === "Hashtags" && (
                    <>
                      { seacrhResult ? seacrhResult.map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                {suggestion.name}
                              </p>
                              <div className="flex justify-between text-left gap-5"></div>
                            </div>
                          </div>
                          <button
                            className="text-[#000000] font-medium"
                            onClick={() => removeFromSeacrh(suggestion.id)}
                          >
                            X
                          </button>
                        </li>
                      ))
                     : (
                      <>
                      <p>No Data</p>
                      </>
                     )
                    }
                    </>
                  )}

                  {searchAction === "Post" && (
                    <>
                      { seacrhResult ? seacrhResult.map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                {suggestion.description}
                              </p>
                              <div className="flex justify-between text-left gap-5"></div>
                            </div>
                          </div>
                          <button
                            className="text-[#000000] font-medium"
                            onClick={() => removeFromSeacrh(suggestion.id)}
                          >
                            X
                          </button>
                        </li>
                      ))
                     :
                     (
                      <>
                       <p>No Data</p>
                      </>
                     )
                    }
                    </>
                  )}
                 
                    {!searchAction && !searchedKeyword && (
                      <>
                        {/* Recent Views */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-5">
                            <h3 className="text-sm font-medium text-lg text-[#48555B]">
                              Recent View
                            </h3>
                            <button className="text-[#48555B] text-xs font-medium">
                              See all
                            </button>
                          </div>
                          <div className="flex items-center gap-3 overflow-x-auto">
                            {recentUsers.map((user, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center text-center"
                              >
                                <div className="rounded-full border-2 border-[#2DC6BE] shadow-lg ">
                                  <img
                                    src={user.img}
                                    alt={user.name}
                                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                                  />
                                </div>
                                <span className="text-sm mt-1 text-[#415365]">
                                  {user.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Search Suggestions */}
                        <div>
                          <h3 className="text-sm font-medium mb-2 text-left text-[#48555B]">
                            Try Searching
                          </h3>
                          <ul>
                            {suggestionShow?.map((suggestion, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex items-center gap-3">
                                  <img
                                    src={suggestion.img}
                                    alt={suggestion.name}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <p className="font-medium text-left text-[#415365]">
                                      {suggestion.name}
                                    </p>
                                    <div className="flex justify-between text-left gap-5">
                                      <p className="text-sm text-gray-500">
                                        {suggestion.username}
                                      </p>
                                      <p className="text-sm text-gray-400">
                                        {suggestion.followers}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  className="text-[#000000] font-medium"
                                  onClick={() => removeFromSearchSuggestion(suggestion.id)}
                                >
                                  X
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

</div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center justify-center text-gray-500 gap-6 max-w-[450px] w-full">
              <div
                className={`flex font-inter font-medium text-[16px] items-center gap-2 cursor-pointer ${
                  activeTab === "Home" ? "text-[#2DC6BE]" : "text-[#869E9D]"
                }`}
                onClick={handleHome}
              >
                {activeTab !== "Home" && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40000104_8945)">
                      <path
                        d="M16.8622 7.86543C16.6292 7.64957 16.3208 7.5293 16.0001 7.5293C15.6795 7.5293 15.371 7.64957 15.138 7.86543L9.05925 13.495C8.87313 13.6676 8.72492 13.8756 8.62372 14.1063C8.52252 14.337 8.47045 14.5855 8.4707 14.8366V21.686C8.47104 22.175 8.6695 22.6438 9.02248 22.9895C9.37545 23.3351 9.85404 23.5293 10.3531 23.5293H12.2354C12.7346 23.5293 13.2134 23.335 13.5664 22.989C13.9194 22.6431 14.1178 22.174 14.1178 21.6848V18.6105C14.1178 18.4474 14.1839 18.2911 14.3015 18.1757C14.4192 18.0604 14.5788 17.9957 14.7452 17.9957H17.255C17.4214 17.9957 17.581 18.0604 17.6987 18.1757C17.8164 18.2911 17.8825 18.4474 17.8825 18.6105V21.6848C17.8825 22.174 18.0808 22.6431 18.4338 22.989C18.7868 23.335 19.2656 23.5293 19.7648 23.5293H21.6472C22.1464 23.5293 22.6252 23.335 22.9782 22.989C23.3312 22.6431 23.5295 22.174 23.5295 21.6848V14.8353C23.5294 14.5844 23.4771 14.336 23.3757 14.1056C23.2743 13.8751 23.1259 13.6673 22.9397 13.495L16.8622 7.86297V7.86543Z"
                        fill="#869E9D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000104_8945">
                        <rect
                          width="15.0588"
                          height="16"
                          fill="white"
                          transform="translate(8.4707 7.5293)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                {activeTab === "Home" && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.5294"
                      fill="#1DB2AA"
                      stroke="#1DB2AA"
                      strokeWidth="0.941176"
                    />
                    <g clipPath="url(#clip0_331_112769)">
                      <path
                        d="M16.862 7.86543C16.629 7.64957 16.3205 7.5293 15.9999 7.5293C15.6792 7.5293 15.3708 7.64957 15.1378 7.86543L9.05901 13.495C8.87288 13.6676 8.72468 13.8756 8.62348 14.1063C8.52228 14.337 8.47021 14.5855 8.47046 14.8366V21.686C8.47079 22.175 8.66926 22.6438 9.02223 22.9895C9.37521 23.3351 9.8538 23.5293 10.3528 23.5293H12.2352C12.7344 23.5293 13.2132 23.335 13.5662 22.989C13.9192 22.6431 14.1175 22.174 14.1175 21.6848V18.6105C14.1175 18.4474 14.1836 18.2911 14.3013 18.1757C14.419 18.0604 14.5786 17.9957 14.745 17.9957H17.2548C17.4212 17.9957 17.5808 18.0604 17.6984 18.1757C17.8161 18.2911 17.8822 18.4474 17.8822 18.6105V21.6848C17.8822 22.174 18.0805 22.6431 18.4336 22.989C18.7866 23.335 19.2653 23.5293 19.7646 23.5293H21.6469C22.1462 23.5293 22.6249 23.335 22.978 22.989C23.331 22.6431 23.5293 22.174 23.5293 21.6848V14.8353C23.5292 14.5844 23.4769 14.336 23.3754 14.1056C23.274 13.8751 23.1257 13.6673 22.9395 13.495L16.862 7.86297V7.86543Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_331_112769">
                        <rect
                          width="15.0588"
                          height="16"
                          fill="white"
                          transform="translate(8.47046 7.5293)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                <span>Home</span>
              </div>
              <div
                className={`flex font-inter font-medium text-[16px] items-center gap-2 cursor-pointer ${
                  activeTab === "Explorer" ? "text-[#2DC6BE]" : "text-[#869E9D]"
                }`}
                onClick={handleExplorer}
              >
                {activeTab !== "Explorer" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40000305_425)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 8C12.5816 8 9 11.8055 9 16.5C9 21.1946 12.5816 25 17 25C21.4184 25 25 21.1946 25 16.5C25 11.8055 21.4184 8 17 8ZM21.1528 13.1629C21.1998 13.0131 21.2066 12.8524 21.1725 12.6988C21.1384 12.5451 21.0646 12.4046 20.9596 12.293C20.8545 12.1813 20.7223 12.103 20.5776 12.0667C20.433 12.0305 20.2818 12.0377 20.1408 12.0877L15.0496 13.8905C14.9319 13.9322 14.8249 14.0025 14.7372 14.0957C14.6494 14.189 14.5833 14.3026 14.544 14.4277L12.8472 19.8371C12.8002 19.9869 12.7934 20.1476 12.8275 20.3012C12.8616 20.4549 12.9354 20.5954 13.0404 20.707C13.1455 20.8187 13.2777 20.897 13.4224 20.9333C13.567 20.9695 13.7182 20.9623 13.8592 20.9124L18.9504 19.1095C19.0682 19.0677 19.1752 18.9973 19.263 18.9039C19.3507 18.8105 19.4168 18.6967 19.456 18.5715L21.1528 13.1629ZM17 17.35C17.2122 17.35 17.4157 17.2604 17.5657 17.101C17.7157 16.9416 17.8 16.7254 17.8 16.5C17.8 16.2746 17.7157 16.0584 17.5657 15.899C17.4157 15.7396 17.2122 15.65 17 15.65C16.7878 15.65 16.5843 15.7396 16.4343 15.899C16.2843 16.0584 16.2 16.2746 16.2 16.5C16.2 16.7254 16.2843 16.9416 16.4343 17.101C16.5843 17.2604 16.7878 17.35 17 17.35Z"
                        fill="#AFBAC0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000305_425">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                {activeTab === "Explorer" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#2DC6BE" />
                    <g clipPath="url(#clip0_40000104_8950)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 8C12.5816 8 9 11.8055 9 16.5C9 21.1946 12.5816 25 17 25C21.4184 25 25 21.1946 25 16.5C25 11.8055 21.4184 8 17 8ZM21.1528 13.1629C21.1998 13.0131 21.2066 12.8524 21.1725 12.6988C21.1384 12.5451 21.0646 12.4046 20.9596 12.293C20.8545 12.1813 20.7223 12.103 20.5776 12.0667C20.433 12.0305 20.2818 12.0377 20.1408 12.0877L15.0496 13.8905C14.9319 13.9322 14.8249 14.0025 14.7372 14.0957C14.6494 14.189 14.5833 14.3026 14.544 14.4277L12.8472 19.8371C12.8002 19.9869 12.7934 20.1476 12.8275 20.3012C12.8616 20.4549 12.9354 20.5954 13.0404 20.707C13.1455 20.8187 13.2777 20.897 13.4224 20.9333C13.567 20.9695 13.7182 20.9623 13.8592 20.9124L18.9504 19.1095C19.0682 19.0677 19.1752 18.9973 19.263 18.9039C19.3507 18.8105 19.4168 18.6967 19.456 18.5715L21.1528 13.1629ZM17 17.35C17.2122 17.35 17.4157 17.2604 17.5657 17.101C17.7157 16.9416 17.8 16.7254 17.8 16.5C17.8 16.2746 17.7157 16.0584 17.5657 15.899C17.4157 15.7396 17.2122 15.65 17 15.65C16.7878 15.65 16.5843 15.7396 16.4343 15.899C16.2843 16.0584 16.2 16.2746 16.2 16.5C16.2 16.7254 16.2843 16.9416 16.4343 17.101C16.5843 17.2604 16.7878 17.35 17 17.35Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000104_8950">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
                <span>Explorer</span>
              </div>
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  activeTab === "Buddies" ? "text-[#2DC6BE]" : "text-[#869E9D]"
                }`}
                onClick={handleBuddiesRequest}
              >
                {activeTab !== "Buddies" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_40000104_8950)">
                      <path
                        d="M17 16.5C19.525 16.5 21.5714 14.5975 21.5714 12.25C21.5714 9.90254 19.525 8 17 8C14.475 8 12.4286 9.90254 12.4286 12.25C12.4286 14.5975 14.475 16.5 17 16.5ZM20.2 17.5625H19.6036C18.8107 17.9012 17.9286 18.0938 17 18.0938C16.0714 18.0938 15.1929 17.9012 14.3964 17.5625H13.8C11.15 17.5625 9 19.5613 9 22.025V23.4062C9 24.2861 9.76786 25 10.7143 25H23.2857C24.2321 25 25 24.2861 25 23.4062V22.025C25 19.5613 22.85 17.5625 20.2 17.5625Z"
                        fill="#869E9D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000305_3352">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                {activeTab === "Buddies" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#2DC6BE" />
                    <g clipPath="url(#clip0_40000104_8950)">
                      <path
                        d="M17 16.5C19.525 16.5 21.5714 14.5975 21.5714 12.25C21.5714 9.90254 19.525 8 17 8C14.475 8 12.4286 9.90254 12.4286 12.25C12.4286 14.5975 14.475 16.5 17 16.5ZM20.2 17.5625H19.6036C18.8107 17.9012 17.9286 18.0938 17 18.0938C16.0714 18.0938 15.1929 17.9012 14.3964 17.5625H13.8C11.15 17.5625 9 19.5613 9 22.025V23.4062C9 24.2861 9.76786 25 10.7143 25H23.2857C24.2321 25 25 24.2861 25 23.4062V22.025C25 19.5613 22.85 17.5625 20.2 17.5625Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000305_3352">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
                <span>Buddies Request</span>
              </div>
          </nav>

            
            {/* Icons and Profile Section */}
            <div className="flex items-center">
              <button
                className={`rounded-full flex items-center justify-center mx-2 ${
                  activeTab === "Message" ? "text-[#2DC6BE]" : "text-[#869E9D]"
                }`}
                onClick={() => setActiveTab("Message")}
              >
                {activeTab !== "Message" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="1" width="32" height="32" rx="16" fill="#F0F7F7" />
                    <g clipPath="url(#clip0_408_32061)">
                      <path
                        d="M22.6099 10.5009C21.3035 9.10178 19.5793 8.23146 17.7346 8.04002C15.8898 7.84858 14.0401 8.34801 12.5043 9.45221C10.9685 10.5564 9.8429 12.1962 9.3215 14.0888C8.80011 15.9815 8.91562 18.0084 9.64812 19.8202C9.72447 19.9886 9.74952 20.1781 9.71978 20.3624L9.01914 23.946C8.99215 24.0834 8.99766 24.2258 9.03518 24.3604C9.07271 24.495 9.14106 24.6175 9.23411 24.717C9.31039 24.7976 9.40121 24.8609 9.5011 24.9031C9.60098 24.9453 9.70787 24.9656 9.81532 24.9627H9.97456L13.3822 24.2341C13.5554 24.2119 13.731 24.2382 13.8917 24.3103C15.5944 25.0898 17.4992 25.2127 19.2779 24.6579C21.0565 24.1031 22.5976 22.9053 23.6353 21.2711C24.673 19.6369 25.1423 17.6686 24.9624 15.7056C24.7825 13.7426 23.9646 11.908 22.6497 10.5179L22.6099 10.5009ZM13.7962 17.3379C13.6387 17.3379 13.4848 17.2882 13.3539 17.1951C13.2229 17.102 13.1209 16.9697 13.0606 16.8149C13.0004 16.6601 12.9846 16.4897 13.0153 16.3254C13.046 16.161 13.1219 16.0101 13.2332 15.8916C13.3446 15.7731 13.4864 15.6924 13.6409 15.6597C13.7953 15.627 13.9554 15.6438 14.1009 15.7079C14.2464 15.7721 14.3707 15.8807 14.4582 16.02C14.5457 16.1593 14.5924 16.3231 14.5924 16.4907C14.5924 16.7154 14.5085 16.9308 14.3592 17.0897C14.2099 17.2486 14.0074 17.3379 13.7962 17.3379ZM16.9809 17.3379C16.8234 17.3379 16.6695 17.2882 16.5386 17.1951C16.4076 17.102 16.3056 16.9697 16.2453 16.8149C16.1851 16.6601 16.1693 16.4897 16.2 16.3254C16.2308 16.161 16.3066 16.0101 16.4179 15.8916C16.5293 15.7731 16.6711 15.6924 16.8256 15.6597C16.98 15.627 17.1401 15.6438 17.2856 15.7079C17.4311 15.7721 17.5554 15.8807 17.6429 16.02C17.7304 16.1593 17.7771 16.3231 17.7771 16.4907C17.7771 16.7154 17.6932 16.9308 17.5439 17.0897C17.3946 17.2486 17.1921 17.3379 16.9809 17.3379ZM20.1656 17.3379C20.0081 17.3379 19.8542 17.2882 19.7233 17.1951C19.5924 17.102 19.4903 16.9697 19.43 16.8149C19.3698 16.6601 19.354 16.4897 19.3847 16.3254C19.4155 16.161 19.4913 16.0101 19.6026 15.8916C19.714 15.7731 19.8558 15.6924 20.0103 15.6597C20.1647 15.627 20.3248 15.6438 20.4703 15.7079C20.6158 15.7721 20.7401 15.8807 20.8276 16.02C20.9151 16.1593 20.9618 16.3231 20.9618 16.4907C20.9618 16.7154 20.8779 16.9308 20.7286 17.0897C20.5793 17.2486 20.3768 17.3379 20.1656 17.3379Z"
                        fill="#869E9D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_408_32061">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                {activeTab === "Message" && (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="1" width="32" height="32" rx="16" fill="#2DC6BE" />
                    <g clipPath="url(#clip0_360_21266)">
                      <path
                        d="M22.6099 10.5009C21.3035 9.10178 19.5793 8.23146 17.7346 8.04002C15.8898 7.84858 14.0401 8.34801 12.5043 9.45221C10.9685 10.5564 9.8429 12.1962 9.3215 14.0888C8.80011 15.9815 8.91562 18.0084 9.64812 19.8202C9.72447 19.9886 9.74952 20.1781 9.71978 20.3624L9.01914 23.946C8.99215 24.0834 8.99766 24.2258 9.03518 24.3604C9.07271 24.495 9.14106 24.6175 9.23411 24.717C9.31039 24.7976 9.40121 24.8609 9.5011 24.9031C9.60098 24.9453 9.70787 24.9656 9.81532 24.9627H9.97456L13.3822 24.2341C13.5554 24.2119 13.731 24.2382 13.8917 24.3103C15.5944 25.0898 17.4992 25.2127 19.2779 24.6579C21.0565 24.1031 22.5976 22.9053 23.6353 21.2711C24.673 19.6369 25.1423 17.6686 24.9624 15.7056C24.7825 13.7426 23.9646 11.908 22.6497 10.5179L22.6099 10.5009ZM13.7962 17.3379C13.6387 17.3379 13.4848 17.2882 13.3539 17.1951C13.2229 17.102 13.1209 16.9697 13.0606 16.8149C13.0004 16.6601 12.9846 16.4897 13.0153 16.3254C13.046 16.161 13.1219 16.0101 13.2332 15.8916C13.3446 15.7731 13.4864 15.6924 13.6409 15.6597C13.7953 15.627 13.9554 15.6438 14.1009 15.7079C14.2464 15.7721 14.3707 15.8807 14.4582 16.02C14.5457 16.1593 14.5924 16.3231 14.5924 16.4907C14.5924 16.7154 14.5085 16.9308 14.3592 17.0897C14.2099 17.2486 14.0074 17.3379 13.7962 17.3379ZM16.9809 17.3379C16.8234 17.3379 16.6695 17.2882 16.5386 17.1951C16.4076 17.102 16.3056 16.9697 16.2453 16.8149C16.1851 16.6601 16.1693 16.4897 16.2 16.3254C16.2308 16.161 16.3066 16.0101 16.4179 15.8916C16.5293 15.7731 16.6711 15.6924 16.8256 15.6597C16.98 15.627 17.1401 15.6438 17.2856 15.7079C17.4311 15.7721 17.5554 15.8807 17.6429 16.02C17.7304 16.1593 17.7771 16.3231 17.7771 16.4907C17.7771 16.7154 17.6932 16.9308 17.5439 17.0897C17.3946 17.2486 17.1921 17.3379 16.9809 17.3379ZM20.1656 17.3379C20.0081 17.3379 19.8542 17.2882 19.7233 17.1951C19.5924 17.102 19.4903 16.9697 19.43 16.8149C19.3698 16.6601 19.354 16.4897 19.3847 16.3254C19.4155 16.161 19.4913 16.0101 19.6026 15.8916C19.714 15.7731 19.8558 15.6924 20.0103 15.6597C20.1647 15.627 20.3248 15.6438 20.4703 15.7079C20.6158 15.7721 20.7401 15.8807 20.8276 16.02C20.9151 16.1593 20.9618 16.3231 20.9618 16.4907C20.9618 16.7154 20.8779 16.9308 20.7286 17.0897C20.5793 17.2486 20.3768 17.3379 20.1656 17.3379Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_360_21266">
                        <rect
                          width="16"
                          height="17"
                          fill="white"
                          transform="translate(9 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
              <div
                className="relative cursor-pointer"
              >
                <button
                  className={`rounded-full flex items-center justify-center mx-2 ${
                    activeTab === "isNotificationsOpen"
                      ? "text-[#2DC6BE]"
                      : "text-[#869E9D]"
                  }`}
                  onClick={() => {
                    setActiveTab("isNotificationsOpen");
                    setIsNotificationsOpen(!isNotificationsOpen)
                  }}
                >
                  {activeTab !== "isNotificationsOpen" && (
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 32 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="1"
                        width="34"
                        height="34"
                        rx="16"
                        fill="#F0F7F7"
                      />
                      <g clipPath="url(#clip0_331_112428)">
                        <path
                          d="M16.9878 24.6041C17.2847 24.5967 17.5696 24.4757 17.7921 24.2626C18.0147 24.0494 18.1605 23.7579 18.2038 23.4395H15.7246C15.7691 23.7665 15.9218 24.0649 16.1541 24.2792C16.3865 24.4934 16.6827 24.6089 16.9878 24.6041Z"
                          fill="#AFBAC0"
                        />
                        <path
                          d="M23.9869 21.4625L23.8266 21.3092C23.372 20.8702 22.9741 20.3668 22.6436 19.8126C22.2827 19.0476 22.0663 18.2123 22.0073 17.3555V14.8321C22.0054 14.5256 21.9802 14.2198 21.9319 13.9178C21.7061 12.8121 21.4744 12.0889 21.2355 11.7708C20.721 11.0856 20.2943 10.7294 20.2943 10.7294L19.1087 9.83637C18.6166 9.57391 18.0879 9.40132 17.5439 9.32556V8.68194C17.5439 8.50107 17.4776 8.32762 17.3596 8.19973C17.2416 8.07185 17.0815 8 16.9147 8C16.7478 8 16.5877 8.07185 16.4697 8.19973C16.3517 8.32762 16.2854 8.50107 16.2854 8.68194V9.3511C15.0674 9.53732 13.9526 10.1948 13.147 11.2023C12.3413 12.2097 11.8992 13.499 11.9021 14.8321V17.3555C11.8431 18.2123 11.6268 19.0476 11.2658 19.8126C10.941 20.3654 10.5495 20.8688 10.1017 21.3092L9.94141 21.4625V22.903H23.9869V21.4625Z"
                          fill="#AFBAC0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_331_112428">
                          <rect
                            width="14.0455"
                            height="16.6041"
                            fill="white"
                            transform="translate(9.94141 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}

                  {activeTab === "isNotificationsOpen" && (
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17" cy="17" r="17" fill="#2DC6BE" />
                      <g clipPath="url(#clip0_40000104_8950)">
                        <path
                          d="M23.9869 21.4625L23.8266 21.3092C23.372 20.8702 22.9741 20.3668 22.6436 19.8126C22.2827 19.0476 22.0663 18.2123 22.0073 17.3555V14.8321C22.0054 14.5256 21.9802 14.2198 21.9319 13.9178C21.7061 12.8121 21.4744 12.0889 21.2355 11.7708C20.721 11.0856 20.2943 10.7294 20.2943 10.7294L19.1087 9.83637C18.6166 9.57391 18.0879 9.40132 17.5439 9.32556V8.68194C17.5439 8.50107 17.4776 8.32762 17.3596 8.19973C17.2416 8.07185 17.0815 8 16.9147 8C16.7478 8 16.5877 8.07185 16.4697 8.19973C16.3517 8.32762 16.2854 8.50107 16.2854 8.68194V9.3511C15.0674 9.53732 13.9526 10.1948 13.147 11.2023C12.3413 12.2097 11.8992 13.499 11.9021 14.8321V17.3555C11.8431 18.2123 11.6268 19.0476 11.2658 19.8126C10.941 20.3654 10.5495 20.8688 10.1017 21.3092L9.94141 21.4625V22.903H23.9869V21.4625Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_40000305_3352">
                          <rect
                            width="16"
                            height="17"
                            fill="white"
                            transform="translate(9 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
                {activeTab === "isNotificationsOpen" && isNotificationsOpen && (
                  <div className="absolute -left-[18rem] top-full mt-[0.5px] max-w-80 bg-white shadow-lg rounded-b-lg overflow-hidden p-4 z-50">
                    {/* Recent Views */}
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-lg text-[#48555B] text-left mb-3">
                        Notification
                      </h3>
                      <ul>
                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>

                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                Follow Request
                              </p>
                              <div className="flex justify-between text-left gap-5">
                                <p className="text-sm text-gray-500">
                                  @Madhu.lika
                                </p>
                                <p className="text-sm text-gray-400">
                                  12kFollowers
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="text-[#000000] font-medium"
                            onClick={() => console.log("Remove item")}
                          >
                            {">"}
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-lg text-[#48555B] text-left mb-3">
                        Today
                      </h3>
                      <ul>
                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                Pankaj
                              </p>
                              <div className="flex justify-between text-left gap-5">
                                <p className="text-sm text-gray-500">
                                  @Reet.Pankaj
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="font-medium rounded-xl border border-[#2DC6BE] text-[#2DC6BE] p-2"
                            onClick={() => console.log("Remove item")}
                          >
                            Followed
                          </button>
                        </li>

                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 text-left">
                                @Madhu.lika & Karthik Like your Story
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-lg text-[#48555B] text-left mb-3">
                        Last Week
                      </h3>
                      <ul>
                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-left text-[#415365]">
                                Rishab
                              </p>
                              <div className="flex justify-between text-left gap-5">
                                <p className="text-sm text-gray-500">
                                  @frontend
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="font-medium rounded-xl border border-[#2DC6BE] text-[#2DC6BE] p-2"
                            onClick={() => console.log("Remove item")}
                          >
                            Follow Request
                          </button>
                        </li>

                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 text-left">
                                @Madhu.lika & Karthik Like your Story
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-lg text-[#48555B] text-left mb-3">
                        Last Month
                      </h3>
                      <ul>
                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center justify-between gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 text-left">
                                Madhu.lika & Karthik Like your Post : Enjoying
                                Pune
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Background Image */}
                              <img
                                src={girl}
                                alt="Background"
                                className="w-10 h-10 rounded-full"
                              />

                              {/* Overlay Image */}
                              <img
                                src={girl}
                                alt="Overlay"
                                className="absolute top-1 left-1 right-0 w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 text-left">
                                Madhu.lika & Karthik Like your Post : Enjoying
                                Pune
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-px h-6 bg-gray-300 mx-4"></div>
              <div
                className="relative cursor-pointer"
                // onMouseEnter={() => setIsProfile(true)}
                // onMouseLeave={() => setIsProfile(false)}
                onClick={() => {
                  setIsProfile((prev) => !prev);
                }}
              >
                <div className="flex items-center">
                  <img
                    src={userDetails?.profile_image || dummyUserImage}
                    alt="Profile"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="block font-medium text-gray-700 mr-5">
                    {userDetails?.user_name}
                    </span>
                    <p className="-mt-1 font-inter font-medium text-[12px] text-[#667877] text-left">
                    {userDetails?.email?.length > 12 ? `${userDetails?.email.slice(0, 12)}...` : userDetails?.email}
                    </p>
                  </div>
                 {
                  isProfile ? <KeyboardArrowDownIcon className="h-4 w-4 text-gray-500 rotate-180" /> : <KeyboardArrowDownIcon className="h-4 w-4 text-gray-500" />
                 } 
                </div>
                {isProfile && (
                  <div className="absolute -left-[10rem] right-0 top-full mt-[0.5px] max-w-80 bg-white shadow-lg rounded-b-lg overflow-hidden p-4 z-50">
                    {/* Profile, Settings, Logout */}
                    <div className="space-y-2">
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 p-2 rounded flex items-center"  onClick={() => navigate('/profile')} >
                        <Person className="mr-2 navitemDatas" />
                        Profile
                      </button>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 p-2 rounded flex items-center" onClick={() => navigate('/setting')}>
                        <Settings className="mr-2 navitemDatas" />
                        Settings
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




export default Header;
