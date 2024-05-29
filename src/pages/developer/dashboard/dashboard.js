import classes from "./dashboard.module.css";
import AnalyticBubble from "src/components/analytic-bubble/analytic-bubble";
import analDatajson from "src/data/analytics.json";
import Dropdown from "src/components/data-input/dropdown/dropdown";
import { useState } from "react";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import DateBarChart from "src/components/date-bar-chart/date-bar-chart";
import AddGoal from "src/components/goal-components/add-goal/add-goal";
import EditGoal from "src/components/goal-components/edit-goal/edit-goal";
import GoalProgress from "src/components/goal-components/goal-progress/goal-progress";

function DashboardPage() {
  let analyticsData = analDatajson.analytics;

  const [yearCategory, setYearCategory] = useState("users");
  const [goalCategory, setGoalCategory] = useState(null);

  const [goalEdit, setGoalEdit] = useState(false);


  function handleGoalSubmit(data) {
    console.log(data)
    analyticsData.goal = {
      "type": data.goalCategory,
      "startingValue": analyticsData.overview[goalCategory],
      "goalValue": data.goalValue,
      "startingDate": data.goalStartDate,
      "deadline": data.goalDeadline
    }
    console.log(analyticsData)
    setGoalEdit(!goalEdit);
  }
  return (
    <div className={classes.container}>
      <div className={classes.overviewbubble}>
        <h4>Analytics Overview</h4>
        <div className={classes.baseanalyticsrow}>
          <AnalyticBubble
            mainFigure={analyticsData.overview.users}
            label={"Active Users"}
            subLabel={"10% Increase from last month"}
            uptick={true}
          />
          <AnalyticBubble
            mainFigure={analyticsData.overview.slots}
            label={"Current Slots"}
            subLabel={"17% Increase from last month"}
            uptick={true}
          />
          <AnalyticBubble
            mainFigure={analyticsData.overview.visits}
            label={"Website Visits"}
            subLabel={"86% Decrease from last month"}
          />
          <AnalyticBubble
            mainFigure={analyticsData.overview.revenue}
            label={"Total Revenue"}
            subLabel={"99% Decrease from last month"}
          />
        </div>
        <div className={classes.divider}></div>

        <div className={classes.yearanalytics}>
          <div className={classes.dropdown}>
            <Dropdown
              options={[
                { id: 1, displayName: "users" },
                { id: 2, displayName: "slots" },
                { id: 3, displayName: "visits" },
                { id: 4, displayName: "revenue" },
              ]}
              returnedKey="displayName"
              selectedOption={yearCategory}
              setSelectedOption={setYearCategory}
            />
            <div className={classes.dropdownstat}>
              <UserIcon />
              <h1>
                {analyticsData.yearlyStats.users.reduce(
                  (acc, currentVal) => acc + currentVal,
                  0
                )}
              </h1>
            </div>
          </div>
          <DateBarChart data={analyticsData.yearlyStats[yearCategory]}/>
        </div>
        <div className={classes.divider}></div>
        {analyticsData.goal ? 
        <GoalProgress analyticsData={analyticsData}/>
        : goalEdit ? (
          <EditGoal analyticsData={analyticsData} onOutputSubmit={handleGoalSubmit}/>
        ) : (
         <AddGoal setEdit={setGoalEdit} />
        )}
      </div>
      <br/> <br/>
    </div>
  );
}

export default DashboardPage;
