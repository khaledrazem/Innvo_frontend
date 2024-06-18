import { useState } from "react";
import classes from "./tool-selections.module.css";

function ToolSelections({ selectedTool, setSelectedTool, toolsData }) {
  return (
    <div className={classes.container}>
      {toolsData?.map((tool) => {
        return (
          <div
            className={
              selectedTool == tool.id
                ? classes.activetoolcard
                : classes.toolcard
            }
            onClick={() => setSelectedTool(tool.id)}
          >
            <img className={classes.toolimg} src={tool.logo.url}></img>
            <div className={classes.titles}>
              <h5>{tool.title}</h5>
              <label>{tool.active ? "Active" : "Inactive"} Status</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToolSelections;
