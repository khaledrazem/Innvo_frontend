import { Link } from "react-router-dom";
import classes from "./empty-tools.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";

function EmptyTools() {
  return (
    <div className={classes.container}>
      <Link className={classes.productlink} to={"/dev/my-tools/new"} />

      <div className={classes.placeholder}>
        <AddIcon />

        <h5>Create Your Tool Page</h5>
        <label>Begin Showcasing Your Innovation</label>
        <p>
          Start building your presence on the platform by creating a dedicated
          page for your tool. <br />
          This is your opportunity to highlight what makes your tool unique and
          valuable to potential users.
        </p>
      </div>
    </div>
  );
}

export default EmptyTools;
