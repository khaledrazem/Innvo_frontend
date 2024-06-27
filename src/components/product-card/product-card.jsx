import React, { useState, useEffect } from "react";
import classes from "./product-card.module.css";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import { ReactComponent as EliteIcon } from "src/public/svg/Sub_Crown.svg";
import { ReactComponent as ProfessionalIcon } from "src/public/svg/Sub_Spark.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { Link } from "react-router-dom";

function ProductCard({ productData }) {

  useEffect(() => {
    console.log("ProductCard productData:", productData);
  }, [productData]);

  function truncateDescription(text) {
    const maxLength = 160;
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }  }

  return productData !== null ? (
    <div className={classes.container}>
      <Link className={classes.productlink}  to={"/dev/discover/product/"+productData.id}/>

      <div>
        {
          productData.subscription_tier === "elite" 
          ? <EliteIcon className={classes.subscriptionelite}/>
          : productData.subscription_tier === "professional" 
            ? <ProfessionalIcon className={classes.subscriptionprof}/>
            : null
        }
      </div>

      <div className={classes.logo}>
        <img src={productData.logo}></img>
      </div>

      <div className={classes.summary}>
        <div className={classes.text}>
          <label className={classes.header}>{productData.title}</label>
          <label className={classes.body}>{truncateDescription(productData.summary)}</label>
        </div>

        <div className={classes.metrics}>
          <div className={classes.ratings}>
            {[...Array(parseInt(productData.rating))].map((e, i) => (
              <StarFillIcon className={classes.ratingsfill} key={i} />
            ))}
            {[...Array(5 - parseInt(productData.rating))].map((e, i) => (
              <StarEmptyIcon className={classes.ratingsblank} key={i} />
            ))}
            <label>{parseInt(productData.rating)}</label>
          </div>
          <div className={classes.downloads}>
            <UserIcon />
            <label>{productData.downloads}</label>
          </div>
        </div>
      </div>

    </div>
  ) : null;
}

export default ProductCard;
