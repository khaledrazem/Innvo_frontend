import { useContext, useEffect, useState } from "react";
import classes from "./community.module.css";
import toolcommunityDatajson from "src/data/tools.json";
import { Nav } from "rsuite";
import ToolSelections from "src/components/community-components/tool-selections/tool-selections";
import ratingDatajson from "src/data/ratings.json";
import ReviewPage from "src/components/review-pages/review-pages";
import CreatePost from "src/components/community-components/create-post/create-post";
import PostsPage from "src/components/posts-pages/posts-pages";
import ViewPost from "src/components/community-components/view-post/view-post";
import { UserSessionContext } from "src/contexts/UserSessionContext";

function CommunityPage() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Feed");
  const [selectedPost, setSelectedPost] = useState(null);

  const { userType } = useContext(UserSessionContext);

  let communityData = toolcommunityDatajson.toolsData;
  let reviewData = ratingDatajson[0];

  useEffect(() => {
    setSelectedTool(communityData[0]?.id);
  }, communityData);

  return (
    <div className={classes.container}>
      <ToolSelections
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        toolsData={communityData}
      />

      {userType == "user" && (
        <>
          <div className={classes.nocontainer}>
            {selectedPost ? (
              <ViewPost
                postID={selectedPost}
                clearSelectedPost={() => setSelectedPost(null)}
              />
            ) : (
              <div className={classes.postscontainer}>
                <PostsPage setSelectedPost={setSelectedPost}></PostsPage>
              </div>
            )}
          </div>
        </>
      )}

      {userType == "dev" && (
        <>
          <Nav
            appearance="tabs"
            activeKey={selectedTab}
            onSelect={setSelectedTab}
            className={classes.navstyles}
          >
            <Nav.Item eventKey="Feed">Feed</Nav.Item>
            <Nav.Item eventKey="Reviews">Reviews</Nav.Item>
          </Nav>
          <div className={classes.navcontainer}>
            {selectedTab == "Reviews" ? (
              <ReviewPage reviewData={reviewData} />
            ) : selectedPost ? (
              <ViewPost
                postID={selectedPost}
                clearSelectedPost={() => setSelectedPost(null)}
              />
            ) : (
              <div className={classes.postscontainer}>
                <CreatePost></CreatePost>
                <PostsPage setSelectedPost={setSelectedPost}></PostsPage>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CommunityPage;
