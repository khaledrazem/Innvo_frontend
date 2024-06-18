import React, { useState, useEffect, useContext } from "react";
import classes from "./review-card.module.css";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";
import { ReactComponent as TickIcon } from "src/public/svg/Tick.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import replyDatajson from "src/data/ratingreply.json";

import { Avatar, AvatarGroup, Badge } from "rsuite";
import ReviewReplyCard from "src/components/review-reply-card/review-reply-card";

function ReviewCard({
  reviewData,
  commentPlaceholder = "Great app, thanks for posting",
  toolIcon,
}) {
  let replyData = replyDatajson;

  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

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
            <p>{reviewData.reviewer.jobtitle}</p>
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
        <div className={liked ? classes.likeactive : classes.like}>
          <LikeIcon onClick={() => setLiked(true)} />
          <label>{reviewData.likes} Likes</label>
        </div>

        <button onClick={() => setExpanded(!expanded)}>
          {reviewData.replies} Replies{" "}
          <UpDownArrow className={expanded ? classes.expandedarrow : null} />
        </button>

        {reviewData.likedByOwner && (
          <div className={classes.ownerlike}>
            <AvatarGroup>
              <Badge content={<TickIcon />}>
                <Avatar
                  circle
                  src={reviewData.reviewer.profileimg.url || ""}
                  alt={<UserIcon />}
                ></Avatar>
              </Badge>
            </AvatarGroup>
          </div>
        )}
      </div>

      {expanded ? (
        <div className={classes.commentsection}>
          <div className={classes.divider} />
          <textarea placeholder={commentPlaceholder}></textarea>
          <div className={classes.buttons}>
            <button className={classes.cancelbutton}>Cancel</button>
            <button className={classes.replybutton}>Reply</button>
          </div>
          <div className={classes.replies}>
            {replyData.slice(0, 10).map((reply) => {
              return <ReviewReplyCard replyData={reply} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}

export default ReviewCard;
