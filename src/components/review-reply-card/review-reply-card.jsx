import { useEffect, useState } from "react";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import { ReactComponent as TickIcon } from "src/public/svg/Tick.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import classes from "./review-reply-card.module.css";

function ReviewReplyCard({ replyData }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    console.log(replyData);
  }, [replyData]);

  return replyData != null ? (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.reviewer}>
          <div className={classes.reviewerimage}>
            {replyData.reviewer.profileimg.url ? (
              <img src={replyData.reviewer.profileimg.url} />
            ) : (
              <UserIcon />
            )}
          </div>

          <div className={classes.reviewerinfo}>
            <label>
              {replyData.reviewer.firstname} {replyData.reviewer.lastname}
              {replyData.likedByOwner && <TickIcon />}
            </label>
            <p>{replyData.body}</p>
            <div className={classes.interactions}>
              <div className={liked ? classes.likeactive : classes.like}>
                <LikeIcon
                  onClick={() => {
                    setDisliked(false);
                    setLiked(true);
                  }}
                />
                <label>{replyData.likes} Likes</label>
              </div>
              <div className={disliked ? classes.likeactive : classes.like}>
                <LikeIcon
                  className={classes.dislike}
                  onClick={() => {
                    setDisliked(true);
                    setLiked(false);
                  }}
                />
                <label>{replyData.dislikes} Disikes</label>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.review}></div>
      </div>
    </div>
  ) : null;
}

export default ReviewReplyCard;
