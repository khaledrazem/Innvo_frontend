import { useEffect, useState } from "react";
import { Pagination } from "rsuite";
import ToolIcon from "src/components/tool-icon/tool-icon";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";
import classes from "./tool-slider.module.css";

function ToolSlider({
  titleText = null,
  toolData,
  itemsPerPage = 18,
  pagination = true,
  bottomnav = false,
  dottednav = true,
  edit,

  onDragStart,
}) {
  const totalPages = Math.min(3, Math.ceil(toolData.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  let currentTools = toolData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    console.log(currentTools);
    console.log(toolData);

    currentTools = toolData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [toolData]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    console.log(currentTools);
    console.log(toolData);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    console.log(currentTools);
    console.log(toolData);
  };

  return (
    <div className={classes.productpagination}>
      <div className={classes.header}>
        <label>{titleText}</label>
      </div>
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
          {currentTools.map((tool, index) => (
            <li
              key={index}
              data-position={index}
              onDragStart={(e) => onDragStart(e, tool)}
              className={classes.iconcontainer}
            >
              <ToolIcon key={index} toolData={tool} edit={edit} />
            </li>
          ))}
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
            total={currentTools.length / itemsPerPage}
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

export default ToolSlider;
