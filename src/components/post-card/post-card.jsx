import { useEffect, useState } from "react";
import { ReactComponent as CommentIcon } from "src/public/svg/Comment.svg";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import { ReactComponent as DotsIcon } from "src/public/svg/Dots Option.svg";

import classes from "./post-card.module.css";

function PostCard({ postData }) {
  useEffect(() => {
    console.log(123);
    console.log(postData);
  }, [postData]);

  return postData != null ? (
    <div className={classes.container}>
      <div className={classes.information}>
        <h6>{postData.title}</h6>
        <label>{postData.description}</label>
        <div className={classes.interactions}>
          <div className={classes.like}>
            <LikeIcon />
            <label>{postData.likes} Likes</label>
          </div>
          <div className={classes.dividervertical} />
          <div className={classes.comment}>
            <CommentIcon />
            <label>{postData.comments} Comments</label>
          </div>
        </div>
      </div>
      {postData.media?.images && postData.media.images.length > 0 ? (
        <div className={classes.mediaframe}>
          <img src={postData.media?.images[0]} />
        </div>
      ) : null}
      <div className={classes.dotsmenu}>
        <DotsIcon />
      </div>
    </div>
  ) : null;
}

export default PostCard;
