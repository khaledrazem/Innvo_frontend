import React, { useContext } from "react";
import classes from "./logo.module.css";
import { UserData } from "src/interfaces/UserData";
import PropTypes from "prop-types";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as EliteLogo } from "src/public/svg/Logo_Crown.svg";
import { ReactComponent as ProfessionalLogo } from "src/public/svg/Logo_Spark.svg";
import { Link } from "react-router-dom";




function Logo() {
  const { subscription } = useContext(UserSessionContext);

  return (
    <div className={classes.logo}>
      <a
          className={classes.link}
          href="/"
        />
      {subscription == "elite" ? (
        <div className={classes.subscriptionelite}>
          <EliteLogo />
        </div>
      ) : subscription == "professional" ? (
        <div className={classes.subscriptionprofessional}>
          <ProfessionalLogo />
        </div>
      ) :  <label>INNVO</label>}
     
    </div>
  );
}

export default Logo;
