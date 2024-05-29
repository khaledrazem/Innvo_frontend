import React from 'react';
import classes from './search-bar.module.css';
import { CiSearch } from "react-icons/ci";
import {ReactComponent  as SearchIcon} from "src/public/svg/Search.svg";


function SearchBar({searchData, setSearchData, form=null}) {

    const handleChange = (event) => {
        if (setSearchData && typeof setSearchData === 'function') {

        setSearchData(event.target.value);
        }
      };
      

    return (
        <div className={classes.wrapper} >
            <div className={classes.icon}><SearchIcon /></div>
                <input onChange={handleChange} value={searchData} form={form!=null? form : null} type="text" placeholder="Search" id="name" name="name" required minlength="4" className={classes.input}></input>
        </div> 
    );
}

export default SearchBar