import { Link } from "react-router-dom";
import classes from "./workspace-overview.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";

import ToolCard from "src/components/tool-card/tool-card";

function WorkspaceOverview({ toolsData }) {
  return (
    <div className={classes.container}>
      <div className={classes.headrow}>
        <h2>My Tools Overview</h2>
        <EditIcon />
      </div>

      <div className={classes.toolslist}>
        {Array.isArray(toolsData) && toolsData.length > 0
          ? toolsData.map((tool) => {
              return <ToolCard toolData={tool} />;
            })
          : null}
      </div>
      <br />
      <button className={classes.newbutton}>
        <Link
          className={classes.productlink}
          to={"/marketplace/my-tools/new"}
        />
        <AddIcon /> Add New Tool
      </button>
    </div>
  );
}

export default WorkspaceOverview;
