import { useEffect, useState } from "react";
import { Pagination } from "rsuite";
import ToolFolder from "src/components/tool-folder/tool-folder";
import classes from "./tool-folder-slider.module.css";

import { ReactComponent as AddFolderBlack } from "src/public/svg/Add Folder_Black.svg";
import { ReactComponent as AddFolderBlue } from "src/public/svg/Add Folder_Blue.svg";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";

function ToolFolderSlider({
  titleText = null,
  toolFolderData,
  setToolFolderData,
  itemsPerPage = 3,
  pagination = true,
  bottomnav = false,
  dottednav = true,
  edit,

  handleDragStart,
  handleDragOver,
  handleDrop,
}) {
  const totalPages = Math.min(
    3,
    Math.ceil(toolFolderData.length / itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFolders, setCurrentFolders] = useState(
    toolFolderData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  );

  useEffect(() => {
    console.log(currentPage);
    console.log(itemsPerPage);
    setCurrentFolders(
      toolFolderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
    console.log(
      toolFolderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [toolFolderData, currentPage, itemsPerPage]);

  function addFolder() {
    const newFolder = {
      id: 0,
      title: "New Folder",
      tools: [],
    };

    setToolFolderData([newFolder, ...toolFolderData]);
  }

  function removeFolder(folderToRemove) {
    const updatedFolders = toolFolderData.filter(
      (folder) => folder !== folderToRemove
    );
    setToolFolderData(updatedFolders);
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={classes.productpagination}>
      {titleText && (
        <div className={classes.header}>
          <label>{titleText}</label>
        </div>
      )}
      <div className={classes.paginationcontent}>
        <div className={classes.toollist}>
          {pagination && !bottomnav && (
            <UpDownArrow
              style={{
                visibility: currentPage === 1 || !pagination ? "hidden" : null,
              }}
              className={classes.leftarrow}
              onClick={handlePreviousPage}
            >
              &lt;
            </UpDownArrow>
          )}

          {edit && (
            <div
              className={classes.buttoncollection}
              onClick={() => addFolder()}
            >
              {" "}
              <AddFolderBlack className={classes.foldericon} />
              <AddFolderBlue className={classes.foldericonhover} />
            </div>
          )}

          {currentFolders.map((folder, index) => {
            return (
              <div
                key={folder.id}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, folder, index)}
              >
                <ToolFolder
                  edit={edit}
                  folderData={folder}
                  handleDragStart={handleDragStart}
                  removeFolder={removeFolder}
                />
              </div>
            );
          })}
          {pagination && !bottomnav && (
            <UpDownArrow
              style={{
                visibility:
                  currentPage === totalPages || !pagination ? "hidden" : null,
              }}
              className={classes.rightarrow}
              onClick={handleNextPage}
            >
              &gt;
            </UpDownArrow>
          )}
        </div>
        {pagination && !bottomnav && dottednav && (
          <div className={classes.paginationcontrols}>
            <div className={classes.pagedots}>
              {Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={
                    currentPage === index + 1 ? classes.dotactive : classes.dot
                  }
                ></span>
              ))}
            </div>
          </div>
        )}
        {pagination && bottomnav && (
          <Pagination
            prev={true}
            next={true}
            total={toolFolderData.length / itemsPerPage}
            maxButtons={5}
            ellipsis={true}
            boundaryLinks={true}
            limit={itemsPerPage}
            activePage={currentPage}
            onChangePage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default ToolFolderSlider;
