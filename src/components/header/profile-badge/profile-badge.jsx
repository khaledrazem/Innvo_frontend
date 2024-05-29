import React from 'react';
import classes from './profile-badge.module.css';
import { UserData } from 'src/interfaces/UserData';
import PropTypes from 'prop-types';

/**
 * @param (UserData) userData
 */
function ProfileBadge({ userData }) {

    return (
        <div className={classes.profilebadgecontainer}>
            <img src={userData.profileImg.src} className={classes.profileimg}></img>
            <label className={classes.username}>{userData.username}</label>
        </div>
    );
}

ProfileBadge.propTypes = {
    userData: PropTypes.shape(UserData).isRequired
};

export default ProfileBadge