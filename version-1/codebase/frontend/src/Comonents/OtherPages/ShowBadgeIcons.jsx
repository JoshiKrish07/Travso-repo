/* eslint-disable react/prop-types */

import adventureBadge from "../../assets/Badges/AD.svg";
import soloTraveller from "../../assets/Badges/ST.svg";
import explorerBadge from "../../assets/Badges/EX.svg";
import foodieBadge from "../../assets/Badges/FO.svg";
import luxuryTravelerBadge from "../../assets/Badges/LT.svg";

const ShowBadgeIcon = ({ badge }) => {
  // Badge mapping
  const badges = {
    Adventurer: adventureBadge,
    Explorer: explorerBadge,
    Foodie: foodieBadge,
    "Solo Traveler": soloTraveller,
    "Luxury Traveler": luxuryTravelerBadge,
  };

  const badgeKey = badge?.split("-")[0]?.trim(); // Extract the badge key
  const badgeDescription = badge?.split("-")[1]?.trim();
  const badgeSrc = badges[badgeKey]; // Get the corresponding badge image source
//   console.log("==badgeKey===>", badgeKey)
  if (!badgeSrc) return null; // If no matching badge image, return nothing

  return (
    <div className="relative group">
      <img
        src={badgeSrc}
        alt={`BadgeIcon-${badgeKey}`}
        className="w-[20px] h-[20px]"
      />
      <div className="absolute left-[5px] top-[20px]  mt-1 hidden group-hover:block bg-[#2DC6BE] text-white text-sm p-2 rounded shadow-lg w-max text-left z-10">
        {badgeKey}
      </div>
    </div>
  );
};

export default ShowBadgeIcon;
