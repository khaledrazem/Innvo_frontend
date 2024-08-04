import { useEffect } from "react";
import subscriptionsjson from "src/public/text/subscriptions.json";
import classes from "./subscriptions.module.css";

import { ReactComponent as EliteIcon } from "src/public/svg/Sub_Crown.svg";
import { ReactComponent as ProfessionalIcon } from "src/public/svg/Sub_Spark.svg";

function SubscriptionsPage() {
  let subscriptions = subscriptionsjson.subscriptions;

  useEffect(() => {
    console.log("subscriptions");

    console.log(subscriptions);
  }, [subscriptions]);

  return (
    <div className={classes.container}>
      {/* <div className={classes.overviewbubble}> */}
      <div className={classes.header}>
        <h4>Select your </h4>
        <h4>INVVO Subscription</h4>
      </div>
      <label>
        Find the subscription to elevate your development journey and unlock
        your full potential.
      </label>

      <div className={classes.subscriptionrow}>
        {Array.isArray(subscriptions) &&
          subscriptions.length > 0 &&
          subscriptions.map((subscriptionData) => {
            return (
              <div
                className={`${classes.subscriptionbubble} ${
                  subscriptionData.title.toLowerCase() === "professional"
                    ? classes.subscriptionbubbleprofessional
                    : subscriptionData.title.toLowerCase() === "elite"
                    ? classes.subscriptionbubbleelite
                    : null
                }
                `}
              >
                {subscriptionData.title.toLowerCase() === "professional" ? (
                  <ProfessionalIcon />
                ) : subscriptionData.title.toLowerCase() === "elite" ? (
                  <EliteIcon />
                ) : (
                  <EliteIcon />
                )}
                <h4>{subscriptionData.title}</h4>
                <div className={classes.labels}>
                  <label>{subscriptionData.target1}</label>
                  <br />
                  <label>{subscriptionData.target2}</label>
                </div>

                <ul>
                  {subscriptionData.features.map((feature) => {
                    return <li>{feature}</li>;
                  })}
                </ul>
                <button>
                  <label> ${subscriptionData.price}</label>{" "}
                  <label>per month</label>
                </button>
              </div>
            );
          })}
      </div>
      {/* </div> */}
    </div>
  );
}

export default SubscriptionsPage;
