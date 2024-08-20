import { useContext, useEffect, useState } from "react";

import classes from "./product-info.module.css";

import { UserSessionContext } from "src/contexts/UserSessionContext";

function ProductInfo({ productData }) {
  const { userType } = useContext(UserSessionContext);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    console.log("NNNNNN" + "productData");
    console.log(Object.keys(productData).length);
    console.log(productData);
  });

  return productData != null && Object.keys(productData).length != 0 ? (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>{productData.title}</h4>

        {/* {productData.subscription === "elite" ? (
          <div className={classes.subscriptionelite}>
            <EliteIcon />
          </div>
        ) : productData.subscription === "professional" ? (
          <div className={classes.subscriptionprof}>
            <ProfessionalIcon />
          </div>
        ) : productData.subscription === "essential" ? (
          <div className={classes.subscriptionessential}>
            <EssentialIcon />
          </div>
        ) : null} */}
      </div>
      <label className={classes.summary}>{productData.summary}</label>

      <div className={classes.subscriptions}>
        {productData.free === true ? (
          <>
            <label className={classes.subscriptionboxfree}>Free Trial</label>
          </>
        ) : null}
        {productData.paid === true ? (
          <>
            <label className={classes.subscriptionboxpaid}>Subscription</label>
          </>
        ) : null}
      </div>
      {/* <div className={classes.metrics}>
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
          <label>{productData.ratingscount} Ratings</label>
          <label>{productData.reviewscount} Reviews</label>
        </div>
      </div>

      <div className={classes.stats}>
        <div className={classes.stat}>
          <VisitIcon />
          <label>{productData.visits} Visits</label>
        </div>
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
      </div> */}

      <hr className={classes.divider} />
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
      <hr className={classes.divider} />

      <button className={classes.explorebutton}>Access</button>
      {/* {userType == "user" && (
        <button className={classes.explorebutton}>Subscribe</button>
      )} */}
    </div>
  ) : null;
}

export default ProductInfo;
