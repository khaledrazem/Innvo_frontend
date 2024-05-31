import { Link } from "react-router-dom";
import classes from "./tool-card.module.css";

function ToolCard({ toolData }) {
  return toolData != null ? (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={toolData.logo.url}></img>
      </div>

      <div className={classes.summary}>
        <h2 className={classes.header}>{toolData.title}</h2>
        <div className={classes.status}>
        <label >Active Status </label>
        <div
          className={
            toolData.active ? classes.activeball : classes.inactiveball
          }
        />
      </div>
      </div>
      <button>
        <Link
          className={classes.toollink}
          to={"/dev/my-tools/edit/" + toolData.id}
        />
        Edit Page
      </button>
    </div>
  ) : null;
}

export default ToolCard;
