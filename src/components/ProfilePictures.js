import React from "react";
import mainPic from "../Pictures/main.png";
import secondaryPic from "../Pictures/secondary.jpg";

const ProfilePictures = () => {
  return (
    <div className="profile-pictures">
      <div className="secondary-picture">
        <img
          className="sec-picture"
          src={secondaryPic}
          alt="secondary_profile_picture"
        />
        <div className="main-picture">
          <div className="main-overlay">
            <img src={mainPic} alt="main_profile_picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictures;
