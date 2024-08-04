import classes from "./empty-workspace.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";

function EmptyWorkspace() {
  return (
    <div className={classes.container}>
      {/* <Link className={classes.productlink} to={"/marketplace/my-tools/new"} /> */}

      <div className={classes.placeholder}>
        <AddIcon />

        <h5>Create Your Workspace</h5>
        <label>Organize and Optimize Your Workflow</label>
        <p>
          Set up your personalized workspace to seamlessly integrate and manage
          your tools.
          <br /> Create tasks, track progress, and collaborate efficiently to
          boost your productivity and achieve your goals. <br />
          This is your space to streamline operations and enhance your workflow.
        </p>
      </div>
    </div>
  );
}

export default EmptyWorkspace;
