import { useEffect } from "react";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import classes from "./notification-card.module.css";
import { Link } from "react-router-dom";

function NotificationCard({ notificationData }) {
  useEffect(() => {
    console.log(notificationData);
  }, [notificationData]);

  function toLargestTimeUnit(timeCreated) {
    const now = new Date();
    const createdDate = new Date(timeCreated);
    const diffInMs = now - createdDate;

    const minutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    }
  }

  return notificationData != null ? (
    <Link
      className={
        notificationData.seen ? classes.container : classes.unseencontainer
      }
      to={notificationData.href ? notificationData.href : null}
    >
      <div className={classes.image}>
        {notificationData.logo.url ? (
          <img src={notificationData.logo.url} />
        ) : (
          <UserIcon />
        )}
      </div>

      <div className={classes.info}>
        <label>{notificationData.title}</label>
        <p>{notificationData.body}</p>
      </div>

      <label className={classes.time}>
        {notificationData.dateCreated
          ? toLargestTimeUnit(notificationData.dateCreated)
          : null}
      </label>
    </Link>
  ) : null;
}

export default NotificationCard;
