import { useContext } from "react";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as EliteLogo } from "src/public/svg/Logo_Crown.svg";
import { ReactComponent as ProfessionalLogo } from "src/public/svg/Logo_Spark.svg";
import classes from "./logo.module.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  const { subscription } = useContext(UserSessionContext);

  return (
    <div className={classes.logo}>
      <a className={classes.link} onClick={() => navigate("/dev")} />
      {subscription == "elite" ? (
        <EliteLogo />
      ) : subscription == "professional" ? (
        <ProfessionalLogo />
      ) : (
        <label>INNVO</label>
      )}
    </div>
  );
}

export default Logo;
