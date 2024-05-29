import classes from "./test.module.css";
import AnalyticBubble from "src/components/analytic-bubble/analytic-bubble";
import analDatajson from "src/data/analytics.json";

function TestPage() {
  let analyticsData = analDatajson.analytics;



  return (
    <div className={classes.container}>
            <AnalyticBubble
            mainFigure={analyticsData.overview.users}
            label={"Active Users"}
            subLabel={"10% Increase from last month"}
            uptick={true}
          />
         
    </div>
  );
}

export default TestPage;
