import { useState } from "react";
import replyDatajson from "src/data/ratingreply.json";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import classes from "./review-card.module.css";

import ReviewReplyCard from "src/components/review-reply-card/review-reply-card";

function ReviewCard({
  reviewData,
  commentPlaceholder = "Great app, thanks for posting",
  toolIcon,
}) {
  let replyData = replyDatajson;

  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(0);

  const formatDate = (timestamp) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(timestamp).toLocaleDateString("en-GB", options);
  };

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
            {/* <p>{reviewData.reviewer.jobtitle}</p> */}
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
      <label className={classes.reviewdate}>
        Reviewed on {formatDate(reviewData.dateCreated)}
      </label>
      <div className={classes.review}>
        <h6>{reviewData.title}</h6>
        <label>{reviewData.body}</label>
      </div>
      <div className={classes.interactions}>
        <div
          onClick={() => setLiked(1)}
          className={liked == 1 ? classes.likeactive : classes.like}
        >
          <LikeIcon />
          <label>{reviewData.likes} Likes</label>
        </div>
        <div
          onClick={() => setLiked(-1)}
          className={liked == -1 ? classes.dislikeactive : classes.dislike}
        >
          <LikeIcon />
          <label>{reviewData.dislikes} Dislikes</label>
        </div>
        {/* {reviewData.likedByOwner && (
          <div className={classes.ownerlike}>
            <AvatarGroup>
              <Badge content={<TickIcon />}>
                <Avatar
                  size="sm"
                  circle
                  src={reviewData.reviewer.profileimg.url || ""}
                  alt={<UserIcon />}
                ></Avatar>
              </Badge>
            </AvatarGroup>
          </div>
        )} */}

        {/* <button onClick={() => setExpanded(!expanded)}>
          {reviewData.replies} Replies{" "}
          <UpDownArrow className={expanded ? classes.expandedarrow : null} />
        </button> */}
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
