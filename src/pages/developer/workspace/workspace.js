import { useState } from "react";
import ToolCard from "src/components/tool-card/tool-card";
import toolsDatajson from "src/data/tools.json";
import classes from "./workspace.module.css";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";
import EmptyWorkspace from "src/components/workspace-components/empty-workspace/empty-workspace";

function WorkspacePage() {
  const [activeTab, setActiveTab] = useState("tools");
  const [editTools, setEditTools] = useState(false);

  let toolsData = toolsDatajson.toolsData;

  return (
    <div className={classes.container}>
      <div className={classes.navtab}>
        <button
          className={
            activeTab === "tools"
              ? classes.navbuttonselected
              : classes.navbutton
          }
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
        <button
          className={
            activeTab === "workspace"
              ? classes.navbuttonselected
              : classes.navbutton
          }
          onClick={() => setActiveTab("workspace")}
        >
          Workspace
        </button>
      </div>

      <div className={classes.formcontainer}>
        {activeTab === "tools" &&
          (Array.isArray(toolsData) && toolsData.length > 0 ? (
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
          ) : null)}
        {activeTab === "workspace" && <EmptyWorkspace></EmptyWorkspace>}
      </div>
    </div>
  );
}

export default WorkspacePage;
