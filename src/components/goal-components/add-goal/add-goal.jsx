import classes from "./add-goal.module.css";

import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";

function AddGoal({setEdit}) {
 
  return (
    <div className={classes.container} onClick={() => setEdit(prevState => !prevState)}>
      
          <div className={classes.empty} >
            <AddIcon />
            <div className={classes.placeholder}>
              <h5>Set A Goal To Track Your Progress</h5>
              <label>Begin With Selecting your target goal</label>
            </div>
          </div>
       
    </div>
  );
}

export default AddGoal;
