import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "src/public/svg/Social- Facebook.svg";
import { ReactComponent as InstagramIcon } from "src/public/svg/Social- Insta.svg";
import { ReactComponent as LinkedinIcon } from "src/public/svg/Social- Linkedin.svg";
import { ReactComponent as TwitterIcon } from "src/public/svg/Social- X.svg";
import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.signature}>
        <h2>INVVO</h2>
        <label>© 2024 INVVO.</label>
        <label>All rights reserved.</label>
      </div>

      <Link className={classes.subscriptions} to={"/marketplace/subscriptions"}>
        <div>
          <h5>Subscriptions</h5>
          <ul>
            <div className={classes.essential}>
              <li>Essential</li>
            </div>

            <div className={classes.professional}>
              <li>Professional</li>
            </div>

            <div className={classes.elite}>
              <li>Elite</li>
            </div>
          </ul>
        </div>
      </Link>

      <div className={classes.company}>
        <h5>Company</h5>
        <label>About us</label>
        <label>FAQs</label>
        <label>Contact us</label>
      </div>

      <div className={classes.information}>
        <h5>Further Information</h5>
        <label>Terms @ Conditions</label>
        <label> Privacy Policy</label>
      </div>

      <div className={classes.social}>
        <h5>Follow us</h5>
        <div className={classes.socialicons}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
