import { useState } from "react";
import categoriesData from "src/data/categories.json";
import pricingData from "src/data/pricings.json";
import tagsData from "src/data/tags.json";
import classes from "./search-bar-filter.module.css";

import Dropdown from "src/components/data-input/dropdown/dropdown";
import SearchBar from "src/components/data-input/search-bar/search-bar";
import { ReactComponent as ResetIcon } from "src/public/svg/Reset.svg";

function HeaderSearchBar() {
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedPricing, setSelectedPricing] = useState("");
  const [selectedTags, setSelectedTags] = useState("");

  const [searchData, setSearchData] = useState("");

  function resetFilters() {
    setSelectedCategories("");
    setSelectedPricing("");
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
            options={tagsData}
            selectedOption={selectedTags}
            setSelectedOption={setSelectedTags}
            placeholder="Tags"
          />
        </div>
        <div className={classes.filter}>
          <Dropdown
            options={pricingData}
            selectedOption={selectedPricing}
            setSelectedOption={setSelectedPricing}
            placeholder="Pricing"
          />
        </div>{" "}
      </div>

      <ResetIcon onClick={resetFilters} className={classes.reseticon} />
    </div>
  );
}

export default HeaderSearchBar;
