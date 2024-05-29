import EmptyTools from "src/components/empty-tools/empty-tools";
import classes from "./my-tools.module.css";


function MyToolsPage() {

  let toolsData = [];

  return (
    <div className={classes.container}>
       {Array.isArray(toolsData) && toolsData.length > 0 ?
      null: <EmptyTools/> }
      <br/> <br/>
     
    </div>
  );
}

export default MyToolsPage;
