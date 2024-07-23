import { useContext, useState } from "react";
import { ReactComponent as PinIcon } from "src/public/svg/Pin-Black.svg";
import { ReactComponent as BluePinIcon } from "src/public/svg/Pin-Blue.svg";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import {
  ReactComponent as EliteIcon,
  ReactComponent as VisitIcon,
} from "src/public/svg/Sub_Crown.svg";
import { ReactComponent as UserIcon } from "src/public/svg/User Icon.svg";

import {
  ReactComponent as EssentialIcon,
  ReactComponent as ProfessionalIcon,
} from "src/public/svg/Sub_Spark.svg";

import classes from "./product-info.module.css";

import { UserSessionContext } from "src/contexts/UserSessionContext";

function ProductInfo({ productData }) {
  const { userType } = useContext(UserSessionContext);
  const [pinned, setPinned] = useState(false);

  return productData != null ? (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>{productData.title}</h4>
        {productData.subscription === "elite" ? (
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
        ) : null}
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
          <label>{productData.ratingscount} Ratings</label>
          <label>{productData.reviewscount} Reviews</label>
        </div>
      </div>

      <div className={classes.stats}>
        <div className={classes.stat}>
          <VisitIcon />
          <label>{productData.visits} Visits</label>
        </div>
        <div className={classes.stat}>
          <UserIcon />
          <label>{productData.subscribers} Subscribers</label>
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
          {userType === "user" ? (
            pinned === true ? (
              <BluePinIcon onClick={() => setPinned(!pinned)} />
            ) : (
              <PinIcon onClick={() => setPinned(!pinned)} />
            )
          ) : null}
        </div>
      )}
    </div>
  ) : null;
}

export default ProductInfo;
