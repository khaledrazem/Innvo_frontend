import React from 'react';
import classes from './invo-header.module.css';
import HeaderSearchBar from 'src/components/header/search-bar-filter/search-bar-filter';
import ProfileBadge from './profile-badge/profile-badge';
import userDatajson from "src/data/profiledata.json"
import Logo from './logo/logo';
import { ReactComponent as NotificationOffIcon } from "src/public/svg/Notification Off.svg";

function InvoHeader() {
    return (
        <header className={classes.header}>
            <Logo></Logo>
            <HeaderSearchBar></HeaderSearchBar>
            <NotificationOffIcon/>
            <ProfileBadge userData={userDatajson}></ProfileBadge>
        </header>
    );
}

export default InvoHeader