import { useContext, useEffect, useState } from "react";
import InvoCarousel from "src/components/carousel/invo-carousel";
import ReviewPage from "src/components/review-pages/review-pages";
import postDatajson from "src/data/postdata.json";
import { ReactComponent as CommentIcon } from "src/public/svg/Comment.svg";
import { ReactComponent as LikeIcon } from "src/public/svg/Like.svg";
import classes from "./view-post.module.css";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down_Arrow.svg";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import CreateComment from "../create-comment/create-comment";

function ViewPost({ postID, formData, clearSelectedPost }) {
  const [postData, setPostData] = useState(null);

  const { userType } = useContext(UserSessionContext);

  useEffect(() => {
    // Find post data by matching the id field with the given postID
    const post = postDatajson.find((p) => p.id === postID);
    setPostData(post);
    console.log(postID);
    console.log("Post data found:", post);
  }, [postID]);

  return postData ? (
    <div className={classes.container}>
      <div className={classes.postdisplay}>
        <UpDownArrow
          className={classes.backarrow}
          onClick={() => clearSelectedPost()}
        />
        <h3>{postData.title}</h3>
        <label>{postData.description}</label>
        <div className={classes.postcarousel}>
          <InvoCarousel
            images={postData?.media?.images}
            videos={postData?.media?.videos}
            width={768}
            height={432}
          />
        </div>
      </div>

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

      {userType === "user" && (
        <>
          <div className={classes.addcomment}>
            <CreateComment></CreateComment>
          </div>
        </>
      )}

      <ReviewPage header={false} count={false} searchbar={true}></ReviewPage>
    </div>
  ) : null;
}

export default ViewPost;
