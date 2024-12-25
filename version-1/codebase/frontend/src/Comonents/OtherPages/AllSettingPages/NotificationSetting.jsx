import React, { useState } from "react";

const NotificationSetting = () => {
  const [isCheckedToggle, setIsCheckedToggle] = useState(false);
  const [selectedOptionMessage, setSelectedOptionMessage] = useState("Off");
  const [selectedOptionLike, setSelectedOptionLike] = useState("Off");
  const [selectedOptionComment, setSelectedOptionComment] = useState("Off");
  const [selectedOptionStories, setSelectedOptionStories] = useState("Off");
  const [selectedOptionStoryLiked, setSelectedOptionStoryLiked] =
    useState("Off");
  const [selectedOptionStoryMention, setSelectedOptionStoryMention] =
    useState("Off");
  const [selectedOptionStoryComment, setSelectedOptionStoryComment] =
    useState("Off");
  const [selectedOptionPostTagged, setSelectedOptionPostTagged] =
    useState("Off");

  const sections = [
    {
      title: "Messages",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionMessage,
      setSelectedOption: setSelectedOptionMessage,
    },
    {
      title: "Like",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionLike,
      setSelectedOption: setSelectedOptionLike,
    },
    {
      title: "Comments",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionComment,
      setSelectedOption: setSelectedOptionComment,
    },
    {
      title: "Stories",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionStories,
      setSelectedOption: setSelectedOptionStories,
    },
    {
      title: "Story Liked",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionStoryLiked,
      setSelectedOption: setSelectedOptionStoryLiked,
    },
    {
      title: "Story Mention",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionStoryMention,
      setSelectedOption: setSelectedOptionStoryMention,
    },
    {
      title: "Story Comment",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionStoryComment,
      setSelectedOption: setSelectedOptionStoryComment,
    },
    {
      title: "Post Tagged",
      options: ["Off", "From profiles I follow", "From Everyone"],
      selectedOption: selectedOptionPostTagged,
      setSelectedOption: setSelectedOptionPostTagged,
    },
  ];

  const handleCheckboxChange = () => {
    setIsCheckedToggle((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-[24px] px-4 mb-4">
      <div className="flex flex-col">
        <h3 className="text-left font-poppins font-semibold text-[28px] text-[#212626]">
          Notification Settings
        </h3>
        <div className="flex items-center justify-between mt-5">
          <p className="font-inter font-medium text-[14px] text-[#667877]">
            Pause all
          </p>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isCheckedToggle}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`block h-[24px] w-[48px] rounded-full transition ${
                  isCheckedToggle ? "bg-[#E6EBEB]" : "bg-[#E5E7EB]"
                }`}
              ></div>
              <div
                className={`dot absolute top-1 h-[16px] w-[16px] rounded-full transition-transform ${
                  isCheckedToggle
                    ? "translate-x-7 bg-[#2DC6BE]"
                    : "translate-x-1 bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] mt-8">
        {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-[10px]">
          <h5 className="text-left font-poppins font-semibold text-[20px] text-[#212626]">
            {section.title}
          </h5>
          <div className="flex flex-col gap-[8px]">
            {section.options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={section.title}
                  value={option}
                  checked={section.selectedOption === option}
                  onChange={() => section.setSelectedOption(option)}
                  className="hidden peer"
                />
                <div className="w-[16px] h-[16px] border-2 border-[#2DC6BE] rounded-full flex items-center justify-center">
                  <div
                    className={`${
                      section.selectedOption === option
                        ? "w-[8px] h-[8px] bg-[#2DC6BE] rounded-full"
                        : ""
                    }`}
                  ></div>
                </div>
                <span className="font-inter font-medium text-[16px] text-[#212626]">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default NotificationSetting;
