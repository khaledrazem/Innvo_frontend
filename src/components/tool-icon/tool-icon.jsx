import { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as SandwichIcon } from "src/public/svg/Dots Option.svg";
import classes from "./tool-icon.module.css";

function ToolIcon({ toolData, setDraggable, draggable, edit }) {
  const { userType } = useContext(UserSessionContext);

  return toolData != null ? (
    <Dropdown
      disabled={!edit}
      renderToggle={(props, ref) => (
        <div
          className={classes.container}
          style={{
            pointerEvents: draggable == "true" ? "none" : "auto",
          }}
        >
          <div
            className={classes.logo}
            onClick={
              edit && toolData?.externalUrl
                ? undefined
                : () => {
                    window.location.href = toolData.externalUrl;
                  }
            }
          >
            {edit && (
              <div className={classes.sandwichicon}>
                <SandwichIcon {...props} ref={ref} />
              </div>
            )}

            <img src={toolData.logo.url}></img>
          </div>

          <h2 className={classes.header}>{toolData.title}</h2>
        </div>
      )}
    >
      <Dropdown.Item className={classes.option}>
        Remove from Toolbar
      </Dropdown.Item>
      <Dropdown.Item>
        <Link className={classes.toollink} to={"/marketplace/report"} />
        Report Tool
      </Dropdown.Item>
      <Dropdown.Item>Add to Toolbar</Dropdown.Item>
    </Dropdown>
  ) : null;
}

export default ToolIcon;
