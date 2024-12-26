import React from "react";
import logo from "../../assets/headerIcon/logo.png";
import Hero from "../../assets/LandingSVG//Hero.png";
import HeroSVG from "../../assets/LandingSVG/HeroSnap.jpeg";
import HeroSVGNew from "../../assets/LandingSVG/HeroSVGNew.svg";
import BadgeIcon from "../../assets/LandingSVG/BadgeIcon.svg";
import badgePhool from "../../assets/LandingSVG/badgePhool.svg";
import bucketSVG from "../../assets/LandingSVG/bucketSVG.svg";
import Africa1 from "../../assets/LandingSVG/africa1.svg";
import Africa from "../../assets/LandingSVG/africa.svg";
import Goa from "../../assets/LandingSVG/goa.svg";
import Calcutta from "../../assets/LandingSVG/calcutta.svg";
import China from "../../assets/LandingSVG/china.svg";
import Himachal from "../../assets/LandingSVG/himachal.svg";
import Korea from "../../assets/LandingSVG/korea.svg";
import Norway from "../../assets/LandingSVG/norway.svg";
import Romania from "../../assets/LandingSVG/romania.svg";
import Russia1 from "../../assets/LandingSVG/Russia1.svg";
import Location from "../../assets/LandingSVG/location.svg";
import Left from "../../assets/LandingSVG/left.svg";
import Right from "../../assets/LandingSVG/right.svg";
import leftPlane from "../../assets/LandingSVG/leftPlane.svg";
import rightPlane from "../../assets/LandingSVG/rightPlane.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
const navigate = useNavigate();
  return (
    <div className="px-20 flex flex-col bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <header className="">
        <div className="w-full max-w-[99%] h-[80px] container mx-auto py-4 flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TravSo Logo" className="h-10" />
          </div>
        </div>
      </header>
      <div className="flex mt-4 w-full gap-[20px]">
        <div className="flex flex-col items-start w-[500px] gap-[15px] px-4">
          <div className="flex items-center justify-center w-[170px] h-[55px] gap-[15px] bg-[#FFFFFF] rounded-full">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3076 13.7788C10.3076 13.1821 10.5447 12.6098 10.9666 12.1878C11.3886 11.7659 11.9609 11.5288 12.5576 11.5288C13.1544 11.5288 13.7267 11.7659 14.1486 12.1878C14.5706 12.6098 14.8076 13.1821 14.8076 13.7788C14.8076 14.3755 14.5706 14.9478 14.1486 15.3698C13.7267 15.7918 13.1544 16.0288 12.5576 16.0288C11.9609 16.0288 11.3886 15.7918 10.9666 15.3698C10.5447 14.9478 10.3076 14.3755 10.3076 13.7788Z"
                fill="#2DC6BE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.03162 8.42081C8.03136 8.00812 8.11245 7.59943 8.27026 7.21811C8.42806 6.83678 8.65949 6.49031 8.95131 6.19849C9.24312 5.90668 9.5896 5.67525 9.97092 5.51744C10.3522 5.35964 10.7609 5.27855 11.1736 5.27881H13.9416C14.3543 5.27855 14.763 5.35964 15.1443 5.51744C15.5256 5.67525 15.8721 5.90668 16.1639 6.19849C16.4558 6.49031 16.6872 6.83678 16.845 7.21811C17.0028 7.59943 17.0839 8.00812 17.0836 8.42081C17.0838 8.42795 17.0865 8.43479 17.0913 8.4401C17.096 8.44542 17.1025 8.44886 17.1096 8.44981L19.3396 8.62981C20.3386 8.71181 21.1596 9.44981 21.3466 10.4348C21.8214 12.9474 21.8566 15.5232 21.4506 18.0478L21.3536 18.6518C21.2646 19.2052 20.9926 19.7128 20.5811 20.0933C20.1695 20.4738 19.6423 20.7053 19.0836 20.7508L17.1406 20.9078C14.0903 21.1556 11.0249 21.1556 7.97462 20.9078L6.03162 20.7508C5.47282 20.7053 4.94545 20.4736 4.5339 20.0929C4.12235 19.7122 3.85042 19.2044 3.76162 18.6508L3.66462 18.0478C3.25762 15.5228 3.29362 12.9478 3.76862 10.4348C3.85945 9.95583 4.10501 9.51991 4.46758 9.194C4.83016 8.8681 5.2897 8.67024 5.77562 8.63081L8.00562 8.44981C8.0127 8.44886 8.0192 8.44542 8.02397 8.4401C8.02873 8.43479 8.03145 8.42795 8.03162 8.42081ZM12.5576 10.0288C11.5631 10.0288 10.6092 10.4239 9.90597 11.1272C9.20271 11.8304 8.80762 12.7842 8.80762 13.7788C8.80762 14.7734 9.20271 15.7272 9.90597 16.4305C10.6092 17.1337 11.5631 17.5288 12.5576 17.5288C13.5522 17.5288 14.506 17.1337 15.2093 16.4305C15.9125 15.7272 16.3076 14.7734 16.3076 13.7788C16.3076 12.7842 15.9125 11.8304 15.2093 11.1272C14.506 10.4239 13.5522 10.0288 12.5576 10.0288Z"
                fill="#2DC6BE"
              />
            </svg>

            <p className="text-[#2DC6BE] font-poppins font-semibold text-[14px]">
              CAPTURE
            </p>
          </div>
          <h5 className="text-left font-poppins font-semibold text-[58px] text-[#212626] leading-[70px] w-[420px]">
            Perfect Your <span className="text-[#2DC6BE]">Travel Moments</span>{" "}
            with Travso
          </h5>
          <p className="text-left font-inter font-medium text-[16px] text-[#212626]">
            Stay Travel Inspired, Join our curated community of travellers
            exploring collaboration across hospitality, food, and tourism!
          </p>
          
          <button className="w-[140px] h-[48px] rounded-[4px] flex items-center justify-center font-poppins font-semibold text-[#EEEEEE] bg-[#2DC6BE]" onClick={() => navigate('/login')}>
            Join Today
          </button>
        </div>

        {/* Data svg and relative */}
        <div className="flex justify-center items-center m-auto relative">
          <img
            src={HeroSVGNew}
            alt="SVG"
            className="w-[540px] h-[530px] object-cover"
          />

          {/* Absolute Data */}
          <div className="flex items-center justify-center w-[230px] h-[55px] gap-[8px] bg-[#FFFFFF] rounded-full absolute -bottom-2 right-[100px]">
            <img src={BadgeIcon} alt="BadgeIcon" />

            <p className="text-[#393E46] font-poppins font-semibold text-[14px]">
              Get Travel Badges
            </p>
          </div>
          <div className="flex items-center justify-center w-[217px] h-[72px] px-2 gap-[5px] bg-[#FFFFFF] rounded-[12px] absolute bottom-[100px] -right-[80px]">
            <img src={badgePhool} alt="BadgeIcon" />

            <p className="text-[#212626] font-poppins font-semibold text-[15px]">
              Connect with industry experts
            </p>
          </div>
          <div className="flex items-center justify-center w-[240px] h-[55px] gap-[8px] bg-[#FFFFFF] rounded-full absolute bottom-[70px] -left-[45px]">
            <img src={bucketSVG} alt="bucketSVG" />

            <p className="text-[#393E46] font-poppins font-semibold text-[14px]">
              Fulfill your bucket list
            </p>
          </div>

          <img
            src={Africa}
            alt="Africa"
            className="absolute -left-[24px] bottom-[150px]"
          />
          <img
            src={Goa}
            alt="Goa"
            className="absolute left-[150px] top-[220px]"
          />
          <img
            src={Calcutta}
            alt="Calcutta"
            className="absolute right-[120px] top-[200px]"
          />
          <img
            src={Himachal}
            alt="Himachal"
            className="absolute left-[180px] top-[105px]"
          />
          <img
            src={China}
            alt="China"
            className="absolute right-[130px] top-[135px]"
          />
          <img
            src={Korea}
            alt="Korea"
            className="absolute -right-[15px] top-[180px]"
          />
          <img
            src={Romania}
            alt="Romania"
            className="absolute -left-[20px] top-[135px]"
          />
          <img
            src={Norway}
            alt="Norway"
            className="absolute left-[45px] top-[50px]"
          />
          <img
            src={Russia1}
            alt="Russia"
            className="absolute right-[100px] top-[7px]"
          />
          <img
            src={Location}
            alt="Location"
            className="absolute right-[8px] top-[80px]"
          />
          <img
            src={Left}
            alt="Left"
            className="absolute -left-[160px] top-[90px]"
          />
          <img
            src={leftPlane}
            alt="leftPlane"
            className="absolute -left-[65px] top-[65px]"
          />
          <img
            src={Right}
            alt="Right"
            className="absolute -right-[100px] top-[35px]"
          />
          <img
            src={rightPlane}
            alt="rightPlane"
            className="absolute right-[20px] top-[15px]"
          />
        </div>
        {/* <div className="flex justify-center items-center m-auto relative">
          <img
            src={Hero}
            alt="SVG"
            className="w-full h-[530px]"
          />
        </div> */}
      </div>
      <footer className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-[35px]">
          <p className="text-left font-inter font-medium text-[16px] text-[#212626]">
            Conatct us
          </p>
          <p className="text-left font-inter font-medium text-[16px] text-[#212626]">
            Privacy policy
          </p>
          <p className="text-left font-inter font-medium text-[16px] text-[#212626]">
            Terms and conditions
          </p>
        </div>
        <div>
          <p className="text-left font-inter font-medium text-[16px] text-[#212626]">
            Ⓒ 2025 Travso All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;