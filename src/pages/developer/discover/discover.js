import React, { useContext, useState } from "react";
import InvoCarousel from "src/components/carousel/invo-carousel";
import ProductSlider from "src/components/product-slider/product-slider";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import prodDatajson from "src/data/products.json";
import "src/variables.css";
import classes from "./discover.module.css";

const DiscoverPage = React.memo(() => {
  const [topRated, setTopRated] = React.useState(prodDatajson.products);
  const [mostUsed, setMostUsed] = React.useState(prodDatajson.products);
  const [risingStars, setRisingStars] = React.useState(prodDatajson.products);
  const [noteworthy, setNoteworthy] = React.useState(prodDatajson.products);
  const [explore, setExplore] = React.useState(prodDatajson.products);
  const [expanded, setExpanded] = useState(false);

  const { useBackend } = useContext(UserSessionContext);

  React.useEffect(() => {
    console.log("BACKEND");
    console.log(useBackend);
    if (!useBackend) {
      return;
    }
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/top-rated`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopRated((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/most-used`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMostUsed((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/rising-stars`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRisingStars((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/noteworthy`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNoteworthy((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/explore`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExplore((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.carouselcontainer}>
        <InvoCarousel
          height={536}
          width={2618}
          images={[
            "https://i.ibb.co/zFztgN8/Image-2-3.webp",
            "https://i.ibb.co/xhKZTbB/Image-4.png",
            "https://i.ibb.co/RSwGKF1/Image-1.jpg",
            "https://i.ibb.co/HPXmXpH/Image-5.webp",
          ]}
        />
      </div>
      <div className={classes.productsliderlist}>
        {topRated && topRated.length > 0 ? (
          <ProductSlider
            titleText={"Top Rated"}
            productData={topRated.length > 0 ? topRated : []}
          />
        ) : (
          <p>No top rated products available</p>
        )}

        {mostUsed && mostUsed.length > 0 ? (
          <ProductSlider
            titleText={"Most Used"}
            productData={mostUsed.length > 0 ? mostUsed : []}
          />
        ) : (
          <p>No most used products available</p>
        )}

        {risingStars && risingStars.length > 0 ? (
          <ProductSlider
            titleText={"Rising Stars"}
            productData={risingStars.length > 0 ? risingStars : []}
          />
        ) : (
          <p>No rising stars products available</p>
        )}

        {noteworthy && noteworthy.length > 0 ? (
          <ProductSlider
            titleText={"New and Noteworthy"}
            productData={noteworthy.length > 0 ? noteworthy : []}
          />
        ) : (
          <p>No noteworthy products available</p>
        )}

        <div>
          {explore && explore.length > 0 ? (
            <ProductSlider
              titleText={"Explore"}
              productData={explore.length > 0 ? explore : []}
              pagination={expanded}
              bottomnav={true}
              itemsPerPage={expanded ? 40 : 18}
            />
          ) : (
            <p>No explore products available</p>
          )}

          <div className={classes.explorebutton}>
            {!expanded && (
              <button onClick={() => setExpanded(true)}>View more</button>
            )}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
});

export default DiscoverPage;
