import { Link } from "react-router-dom";
import classes from "./create-workspace.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";

function CreateWorkspace() {
  return (
    <div className={classes.container}>
      <Link className={classes.productlink} to={"/dev/my-tools/new"} />

      <div className={classes.placeholder}>
        <AddIcon />

        <h5>Create Your Workspace</h5>
        <label>Organize and Optimize Your Workflow</label>
        <p>
          Set up your personalized workspace to seamlessly integrate and manage
          your tools. Create tasks, track progress, and collaborate efficiently
          to boost your productivity and achieve your goals. This is your space
          to streamline operations and enhance your workflow.
        </p>
      </div>
    </div>
  );
}

export default CreateWorkspace;
