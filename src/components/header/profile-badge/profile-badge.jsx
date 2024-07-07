import React, { useContext } from "react";
import classes from "./profile-badge.module.css";
import { UserData } from "src/interfaces/UserData";
import PropTypes from "prop-types";
import { ReactComponent as PinIcon } from "src/public/svg/Pin-Black.svg";

import { ReactComponent as NotificationOffIcon } from "src/public/svg/Notification Off.svg";
import { ReactComponent as NotificationOnIcon } from "src/public/svg/Notification On.svg";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { useNavigate } from "react-router-dom";

/**
 * @param (UserData) userData
 */
function ProfileBadge({ userData }) {
  const navigate = useNavigate();

  const { notifications, userType } = useContext(UserSessionContext);

  return (
    <div className={classes.container}>
      {userType == "user" && (
        <div className={classes.notification}>
          <a
            className={classes.productlink}
            onClick={() => navigate("/dev/pins")}
          />
          <PinIcon />
        </div>
      )}
      <div className={classes.notification}>
        <a
          className={classes.productlink}
          onClick={() => navigate("/dev/notifications")}
        />
        {notifications > 0 ? <NotificationOnIcon /> : <NotificationOffIcon />}
      </div>

      <div className={classes.profile}>
        <a
          className={classes.productlink}
          onClick={() => navigate("/dev/profile")}
        />
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
