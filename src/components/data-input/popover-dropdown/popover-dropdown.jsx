import { Popover, Whisper } from "rsuite";
import { ReactComponent as ArrowIcon } from "src/public/svg/UP-Down Arrow.svg";
import classes from "./popover-dropdown.module.css";

function PopoverDropdown({
  name = "dropdown",
  options,
  returnedKey = "id",
  selectedOption,
  setSelectedOption,
  register,
  placeholder = "Select option",
  rules,
}) {
  const speaker = (
    <Popover>
      <div className={classes.dropdowngrid}>
        {Array.isArray(options) && options.length > 0 ? (
          <>
            {options.map((option) => (
              <div
                className={classes.griditem}
                onClick={() => setSelectedOption(option)}
                key={option.id}
                value={option[returnedKey]}
              >
                <h4>{option.displayName}</h4>
              </div>
            ))}
            <div
              className={classes.griditem}
              onClick={() => setSelectedOption(null)}
              key="all-option" // Unique key for the "All" option
            >
              <h4>All</h4>
            </div>
          </>
        ) : null}
      </div>
    </Popover>
  );

  return (
    <div className={classes.dropdowncontainer}>
      <Whisper
        placement="bottom"
        trigger={["hover"]}
        controlId="control-id-hover-enterable"
        speaker={speaker}
        enterable
      >
        <button className={classes.dropdownclass}>
          {selectedOption ? selectedOption.displayName : placeholder}
          <ArrowIcon className={classes.svgicon} />
        </button>
      </Whisper>
    </div>
  );
}

export default PopoverDropdown;
