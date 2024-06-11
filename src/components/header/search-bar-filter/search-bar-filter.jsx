import React from "react";
import classes from "./search-bar-filter.module.css";
import { useState } from "react";
import categoriesData from "src/data/categories.json";
import industriesData from "src/data/industries.json";
import tagsData from "src/data/tags.json";

import SearchBar from "src/components/data-input/search-bar/search-bar";
import Dropdown from "src/components/data-input/dropdown/dropdown";
import { ReactComponent as ResetIcon } from "src/public/svg/Reset.svg";

function HeaderSearchBar() {
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState("");
  const [selectedTags, setSelectedTags] = useState("");

  const [searchData, setSearchData] = useState("");

  function resetFilters() {
    setSelectedCategories("");
    setSelectedIndustries("");
    setSelectedTags("");
    setSearchData("");
  }
  return (
    <div className={classes.headersearch}>
      <div className={classes.search}>
        <SearchBar searchData={searchData} setSearchData={setSearchData} />
      </div>
      <div className={classes.filters}>
        <div className={classes.filter}>
          <Dropdown
            options={categoriesData}
            selectedOption={selectedCategories}
            setSelectedOption={setSelectedCategories}
            placeholder="Categories"
          />
        </div>
        <div className={classes.filter}>
          <Dropdown
            options={industriesData}
            selectedOption={selectedIndustries}
            setSelectedOption={setSelectedIndustries}
            placeholder="Industries"
          />
        </div>{" "}
        <div className={classes.filter}>
          <Dropdown
            options={tagsData}
            selectedOption={selectedTags}
            setSelectedOption={setSelectedTags}
            placeholder="Tags"
          />
        </div>
      </div>

      <ResetIcon onClick={resetFilters} className={classes.reseticon} />
    </div>
  );
}

export default HeaderSearchBar;
