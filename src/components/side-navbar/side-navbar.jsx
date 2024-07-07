import React, { useContext } from "react";
import classes from "./side-navbar.module.css";
import NavButton from "./nav-button/nav-button";
import subscribedToolsData from "src/data/userSelectedTools.json";

import subscriptionMessage from "src/public/text/upgrade-subscription.json";
import { UserSessionContext } from "src/contexts/UserSessionContext";

import { ReactComponent as DashboardIcon } from "src/public/svg/Dashboard.svg";
import { ReactComponent as DiscoverIcon } from "src/public/svg/Discover.svg";
import { ReactComponent as ToolsIcon } from "src/public/svg/My Tools.svg";
import { ReactComponent as CommunityIcon } from "src/public/svg/Community.svg";
import { ReactComponent as WorkspaceIcon } from "src/public/svg/Workspace.svg";

import { Link } from "react-router-dom";

function SideNavBar() {
  const { subscription, userType } = useContext(UserSessionContext);

  let subscribedTools = subscribedToolsData.subscribedTools;

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul>
          <NavButton
            href="discover"
            text="Discover"
            icon={<DiscoverIcon />}
          ></NavButton>
          {userType == "dev" && (
            <NavButton
              href="dashboard"
              text="Dashboard"
              icon={<DashboardIcon />}
            ></NavButton>
          )}
          {userType == "dev" && (
            <NavButton
              href="my-tools"
              text="My Tools"
              icon={<ToolsIcon />}
            ></NavButton>
          )}
          {userType == "user" && (
            <NavButton
              href="workspace"
              text="My tools"
              icon={<ToolsIcon />}
            ></NavButton>
          )}
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

          {userType == "user" &&
          Array.isArray(subscribedTools) &&
          subscribedTools.length > 0 ? (
            <div className={classes.divider} />
          ) : null}
          {userType == "user" &&
          Array.isArray(subscribedTools) &&
          subscribedTools.length > 0 ? (
            <div className={classes.toollist}>
              {subscribedTools.map((tool) => {
                return (
                  <div className={classes.tooloption}>
                    <img src={tool.img.url} />
                    <label>{tool.name}</label>
                  </div>
                );
              })}
            </div>
          ) : null}
        </ul>
      </nav>

      <div className={classes.subscriptionmessage}>
        <Link to={"subscriptions"}>
          <label
            dangerouslySetInnerHTML={{
              __html: subscriptionMessage[subscription],
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default SideNavBar;
