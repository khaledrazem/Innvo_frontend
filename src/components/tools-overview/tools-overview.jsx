import { Link } from "react-router-dom";
import classes from "./tools-overview.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";

import ToolCard from "src/components/tool-card/tool-card";

function ToolsOverview({ toolsData }) {
  return (
    <div className={classes.container}>
      {Array.isArray(toolsData) && toolsData.length > 0
        ? toolsData.map((tool) => {
            return <ToolCard toolData={tool} />;
          })
        : null}
    </div>
  );
}

export default ToolsOverview;
