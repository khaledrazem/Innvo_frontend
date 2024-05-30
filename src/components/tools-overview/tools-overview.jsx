import { Link } from "react-router-dom";
import classes from "./tools-overview.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import ToolCard from "src/components/tool-card/tool-card";

function ToolsOverview({ toolsData }) {
  return (
    <div className={classes.container}>
      <div className={classes.headrow}>
        <h2>My Tools Overview</h2>
        <button>Manage</button>
      </div>


      <div className={classes.toolslist}>
        {Array.isArray(toolsData) && toolsData.length > 0
          ? toolsData.map((tool) => {
              return <ToolCard toolData={tool} />;
            })
          : null}
      </div>
      <br/>
      <button className={classes.newbutton}>
      <Link className={classes.productlink} to={"/dev/my-tools/new"} />

        <AddIcon /> Add New Tool
      </button>
    </div>
  );
}

export default ToolsOverview;
