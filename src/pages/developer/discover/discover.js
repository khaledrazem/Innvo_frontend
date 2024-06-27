import InvoCarousel from "src/components/carousel/invo-carousel";
import ProductSlider from "src/components/product-slider/product-slider";
import "src/variables.css";
import classes from "./discover.module.css";
import React from "react";

const DiscoverPage = React.memo(() => {
  const [topRated, setTopRated] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/top-rated`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTopRated((prev) => [...data]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <InvoCarousel
        height={225}
        width={1265}
        images={[
          "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
          "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
          "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
        ]}
      />
      {topRated && topRated.length > 0 ? (
        <ProductSlider
          titleText={"Top Rated"}
          productData={topRated.length > 0 ? topRated : []}
        />
      ) : (
        <p>No top rated products available</p>
      )}
      <br /> <br />
      {/* Uncomment other ProductSliders as needed */}
      <div className={classes.explorebutton}>
        <button>View more</button>
      </div>
    </div>
  );
});

export default DiscoverPage;
