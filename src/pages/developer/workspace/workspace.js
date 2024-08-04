import { useState } from "react";
import ToolCard from "src/components/tool-card/tool-card";
import toolsDatajson from "src/data/tools.json";
import classes from "./workspace.module.css";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";
import EmptyWorkspace from "src/components/workspace-components/empty-workspace/empty-workspace";

function WorkspacePage() {
  const [editTools, setEditTools] = useState(false);

  let toolsData = toolsDatajson.toolsData;

  return (
    <div className={classes.container}>
      <div className={classes.formcontainer}>
        {Array.isArray(toolsData) && toolsData.length > 0 ? (
          <div className={classes.toolslist}>
            <EditIcon
              className={
                editTools ? classes.selectedediticon : classes.editicon
              }
              onClick={() => setEditTools(!editTools)}
            />
            {Array.isArray(toolsData) && toolsData.length > 0
              ? toolsData.map((tool) => {
                  return <ToolCard toolData={tool} userEdit={editTools} />;
                })
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default WorkspacePage;
