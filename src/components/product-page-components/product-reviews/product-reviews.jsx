import { useState } from "react";
import classes from "./product-reviews.module.css";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";

function ProductReviews({
  productReviews=null
}) {


  return productReviews!=null? (
    <div className={classes.container}>
            <div className={classes.header}>
<h3>Community reviews</h3>
</div>

      <div className={classes.header}>
        <div className={classes.ratings}>
          {[...Array(productReviews.averageRating)].map((e, i) => (
            <StarFillIcon className={classes.ratingsfill} key={i} />
          ))}
          {[...Array(5 - productReviews.averageRating)].map((e, i) => (
            <StarEmptyIcon className={classes.ratingsblank} key={i} />
          ))}
          <label>{productReviews.averageRating}</label>
        </div>
      
        <div className={classes.meta}>
          <span className={classes.ranking}>#{productReviews.ranking} rating</span>
          <div className={classes.divider}></div>
          <span className={classes.totalreviews}>{productReviews.totalReviews} reviews</span>
        </div>
      </div>
      <div className={classes.ratingsbreakdown}>
        {productReviews.ratings.map((rating) => (
          <div key={rating.stars} className={classes.ratingbar}>
            <span className={classes.stars}>{rating.stars} Stars</span>
            <div className={classes.bar}>
              <div
                className={classes.fill}
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <span className={classes.count}>
              {rating.count.toLocaleString()} ({rating.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  ): null;
};

export default ProductReviews;
