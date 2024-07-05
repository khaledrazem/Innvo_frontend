import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeveloperIcon } from "src/public/svg/Dev Icon.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Icon.svg";
import classes from "./landing.module.css";

function LandingPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={classes.container}>
      <h1>INNVO</h1>

      <div className={classes.loginchoices}>
        <div
          className={
            selectedUser === "user"
              ? classes.userchoiceselected
              : classes.userchoice
          }
          onClick={() => setSelectedUser("user")}
        >
          <UserIcon />
          <label>User</label>
        </div>

        <div
          className={
            selectedUser === "dev"
              ? classes.userchoiceselected
              : classes.userchoice
          }
          onClick={() => setSelectedUser("dev")}
        >
          <DeveloperIcon />
          <label>Developer</label>
        </div>
      </div>
      {selectedUser == null ? (
        <button disabled>Continue</button>
      ) : (
        <Link to={"/login/sign-in/" + selectedUser}>
          <button>Continue</button>
        </Link>
      )}
    </div>
  );
}

export default LandingPage;
