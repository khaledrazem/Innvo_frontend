import { useContext } from "react";
import subscribedToolsData from "src/data/userSelectedTools.json";
import NavButton from "./nav-button/nav-button";
import classes from "./side-navbar.module.css";

import { UserSessionContext } from "src/contexts/UserSessionContext";

import { Dropdown } from "rsuite";
import { ReactComponent as CommunityIcon } from "src/public/svg/Community.svg";
import { ReactComponent as DashboardIcon } from "src/public/svg/Dashboard.svg";
import { ReactComponent as DiscoverIcon } from "src/public/svg/Discover.svg";
import { ReactComponent as SandwichIcon } from "src/public/svg/Dots Option.svg";
import { ReactComponent as PinIcon } from "src/public/svg/Pin_Fill.svg";

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
          <NavButton
            href="dashboard"
            text="Dashboard"
            icon={<DashboardIcon />}
          ></NavButton>
          <NavButton href="pins" text="Pins" icon={<PinIcon />}></NavButton>
          <NavButton
            href="community"
            text="Community"
            icon={<CommunityIcon />}
          ></NavButton>{" "}
          {/* <NavButton
            href="support"
            text="Support"
            icon={<SupportIcon />}
          ></NavButton> */}
          {Array.isArray(subscribedTools) && subscribedTools.length > 0 ? (
            <div className={classes.divider} />
          ) : null}
          {Array.isArray(subscribedTools) && subscribedTools.length > 0 ? (
            <div className={classes.toollist}>
              {subscribedTools.map((tool) => {
                return (
                  <div className={classes.tooloption}>
                    <img src={tool.img.url} />
                    <label>{tool.name}</label>
                    <Dropdown
                      renderToggle={(props, ref) => (
                        <SandwichIcon
                          {...props}
                          ref={ref}
                          className={classes.dotsicon}
                        />
                      )}
                    >
                      <Dropdown.Item className={classes.option}>
                        Remove from sidebar
                      </Dropdown.Item>

                      <Dropdown.Item>Unslot</Dropdown.Item>
                    </Dropdown>
                  </div>
                );
              })}
            </div>
          ) : null}
        </ul>
      </nav>

      {/* <div className={classes.subscriptionmessage}>
        <Link to={"subscriptions"}>
          <label
            dangerouslySetInnerHTML={{
              __html: subscriptionMessage[subscription],
            }}
          />
        </Link>
      </div> */}
    </div>
  );
}

export default SideNavBar;
