import React, { useState, useEffect, useContext } from "react";
import classes from "./product-card.module.css";
import { ReactComponent as UserIcon } from "src/public/svg/User Inputs.svg";
import { ReactComponent as EliteIcon } from "src/public/svg/Sub_Crown.svg";
import { ReactComponent as ProfessionalIcon } from "src/public/svg/Sub_Spark.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";

import { ReactComponent as PinIcon } from "src/public/svg/Pin-Black.svg";
import { ReactComponent as BluePinIcon } from "src/public/svg/Pin-Blue.svg";

import { Link } from "react-router-dom";
import { UserSessionContext } from "src/contexts/UserSessionContext";

function ProductCard({ productData }) {
  const { userType } = useContext(UserSessionContext);

  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  function truncateDescription(text) {
    const maxLength = 128;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return productData != null ? (
    <div className={classes.container}>
      <Link
        className={classes.productlink}
        to={"/dev/discover/product/" + productData.id}
      />

      {userType === "user" ? (
        pinned === true ? (
          <BluePinIcon
            className={classes.pinicon}
            onClick={() => setPinned(!pinned)}
          />
        ) : (
          <PinIcon
            className={classes.pinicon}
            onClick={() => setPinned(!pinned)}
          />
        )
      ) : null}

      <div className={classes.logo}>
        <img src={productData.logo.url}></img>
      </div>

      <div className={classes.summary}>
        <div className={classes.text}>
          <label className={classes.header}>{productData.title}</label>
          <label className={classes.body}>
            {truncateDescription(productData.summary)}
          </label>
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
          <div className={classes.downloads}>
            <UserIcon />
            <label>{productData.downloads}</label>
          </div>
          {productData.subscription === "elite" ? (
            <EliteIcon className={classes.subscriptionelite} />
          ) : productData.subscription === "professional" ? (
            <ProfessionalIcon className={classes.subscriptionprof} />
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductCard;
