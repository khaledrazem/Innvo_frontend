import classes from "./goal-progress.module.css";
import Dropdown from "src/components/data-input/dropdown/dropdown";
import { useEffect, useState } from "react";

function GoalProgress({analyticsData}) {
  const [percentage, setPercentage] = useState(0);
  const [goalCategory, setGoalCategory] = useState(null);

   useEffect(() => {
    console.log(analyticsData)
    if (!analyticsData.goal){
      return;
    }
    setPercentage(analyticsData.overview[analyticsData.goal.type]/analyticsData.goal.goalValue);
    setGoalCategory(analyticsData.goal.type)
  }, [analyticsData])

  return (
    <div className={classes.container}>
    <div className={classes.dropdown}>
     <label>Goal Progress:</label>
     
         <Dropdown
           options={[
             { id: 1, displayName: "users" },
             { id: 2, displayName: "slots" },
             { id: 3, displayName: "visits" },
             { id: 4, displayName: "revenue" },
           ]}
           returnedKey="displayName"
           selectedOption={goalCategory}
           setSelectedOption={setGoalCategory}
         />
       </div>
       <div className={classes.progresscontainer}>
       <div className={classes.progressbar}>
     <div className={classes.bar}>
     <div className={classes.dividers}>

     <div className={classes.dividervertical}></div>
     <div className={classes.dividervertical}></div>
     </div>

       <div
         className={classes.fill}
         style={{ width: `${percentage}%` }}
       ></div>
     </div>
     <h4 className={classes.count}>
       +{parseInt(percentage)}%
     </h4>
   </div>
 </div>
   </div>
  );
}

export default GoalProgress;
