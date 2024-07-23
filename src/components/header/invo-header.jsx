import { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderSearchBar from "src/components/header/search-bar-filter/search-bar-filter";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import userDatajson from "src/data/profiledata.json";
import classes from "./invo-header.module.css";
import Logo from "./logo/logo";
import ProfileBadge from "./profile-badge/profile-badge";

function InvoHeader({ searchbar = true }) {
  const { userType } = useContext(UserSessionContext);

  return (
    <header className={classes.header}>
      <Logo></Logo>
      {searchbar && <HeaderSearchBar></HeaderSearchBar>}
      {userType === null ? (
        <button className={classes.signinbutton}>
          {" "}
          <Link className={classes.productlink} to={"/login"} />
          Sign In
        </button>
      ) : (
        <ProfileBadge userData={userDatajson}></ProfileBadge>
      )}
    </header>
  );
}

export default InvoHeader;
