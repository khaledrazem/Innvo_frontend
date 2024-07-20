import EmptyTools from "src/components/empty-tools/empty-tools";
import classes from "./my-tools.module.css";
import toolsDatajson from "src/data/tools.json";
import ToolsOverview from "src/components/tools-overview/tools-overview";
import ToolCard from "src/components/tool-card/tool-card";

function MyToolsPage() {
  let toolsData = toolsDatajson.toolsData;

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

export default MyToolsPage;
