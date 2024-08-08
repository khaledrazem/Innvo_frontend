import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CreateReview from "src/components/create-review/create-review";
import ProductCarousel from "src/components/product-page-components/product-carousel/product-carousel";
import ProductDescription from "src/components/product-page-components/product-description/product-description";
import ProductInfo from "src/components/product-page-components/product-info/product-info";
import ProductReviews from "src/components/product-page-components/product-reviews/product-reviews";
import ProductSlider from "src/components/product-slider/product-slider";
import ReviewPage from "src/components/review-pages/review-pages";
import ratingDatajson from "src/data/ratings.json";
import classes from "./product.module.css";

function ProductPage() {
  const location = useLocation();
  const [productData, setProductData] = useState({});
  const [topRated, setTopRated] = useState([]);
  const [productId, setProductId] = useState(0);
  let reviewData = ratingDatajson[0];

  useEffect(() => {
    setProductId((prev) => parseInt(location.pathname.split("/").pop()));

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

  useEffect(() => {
    if (productId === 0) {
      return;
    }

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/v1/cms/app/get?app_id=${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProductData((prev) => data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [productId]);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.carouselcotainer}>
          <ProductCarousel
            height={432}
            width={768}
            images={productData?.images ? productData.images.map((image) => image.url) : []}
          />
        </div>
        <ProductInfo productData={productData}></ProductInfo>
      </div>
      <br /> <br />
      <br />
      <div className={classes.bodies}>
        <ProductDescription prod={productData} />
        <hr className={classes.divider}></hr>
        {/* <ProductFaq productQuestions={productData.faq} />
        <br /> <br /> <br /> <br /> */}
        <CreateReview />
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <ProductReviews productReviews={productData.reviews} />
        <br /> <br /> <br /> <br />
        <ReviewPage reviewData={reviewData} />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      {/* <ProductPrivacy></ProductPrivacy> 
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}

      {topRated && topRated.length > 0 ? (
        <ProductSlider
          titleText={"More From Innovator"}
          productData={topRated}
          itemsPerPage={3}
        />
      ) : null}
      <br /> <br />
      {topRated && topRated.length > 0 ? (
        <ProductSlider
          titleText={"Related Tools"}
          productData={topRated}
          itemsPerPage={3}
        />
      ) : null}

      <br /> <br />
    </div>
  );
}

export default ProductPage;
