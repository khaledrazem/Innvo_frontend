import React from "react";
import classes from "./analytic-bubble.module.css";
import { ReactComponent as UpArrow } from "src/public/svg/Up Arrow_Blue.svg";

function AnalyticBubble({ mainFigure, label, subLabel, uptick = false }) {
  return mainFigure != null ? (
    <div className={uptick? classes.containeruptick : classes.container}>
      {uptick? <UpArrow/> : null}
      <h3>{mainFigure}</h3>
      <label>{label}</label>
      <a>{subLabel}</a>
    </div>
  ) : null;
}

export default AnalyticBubble;
