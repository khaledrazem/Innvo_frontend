import React, { useState, useEffect } from "react";
import classes from "./review-pages.module.css";
import ratingDatajson from "src/data/ratings.json";
import { Pagination } from "rsuite";
import ReviewCard from "src/components/review-card/review-card";

function ReviewPage({ productId, itemsPerPage = 10 }) {
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
  }, [reviewData]);

  return (
    <div className={classes.reviewpagination}>
      <div className={classes.reviewpagination}>
        <div className={classes.reviewpagination}>
          <div className={classes.filters}>
            <h4>Filters</h4>
            <label className={classes.filterbox}>
              Most Helpful
              <input
                type="radio"
                name="checkbox"
                value="Most Helpful"
                className={classes.circleCheckbox}
              />
            </label>

            <label className={classes.filterbox}>
              Highest Rating
              <input
                type="radio"
                name="checkbox"
                value="Highest Rating"
                className={classes.circleCheckbox}
              />
            </label>

            <label className={classes.filterbox}>
              Most Recent
              <input
                type="radio"
                name="checkbox"
                value="Most Recent"
                className={classes.circleCheckbox}
              />
            </label>
          </div>
        </div>
      </div>

      <div className={classes.reviewnumbers}>
        <label>
          Displaying {(currentPage - 1) * itemsPerPage + 1} -{" "}
          {Math.min(reviewData.length, currentPage * itemsPerPage)} out of{" "}
          {reviewData.length} reviews
        </label>
      </div>

      <div className={classes.paginationcontent}>
        <div className={classes.reviewlist}>
          {currentReviews.map((review, index) => (
            <ReviewCard key={index} reviewData={review} />
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

export default ReviewPage;
