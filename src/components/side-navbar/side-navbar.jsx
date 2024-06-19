import React, { useContext } from "react";
import classes from "./side-navbar.module.css";
import NavButton from "./nav-button/nav-button";

import subscriptionMessage from "src/public/text/upgrade-subscription.json";
import { UserSessionContext } from "src/contexts/UserSessionContext";

import { ReactComponent as DashboardIcon } from "src/public/svg/Dashboard.svg";
import { ReactComponent as DiscoverIcon } from "src/public/svg/Discover.svg";
import { ReactComponent as ToolsIcon } from "src/public/svg/My Tools.svg";
import { ReactComponent as CommunityIcon } from "src/public/svg/Community.svg";
import { Link } from "react-router-dom";

function SideNavBar() {
  const { subscription } = useContext(UserSessionContext);

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul>
          <NavButton
            href="discover"
            text="Discover"
            icon={<DiscoverIcon />}
          ></NavButton>
          <NavButton
            href="dashboard"
            text="Dashboard"
            icon={<DashboardIcon />}
          ></NavButton>
          <NavButton
            href="my-tools"
            text="My Tools"
            icon={<ToolsIcon />}
          ></NavButton>
          <NavButton
            href="community"
            text="Community"
            icon={<CommunityIcon />}
          ></NavButton>
          {/* <NavButton
            href="support"
            text="Support"
            icon={<IoChatbubbleEllipsesOutline />}
          ></NavButton> */}
        </ul>
      </nav>

      <Link className={classes.subscriptionmessage} to={"subscriptions"}>
        <label
          dangerouslySetInnerHTML={{
            __html: subscriptionMessage[subscription],
          }}
        />
      </Link>
    </div>
  );
}

export default SideNavBar;
