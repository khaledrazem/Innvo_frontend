import { Link } from "react-router-dom";
import classes from "./tool-card.module.css";
import { useContext } from "react";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { Dropdown } from "rsuite";

import { ReactComponent as SandwichIcon } from "src/public/svg/Dots Option.svg";

function ToolCard({ toolData, userEdit = false }) {
  const { userType } = useContext(UserSessionContext);

  return toolData != null ? (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={toolData.logo.url}></img>
      </div>

      <div className={classes.summary}>
        <h2 className={classes.header}>{toolData.title}</h2>
        <div className={classes.status}>
          <label>Status: {toolData.active ? "Active" : "Inactive"} </label>
          <div
            className={
              toolData.active ? classes.activeball : classes.inactiveball
            }
          />
        </div>
      </div>
      {userType == "dev" && (
        <button>
          <Link
            className={classes.toollink}
            to={"/dev/my-tools/edit/" + toolData.id}
          />
          Access
        </button>
      )}

      {userType == "user" && (
        <div className={classes.buttons}>
          <button>
            <Link
              className={classes.toollink}
              to={"/dev/my-tools/edit/" + toolData.id}
            />
            Access
          </button>
          {userEdit && (
            <button className={classes.redbutton}>
              <Link
                className={classes.toollink}
                to={"/dev/my-tools/edit/" + toolData.id}
              />
              Remove
            </button>
          )}
        </div>
      )}

      <Dropdown
        renderToggle={(props, ref) => (
          <SandwichIcon {...props} ref={ref} className={classes.dotsicon} />
        )}
      >
        <Dropdown.Item className={classes.option}>
          Remove from Toolbar
        </Dropdown.Item>
        <Dropdown.Item>Reorder</Dropdown.Item>
        <Dropdown.Item>Report Tool</Dropdown.Item>
        <Dropdown.Item>Unslot</Dropdown.Item>
      </Dropdown>
    </div>
  ) : null;
}

export default ToolCard;
