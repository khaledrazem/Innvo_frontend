import { Link } from "react-router-dom";
import classes from "./tool-card.module.css";
import { useContext } from "react";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { Dropdown } from "rsuite";

import { ReactComponent as SandwichIcon } from "src/public/svg/Dots Option.svg";

function ToolCard({ toolData, setDraggable, draggable }) {
  const { userType } = useContext(UserSessionContext);

  return toolData != null ? (
    <div
      className={classes.container}
      style={{
        pointerEvents: draggable == "true" ? "none" : "auto",
      }}
    >
      {draggable == "true" && <SandwichIcon className={classes.dragicon} />}
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
        <Dropdown.Item onClick={() => setDraggable("true")}>
          Reorder
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className={classes.toollink} to={"/dev/report"} />
          Report Tool
        </Dropdown.Item>
        <Dropdown.Item>Unslot</Dropdown.Item>
      </Dropdown>
    </div>
  ) : null;
}

export default ToolCard;
