import React, { useState, useEffect, useContext } from "react";
import classes from "./product-info.module.css";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as EliteIcon } from "src/public/svg/Sub_Crown.svg";
import { ReactComponent as ProfessionalIcon } from "src/public/svg/Sub_Spark.svg";
import { ReactComponent as PinIcon } from "src/public/svg/Sub_Spark.svg";

import { UserSessionContext } from "src/contexts/UserSessionContext";

function ProductInfo({ productData }) {
  const { userType } = useContext(UserSessionContext);

  return productData != null ? (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>{productData.title}</h4>
        <div>
          {productData.subscription === "elite" ? (
            <div className={classes.subscriptionelite}>
              <EliteIcon /> <label>Elite plan</label>
            </div>
          ) : productData.subscription === "professional" ? (
            <div className={classes.subscriptionprof}>
              <ProfessionalIcon />
              <label>Pro plan</label>
            </div>
          ) : null}
        </div>
      </div>

      <div className={classes.metrics}>
        <div className={classes.ratings}>
          {[...Array(productData.rating)].map((e, i) => (
            <StarFillIcon className={classes.ratingsfill} key={i} />
          ))}
          {[...Array(5 - productData.rating)].map((e, i) => (
            <StarEmptyIcon className={classes.ratingsblank} key={i} />
          ))}
          <label>{productData.rating}</label>
        </div>
        <div className={classes.ratingdetails}>
          <label>{productData.ratingscount} ratings</label>
          <label>{productData.reviewscount} reviews</label>
        </div>
      </div>
      {productData.features != null ? (
        <>
          <h4>Key Features</h4>
          <div className={classes.features}>
            <ul>
              {JSON.parse(productData.features).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
      {userType == "dev" && (
        <button className={classes.explorebutton}>Explore</button>
      )}
      {userType == "user" && (
        <div className={classes.pinicon}>
          <button className={classes.explorebutton}>Subscribe</button>
          <PinIcon />
        </div>
      )}
    </div>
  ) : null;
}

export default ProductInfo;
