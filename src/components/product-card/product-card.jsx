import { useContext, useEffect, useState } from "react";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import classes from "./product-card.module.css";

import { ReactComponent as PinIcon } from "src/public/svg/Pin-Black.svg";
import { ReactComponent as BluePinIcon } from "src/public/svg/Pin_Fill.svg";

import { Link } from "react-router-dom";
import { UserSessionContext } from "src/contexts/UserSessionContext";

function ProductCard({ productData }) {
  const { userType } = useContext(UserSessionContext);

  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  function truncateDescription(text) {
    const maxLength = 100;
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
        to={"/marketplace/discover/product/" + productData.id}
      />

      {pinned === true ? (
        <BluePinIcon
          className={classes.pinicon}
          onClick={() => setPinned(!pinned)}
        />
      ) : (
        <PinIcon
          className={classes.pinicon}
          onClick={() => setPinned(!pinned)}
        />
      )}

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
          </div>
          <div className={classes.circledivider}></div>
          <div className={classes.downloads}>
            <label>{productData.downloads} Ratings</label>
          </div>
        </div>
        <div className={classes.subscriptions}>
          {productData.free === true ? (
            <>
              <label className={classes.subscriptionboxfree}>Free</label>
            </>
          ) : null}
          {productData.paid === true ? (
            <>
              <label className={classes.subscriptionboxpaid}>Paid</label>
            </>
          ) : null}
          {productData.category ? (
            <>
              <label className={classes.subscriptionboxcategory}>
                {productData.category}
              </label>
            </>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductCard;
