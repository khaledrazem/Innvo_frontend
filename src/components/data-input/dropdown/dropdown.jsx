import React from "react";
import classes from "./dropdown.module.css";
import { ReactComponent as ArrowIcon } from "src/public/svg/UP-Down Arrow.svg";

function Dropdown({
  name = "dropdown",
  options,
  returnedKey = "id",
  selectedOption,
  setSelectedOption,
  register,
  placeholder = "Select option",
  rules,
}) {
  const handleChange = (event) => {
    if (setSelectedOption && typeof setSelectedOption === "function") {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <div className={classes.dropdowncontainer}>
      <ArrowIcon className={classes.svgicon} />
      <select
        onChange={handleChange ? handleChange : {}}
        {...(register ? register(name, rules) : {})}
        value={selectedOption}
        defaultValue=""
        className={classes.input}
      >
        <option disabled={true} value="">
          {placeholder}
        </option>
        {Array.isArray(options) && options.length > 0
          ? options.map((option) => {
              return (
                <option key={option.id} value={option[returnedKey]}>
                  {option.displayName}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
}

export default Dropdown;
