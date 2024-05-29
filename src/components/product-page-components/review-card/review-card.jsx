import React, { useState, useEffect } from "react";
import classes from "./review-card.module.css";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import { ReactComponent as HelpedIcon } from "src/public/svg/Helped_Star.svg";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";

function ReviewCard({ reviewData }) {
  useEffect(() => {
    console.log(reviewData);
  }, [reviewData]);

  return reviewData != null ? (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.reviewer}>
          <div className={classes.reviewerimage}>
            {reviewData.reviewer.profileimg.url ? (
              <img src={reviewData.reviewer.profileimg.url} />
            ) : (
              <UserIcon />
            )}
          </div>

          <div className={classes.reviewerinfo}>
            <label>
              {reviewData.reviewer.firstname} {reviewData.reviewer.lastname}
            </label>
            <a>{reviewData.reviewer.jobtitle}</a>
          </div>
        </div>
        <div className={classes.ratings}>
          {[...Array(reviewData.rating)].map((e, i) => (
            <StarFillIcon className={classes.ratingsfill} key={i} />
          ))}
          {[...Array(5 - reviewData.rating)].map((e, i) => (
            <StarEmptyIcon className={classes.ratingsblank} key={i} />
          ))}
          <label>{reviewData.rating}</label>
        </div>
      </div>

      <div className={classes.review}>
        <h6>{reviewData.title}</h6>
        <label>{reviewData.body}</label>
      </div>
      <div className={classes.interactions}>
        <LikeIcon />
        <label>{reviewData.likes} Likes</label>
        <HelpedIcon />
        <label>{reviewData.helped} Helped</label>
        <button>
          More <UpDownArrow />
        </button>
      </div>
    </div>
  ) : null;
}

export default ReviewCard;
