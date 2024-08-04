import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import { ReactComponent as DeveloperIcon } from "src/public/svg/Dev Icon.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Icon.svg";
import classes from "./landing.module.css";

function LandingPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const { userType, setUserType } = useContext(UserSessionContext);

  function setUser(chosenUser) {
    setSelectedUser(chosenUser);
    setUserType(chosenUser);
  }

  return (
    <div className={classes.container}>
      <h1>INVVO</h1>

      <div className={classes.loginchoices}>
        <div
          className={
            selectedUser === "user"
              ? classes.userchoiceselected
              : classes.userchoice
          }
          onClick={() => setUser("user")}
        >
          <UserIcon />

          <div className={classes.texts}>
            <h4>Users</h4> <label>I Use Products</label>
          </div>
        </div>

        <div
          className={
            selectedUser === "dev"
              ? classes.userchoiceselected
              : classes.userchoice
          }
          onClick={() => setUser("dev")}
        >
          <DeveloperIcon />

          <div className={classes.texts}>
            <h4>Innovators</h4> <label>I Build Products</label>
          </div>
        </div>
      </div>
      {selectedUser == null && userType == null ? (
        <button disabled>Continue</button>
      ) : (
        <Link to={"/login/sign-in"}>
          <button>Continue</button>
        </Link>
      )}
    </div>
  );
}

export default LandingPage;
