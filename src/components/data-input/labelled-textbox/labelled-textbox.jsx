import React from "react";
import classes from "./labelled-textbox.module.css";

function LabelledTextbox({
  title,
  postfix,
  value,
  setValue,
  ref = null,
  placeholder = "Enter text",
  name = "text-value",
  register,
  rules
}) {
  const handleChange = (event) => {
    if (setValue && typeof setValue === "function") {
      setValue(event.target.value);
    }
  };

  return (
    <div className={classes.container}>
      {title ? (
        <div className={classes.titlecontainer}>
          <h5 className={classes.title}>{title}</h5>
          <div className={classes.dividervertical}></div>
        </div>
      ) : null}
      
      <div className={classes.inputlabel}>

      <input
        ref={ref}
        {...(register ? register(name, rules) : {})}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
        className={classes.userinput}
      />
      {postfix ? <span className={classes.postfix}>{postfix}</span> : null}
      </div>
    </div>
  );
}

export default LabelledTextbox;
