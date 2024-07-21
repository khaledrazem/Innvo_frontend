import EmptyTools from "src/components/empty-tools/empty-tools";
import classes from "./my-tools.module.css";
import toolsDatajson from "src/data/tools.json";
import ToolsOverview from "src/components/tools-overview/tools-overview";
import ToolCard from "src/components/tool-card/tool-card";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function MyToolsPage() {
  let toolsData = toolsDatajson.toolsData;
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const [list, setList] = useState(toolsData);

  const setDraggable = (bool) => {
    setDragAndDrop((prevDnD) => ({
      ...prevDnD,
      draggable: bool,
    }));
  };
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      // we spread the previous content
      // of the hook variable
      // so we don't override the properties
      // not being updated
      ...dragAndDrop,

      draggedFrom: initialPosition, // set the draggedFrom position
      isDragging: true,
      originalOrder: list, // store the current state of "list"
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", "");
  };
  const onDragOver = (event) => {
    event.preventDefault();

    // Store the content of the original list
    // in this variable that we'll update
    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the drop area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    // get the element that's at the position of "draggedFrom"
    const itemDragged = newList[draggedFrom];

    // filter out the item being dragged
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    // update the list
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    // since this event fires many times
    // we check if the targets are actually
    // different:
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        // save the updated list state
        // we will render this onDrop
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    // we use the updater function
    // for the "list" hook
    setList(dragAndDrop.updatedOrder);

    // and reset the state of
    // the DnD
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <div className={classes.container}>
      {Array.isArray(list) && list.length > 0
        ? list.map((tool, index) => {
            return (
              <li
                key={index}
                data-position={index}
                draggable={dragAndDrop.draggable}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                className={classes.listcontainer}
              >
                <ToolCard
                  draggable={dragAndDrop.draggable}
                  toolData={tool}
                  setDraggable={setDraggable}
                />
              </li>
            );
          })
        : null}
    </div>
  );
}

export default MyToolsPage;

const initialDnDState = {
  draggable: "false",
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};
