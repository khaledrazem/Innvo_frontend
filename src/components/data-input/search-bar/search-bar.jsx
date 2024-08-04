import { ReactComponent as SearchIcon } from "src/public/svg/Search.svg";
import classes from "./search-bar.module.css";

function SearchBar({
  searchData,
  setSearchData,
  form = null,
  placeholder = "Search",
}) {
  const handleChange = (event) => {
    if (setSearchData && typeof setSearchData === "function") {
      setSearchData(event.target.value);
    }
  };

  return (
    <div className={classes.wrapper}>
      <SearchIcon className={classes.icon} />
      <input
        onChange={handleChange}
        value={searchData}
        form={form != null ? form : null}
        type="text"
        placeholder={placeholder}
        id="name"
        name="name"
        required
        minlength="4"
        className={classes.input}
      ></input>
    </div>
  );
}

export default SearchBar;
