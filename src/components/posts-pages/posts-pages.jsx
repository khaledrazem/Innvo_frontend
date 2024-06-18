import React, { useState, useEffect } from "react";
import classes from "./posts-pages.module.css";
import ratingDatajson from "src/data/postdata.json";
import { Pagination } from "rsuite";
import PostCard from "src/components/post-card/post-card";
import SearchBar from "src/components/data-input/search-bar/search-bar";

function PostsPage({ productId, itemsPerPage = 10, setSelectedPost }) {
  let reviewData = ratingDatajson;

  const [currentPage, setCurrentPage] = useState(1);

  let currentReviews = reviewData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    currentReviews = reviewData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    console.log(currentReviews);
  }, [reviewData]);

  return (
    <div className={classes.reviewpagination}>
      <div className={classes.reviewpagination}>
        <div className={classes.reviewpagination}>
          <div className={classes.filters}>
            <div className={classes.filtersearch}>
              <SearchBar></SearchBar>
            </div>

            <label className={classes.filterbox}>
              Latest
              <input
                type="radio"
                name="checkbox"
                value="Latest"
                className={classes.circleCheckbox}
              />
            </label>

            <label className={classes.filterbox}>
              Popular
              <input
                type="radio"
                name="checkbox"
                value="Popular"
                className={classes.circleCheckbox}
              />
            </label>
          </div>
        </div>
      </div>

      <div className={classes.paginationcontent}>
        <div className={classes.reviewlist}>
          {currentReviews.map((review, index) => (
            <div
              className={classes.post}
              onClick={() => setSelectedPost(review.id)}
            >
              <PostCard postData={review} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        prev={true}
        next={true}
        total={currentReviews.length / itemsPerPage}
        maxButtons={5}
        ellipsis={true}
        boundaryLinks={true}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default PostsPage;
