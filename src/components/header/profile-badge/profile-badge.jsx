import React from "react";
import classes from "./profile-badge.module.css";
import { UserData } from "src/interfaces/UserData";
import PropTypes from "prop-types";
import { ReactComponent as NotificationOffIcon } from "src/public/svg/Notification Off.svg";

/**
 * @param (UserData) userData
 */
function ProfileBadge({ userData }) {
  return (
    <div className={classes.container}>
      <NotificationOffIcon className={classes.notification} />
      <div className={classes.profile}>
        <a className={classes.productlink} href="/dev/profile" />
        <img src={userData.profileImg.src} className={classes.profileimg}></img>
        <label className={classes.username}>{userData.devName}</label>
      </div>
    </div>
  );
}

ProfileBadge.propTypes = {
  userData: PropTypes.shape(UserData).isRequired,
};

export default ProfileBadge;
