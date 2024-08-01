import { useContext, useState } from "react";
import SearchBar from "src/components/data-input/search-bar/search-bar";
import ToolSlider from "src/components/tool-slider/tool-slider";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import toolsDatajson from "src/data/tools.json";
import toolsFolderjson from "src/data/toolsfolders.json";

import ToolFolderSlider from "src/components/tool-folder-slider/tool-folder-slider";
import { ReactComponent as EditIcon } from "src/public/svg/Edit.svg";
import classes from "./my-tools.module.css";
function MyToolsPage() {
  const { subscription, subscriptionDays } = useContext(UserSessionContext);

  let toolsData = toolsDatajson.toolsData;
  const [edit, setEdit] = useState(false);
  const [toolsFolderData, setToolsFolderData] = useState(
    toolsFolderjson.toolsFolders
  );

  const handleDragStart = (e, item) => {
    if (!edit) {
      return false;
    }
    e.dataTransfer.setData("text/plain", JSON.stringify({ tool: item }));
  };

  const handleFolderDragStart = (e, tool, folder) => {
    if (!edit) {
      return false;
    }
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ tool: tool, folder: folder })
    );
  };

  const handleDragOver = (e) => {
    if (!edit) {
      return false;
    }
    e.preventDefault();
  };

  const removeToolFromFolder = (parsedData, listToEdit) => {
    if (!edit) {
      return false;
    }
    const draggedTool = parsedData.tool;
    const draggedFolder = parsedData.folder;

    const existingFolderIndex = listToEdit.findIndex(
      (folder) => folder.id === draggedFolder.id
    );

    const existingToolIndex = listToEdit[existingFolderIndex].tools.findIndex(
      (tool) => tool.id === draggedTool.id
    );

    if (existingToolIndex !== -1) {
      const updatedTools = listToEdit[existingFolderIndex].tools.filter(
        (tool, idx) => idx !== existingToolIndex
      );

      const updatedTargetFolder = {
        ...listToEdit[existingFolderIndex],
        tools: updatedTools,
      };

      const updatedFolders = listToEdit.map((folder, idx) =>
        idx === existingFolderIndex ? updatedTargetFolder : folder
      );

      return updatedFolders;
    }
  };

  const handleDrop = (e, target, index) => {
    if (!edit) {
      return false;
    }
    e.preventDefault();

    const targetFolder = toolsFolderData[index];
    console.log(target);
    console.log(targetFolder);
    if (!targetFolder) {
      return;
    }

    let parsedData = JSON.parse(e.dataTransfer.getData("text/plain"));
    const droppedTool = parsedData.tool;

    const existingTool = toolsFolderData[index].tools.find(
      (tool) => tool.id === droppedTool.id
    );

    if (!existingTool) {
      const updatedTools = [...targetFolder.tools, droppedTool];

      const updatedTargetFolder = { ...targetFolder, tools: updatedTools };

      const updatedFolders = toolsFolderData.map((folder, idx) =>
        idx === index ? updatedTargetFolder : folder
      );

      setToolsFolderData(updatedFolders);
      console.log(updatedFolders);

      // if (parsedData.folder) {
      //   const removedItems = removeToolFromFolder(parsedData, updatedFolders);
      //   setToolsFolderData(removedItems);
      // }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.search}>
          <SearchBar placeholder="Search" />
        </div>
        <EditIcon
          onClick={() => setEdit(!edit)}
          className={edit ? classes.editiconblue : classes.editicon}
        />
      </div>
      <div className={classes.folderscontainer}>
        <ToolFolderSlider
          toolFolderData={toolsFolderData}
          setToolFolderData={setToolsFolderData}
          handleDragStart={handleFolderDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          dottednav={false}
          edit={edit}
        />
      </div>
      <div className={classes.toolscontainer}>
        <ToolSlider
          toolData={toolsData}
          onDragStart={handleDragStart}
          dottednav={false}
          edit={edit}
        />
      </div>
    </div>
  );
}

export default MyToolsPage;

const initialDnDState = {
  draggable: false,
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};
