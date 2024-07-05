import { useEffect } from "react";
import classes from "./subscriptions.module.css";
import subscriptionsjson from "src/public/text/subscriptions.json";

function SubscriptionsPage() {
  let subscriptions = subscriptionsjson.subscriptions;

  useEffect(() => {
    console.log("subscriptions");

    console.log(subscriptions);
  }, [subscriptions]);

  return (
    <div className={classes.container}>
      <div className={classes.overviewbubble}>
        <div className={classes.header}>
          <h4>Select your </h4>
          <h4>INNVO Subscription</h4>
        </div>
        <label>
          Find the subscription to elevate your development journey and unlock
          your full potential.
        </label>

        <br />
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
                  <h4>{subscriptionData.title}</h4>
                  <div className={classes.labels}>
                    <label>{subscriptionData.target1}</label>
                    <br></br>
                    <label>{subscriptionData.target2}</label>
                  </div>

                  <ul>
                    {subscriptionData.features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                  <button>Price: ${subscriptionData.price}/month</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsPage;
