import React, { useEffect, useState } from "react";
import classes from "./edit-goal.module.css";
import Dropdown from "src/components/data-input/dropdown/dropdown";
import { ReactComponent as AddIcon } from "src/public/svg/Add.svg";
import LabelledTextbox from "src/components/data-input/labelled-textbox/labelled-textbox";
import LabelledDatePicker from "src/components/data-input/labelled-datepicker/labelled-datepicker";
import { useForm } from "react-hook-form";

function EditGoal({ analyticsData, setOutputData, onOutputSubmit }) {
  const { register, getValues , handleSubmit, setValue, watch, reset,  formState: { errors } } = useForm({
    defaultValues: {
      goalCategory: "users",
      goalStartDate: new Date().toISOString().split("T")[0],
    },
  });
  const watchGoalCategory = watch("goalCategory");
 

  const onSubmit = (data) => {
    if(Object.keys(errors).length != 0){
//TODO: toast error
    }
    
    console.log(data);
    if (setOutputData) {
      setOutputData(data);
    }
    if (onOutputSubmit) {
      onOutputSubmit(data);
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.input}>
        <div className={classes.dropdown}>
          <Dropdown
            name="goalCategory"
            returnedKey="displayName"
            options={[
              { id: 1, displayName: "users" },
              { id: 2, displayName: "slots" },
              { id: 3, displayName: "visits" },
              { id: 4, displayName: "revenue" },
            ]}
            register={register}
            rules={{ required: "Please select a category" }}
          />
                {errors.goalCategory && <p>{errors.goalCategory.message}</p>}

        </div>
        <div className={classes.value}>
          <div className={classes.valuecurrent}>
            <div className={classes.titleheader}>
              <h5>Current</h5>
              <div className={classes.dividervertical}></div>
            </div>
           
            <div className={classes.userlabel}>
            <label>{analyticsData.overview[watchGoalCategory]} {watchGoalCategory}</label>
            </div>
          </div>
          <LabelledTextbox
            name="goalValue"
            placeholder="Enter goal"
            title="Goal"
            register={register}
            postfix={watchGoalCategory}
            rules={{ required: "Please enter a goal value", valueAsNumber: true, min: analyticsData.overview[watchGoalCategory] }} 
          />
        </div>
        <div className={classes.date}>
          <LabelledDatePicker
            name="goalStartDate"
            title="Start"
            register={register}
            rules={{ required: "Please select a start date" }} 
          />
 
          <LabelledDatePicker
            name="goalDeadline"
            title="End"
            register={register}
            rules={{ required: "Please select an end date",
            min: {
              value: getValues("goalStartDate"), 
              message: "End date must be after today",
            },
             }}
          />

        </div>
        
      </div>
      
      <div className={classes.submit}>
        <AddIcon />
        <h5>Set Goal</h5>
        <button type="submit">Submit</button>
        
      </div>
    </form>
  );
}

export default EditGoal;
