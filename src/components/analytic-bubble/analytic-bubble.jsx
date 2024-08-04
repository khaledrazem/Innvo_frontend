import React from "react";
import classes from "./analytic-bubble.module.css";
import { ReactComponent as UpArrow } from "src/public/svg/Up Arrow_Blue.svg";

function AnalyticBubble({ mainFigure, label, subLabel, uptick = false }) {
  // Function to round to the nearest thousand
  function roundToNearestThousand(number) {
    if (number != null && number > 1000) {
      return `${Math.round(number / 1000)}K`; // Convert to K format
    }
    return number;
  }

  // Round mainFigure if needed
  const roundedMainFigure = roundToNearestThousand(mainFigure);

  return roundedMainFigure != null ? (
    <div className={uptick ? classes.containeruptick : classes.container}>
      {uptick ? <UpArrow /> : null}
      <h3>{roundedMainFigure}</h3>
      <label>{label}</label>
      <a>{subLabel}</a>
    </div>
  ) : null;
}

export default AnalyticBubble;
