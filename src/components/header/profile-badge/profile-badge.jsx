import PropTypes from "prop-types";
import { useContext } from "react";
import { UserData } from "src/interfaces/UserData";
import { ReactComponent as PinIcon } from "src/public/svg/Pin-Black.svg";
import classes from "./profile-badge.module.css";

import { useNavigate } from "react-router-dom";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as NotificationOffIcon } from "src/public/svg/Notification Off.svg";
import { ReactComponent as NotificationOnIcon } from "src/public/svg/Notification On.svg";

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
            onClick={() => navigate("/pins")}
          />
          <PinIcon />
        </div>
      )}
      <div className={classes.notification}>
        <a
          className={classes.productlink}
          onClick={() => navigate("/notifications")}
        />
        {notifications > 0 ? <NotificationOnIcon /> : <NotificationOffIcon />}
      </div>

      <div className={classes.profile}>
        <a
          className={classes.productlink}
          onClick={() => navigate("/profile")}
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
