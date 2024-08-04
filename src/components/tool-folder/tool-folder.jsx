import { useState } from "react";
import ToolIcon from "src/components/tool-icon/tool-icon";
import classes from "./tool-folder.module.css";

import { ReactComponent as ExpandIconHover } from "src/public/svg/Maximize_Black.svg";
import { ReactComponent as ExpandIcon } from "src/public/svg/Maximize_White.svg";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import { ReactComponent as UnexpandIconHover } from "src/public/svg/Minimize_Black.svg";
import { ReactComponent as UnexpandIcon } from "src/public/svg/Minimize_White.svg";
import { ReactComponent as RemoveFolderBlack } from "src/public/svg/Remove Folder_Black.svg";
import { ReactComponent as RemoveFolderBlue } from "src/public/svg/Remove Folder_Blue.svg";

function ToolFolder({ folderData, handleDragStart, edit, removeFolder }) {
  const [expanded, setExpanded] = useState(false);
  let currentTools = folderData.tools.slice(0, 4);
  let expandedTools = folderData.tools.slice(0, 12);

  return (
    <div className={expanded ? classes.expandablecontainer : classes.container}>
      <div
        className={
          expanded ? classes.expandedbubblecontainer : classes.bubblecontainer
        }
      >
        {folderData?.tools?.length > 0 ? (
          <>
            {expanded ? (
              <>
                <UnexpandIcon
                  className={classes.expandicon}
                  onClick={() => setExpanded(!expanded)}
                />
                <UnexpandIconHover
                  className={classes.expandiconhover}
                  onClick={() => setExpanded(!expanded)}
                />
              </>
            ) : (
              <>
                <ExpandIcon
                  className={classes.expandicon}
                  onClick={() => setExpanded(!expanded)}
                />
                <ExpandIconHover
                  className={classes.expandiconhover}
                  onClick={() => setExpanded(!expanded)}
                />
              </>
            )}
            {expandedTools.map((tool, index) => (
              <div
                key={index}
                data-position={index}
                onDragStart={(e) => handleDragStart(e, tool, folderData)}
                className={classes.iconcontainer}
              >
                <ToolIcon key={index} toolData={tool} edit={edit} />
              </div>
            ))}
          </>
        ) : (
          <AddIcon className={classes.arrowicon} />
        )}
      </div>
      <div className={classes.containername}>
        {edit ? (
          <>
            {removeFolder && (
              <div
                className={classes.buttoncollection}
                onClick={() => removeFolder(folderData)}
              >
                <RemoveFolderBlack className={classes.foldericon} />
                <RemoveFolderBlue className={classes.foldericonhover} />
              </div>
            )}

            <input
              defaultValue={folderData?.title ? folderData.title : "New Folder"}
              type="text"
              onChange={(e) => console.log(e)}
              required
            />
          </>
        ) : (
          <label>{folderData.title}</label>
        )}
      </div>
    </div>
  );
}

export default ToolFolder;
