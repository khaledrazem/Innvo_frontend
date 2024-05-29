import React, {useEffect, useState} from 'react';
import classes from './nav-button.module.css';
import { Link, useResolvedPath, useMatch, matchPath,useLocation } from 'react-router-dom';

function NavButton({text='button', href='./', icon=null }) {

  const [currentPage, setCurrentPage] = useState(false);

  let location = useLocation();


      useEffect(() => {
      
        setCurrentPage(location.pathname.includes(href))
      }, [location]);

    return (
      <Link className={classes.navlink}  to={href}>
        <div  className={currentPage ? classes.selectedcontainer : classes.container }>

            {icon && icon !== null ? icon: null}
            <div className= {classes.buttondefault }>{text}</div>

      </div>
      </Link >
    );
}

export default NavButton