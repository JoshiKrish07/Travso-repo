import React, { useState } from "react";
import Icon from "../../../assets/Icon.png";
import Select from "react-select";
import "../EditProfile.css"


const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const cityOptions = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "8px",
    padding: "2px 4px",
    minHeight: "48px",
    backgroundColor: "#F0F7F7",
    border: "1px solid #d1d5db", // Light grey border
    boxShadow: "none",
    "&:hover": {
      borderColor: "#93C5FD", // Blue on hover
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#869E9D",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Inter, sans-serif",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "8px",
    overflow: "hidden",
  }),
};


const EditProfileSetting = () => {

const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPhoto(reader.result); // Set the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setCoverPhoto(null); // Remove the cover photo
  };

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result); // Set the uploaded profile photo
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePhoto = () => {
    setProfilePhoto(null); // Remove the profile photo
  };


  return (
    <div className="bg-white rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 px-4 mb-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
            <h2 className="font-poppins text-[32px] font-semibold text-[#212626]">
              Profile Setup
            </h2>
            <p className="font-inter font-medium text-[20px] text-[#667877]">
              Fill important details to get started
            </p>
          </div>

          {/* Form Section */}
          <form className="w-[976px]">
            {/* Cover Photo section */}
            <div className="relative border-dashed border-2 border-[#F0F7F7] rounded-[10px] h-[320px] flex items-center justify-center bg-[#F0F7F7] mb-6 overflow-hidden group">
              {coverPhoto ? (
                <img
                  src={coverPhoto}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <img src={Icon} alt="Placeholder" className="w-8 h-8 mb-2" />
                  <span className="font-inter font-medium text-[16px] text-[#869E9D]">
                    Upload Cover Photo (optional)
                  </span>
                </div>
              )}
              {/* Buttons on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <label
                  htmlFor="cover-upload"
                  className="bg-[#2DC6BE] text-white py-2 px-4 rounded-lg cursor-pointer"
                >
                  Upload
                </label>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Remove
                </button>
                <input
                  type="file"
                  id="cover-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* Profile Photo and Badge */}
            <div className="flex justify-between items-center mb-6">
              {/* Profile Photo Section */}
              <div className="relative w-[220px] h-[220px] left-[64px] -top-[130px] rounded-full overflow-hidden border-[14px] border-[#FFFFFF] bg-[#F0F7F7] flex flex-col items-center justify-center group">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={Icon}
                      alt="Placeholder"
                      className="w-8 h-8 mb-2"
                    />
                    <span className="font-inter font-medium text-[16px] text-[#869E9D]">
                      Upload Profile Photo
                    </span>
                  </div>
                )}
                {/* Buttons on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <label
                    htmlFor="profile-upload"
                    className="bg-[#2DC6BE] text-white py-2 px-4 rounded-lg cursor-pointer"
                  >
                    Upload
                  </label>
                  <button
                    type="button"
                    onClick={handleRemoveProfilePhoto}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Remove
                  </button>
                  <input
                    type="file"
                    id="profile-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePhotoUpload}
                  />
                </div>
              </div>

              {/* Badge Selector */}
              <div className="flex justify-center items-center">
                <div className="relative right-[40px] -top-[130px] rounded-full border-[14px] border-[#FFFFFF] bg-[#F0F7F7] px-10 py-4 shadow-sm flex items-center">
                  {/* Dropdown Select */}
                  <select className="appearance-none bg-transparent text-[#667877] font-medium text-center w-full focus:outline-none cursor-pointer pr-4 custom-select">
                    <option className="font-inter font-medium text-[16px] text-[#869E9D]">
                      Select your Badge
                    </option>
                    <option className="font-inter font-medium text-[16px] text-[#869E9D]">
                      Gold
                    </option>
                    <option className="font-inter font-medium text-[16px] text-[#869E9D]">
                      Silver
                    </option>
                    <option className="font-inter font-medium text-[16px] text-[#869E9D]">
                      Bronze
                    </option>
                  </select>

                  {/* Centered Dropdown Icon */}
                  <svg
                    className="absolute top-1/2 right-8 transform -translate-y-1/2 pointer-events-none font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#667877"
                    width="18"
                    height="18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 -mt-32">
              {/* Full Name */}
              <div>
                <label className="text-left font-inter block text-[#000000] mb-1 text-[14px] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="rounded-[8px] px-4 py-2 w-full h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F0F7F7] placeholder:text-[#869E9D] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
                />
              </div>

              {/* Unique ID */}
              <div>
                <label className="text-left font-inter block text-[#000000] mb-1 text-[14px] font-medium">
                  Unique ID
                </label>
                <input
                  type="text"
                  placeholder="john_doe_21"
                  className="rounded-[8px] px-4 py-2 w-full h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F0F7F7] placeholder:text-[#869E9D] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-left font-inter block text-[#000000] mb-1 text-[14px] font-medium">
                  Gender
                </label>
                <Select
                  options={genderOptions}
                  placeholder="Choose your gender"
                  styles={customStyles}
                  classNamePrefix="custom"
                  className="dataName"
                />
              </div>

              {/* City */}
              <div>
                <label className="text-left font-inter block text-[#000000] mb-1 text-[14px] font-medium">
                  City
                </label>
                <Select
                  options={cityOptions}
                  placeholder="Select your city"
                  styles={customStyles}
                  classNamePrefix="custom"
                  className="dataName"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="text-left font-inter block text-[#000000] mb-1 text-[14px] font-medium">
                Description
              </label>
              <textarea
                placeholder="Your Story in few words..."
                className="rounded-[8px] px-4 py-2 w-full h-[132px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F0F7F7] placeholder:text-[#869E9D] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center gap-[16px]">
            <button
              type="submit"
              className="mt-4 w-[106px] h-[48px] bg-[#F0F7F7] text-[#667877] py-3 px-4 rounded-[7px] hover:bg-[#2DC6BE] hover:text-white transition text-[16px] font-medium font-inter"
            >
              Discard
            </button>
            <button
              type="submit"
              className="mt-4 w-[156px] h-[48px] bg-[#2DC6BE] text-white py-3 px-4 rounded-[7px] hover:bg-[#2DC6BE] transition text-[16px] font-medium font-inter"
            >
              Save Changes
            </button>
            </div>
            
          </form>
    </div>
  );
};

export default EditProfileSetting;
