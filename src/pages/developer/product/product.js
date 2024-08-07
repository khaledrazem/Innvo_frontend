import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CreateReview from "src/components/create-review/create-review";
import ProductCarousel from "src/components/product-page-components/product-carousel/product-carousel";
import ProductDescription from "src/components/product-page-components/product-description/product-description";
import ProductInfo from "src/components/product-page-components/product-info/product-info";
import ProductReviews from "src/components/product-page-components/product-reviews/product-reviews";
import ProductSlider from "src/components/product-slider/product-slider";
import ReviewPage from "src/components/review-pages/review-pages";
import prodDatajson from "src/data/products.json";
import ratingDatajson from "src/data/ratings.json";
import classes from "./product.module.css";

function ProductPage() {
  const [productData, setProductData] = useState(prodDatajson.products[0]);
  let reviewData = ratingDatajson[0];

  let { state } = useLocation();

  function transformData(data) {
    console.log("VVVVV");
    console.log(data);
    const product = {
      id: 1,
      logo: { url: data.productImages.images.filter((image) => image)[0] },
      title: data.productInfo.title,
      summary: data.productDescription.bio,
      features: JSON.stringify(data.productInfo.features),
      rating: 2,
      downloads: 1234,
      ratingscount: 6435,
      reviewscount: 6435,
      subscription: data.productInfo.subscription,
      description: {
        bio: data.productDescription.bio,
        images: data.productDescription.largeImages,
        labelledImages: data.productDescription.labelledImages.map((item) => ({
          url: item.url,
          label: item.labels,
          type: item.type,
        })),
      },
      faq: data.productFaq.reduce((acc, item) => {
        if (item.question && item.answer) {
          acc.push({
            question: item.question,
            answer: item.answer,
          });
        }
        return acc;
      }, []),
      reviews: {
        totalReviews: 1024,
        averageRating: 4,
        ranking: 124,
        ratings: [],
      },
    };

    console.log("CCCC");
    console.log(product);

    return product;
  }

  useEffect(() => {
    console.log("Aadsdw");

    if (state) {
      setProductData(transformData(state));
    }
    console.log(state);
  }, [state]);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.carouselcotainer}>
          <ProductCarousel
            height={432}
            width={768}
            images={[
              "https://i.ibb.co/yWwNCTL/Image-5.webp",
              "https://i.ibb.co/RSwGKF1/Image-1.jpg",
              "https://i.ibb.co/GkSMPzj/Image-2.webp",
            ]}
          />
        </div>
        <ProductInfo productData={productData}></ProductInfo>
      </div>
      <br /> <br />
      <br />
      <div className={classes.bodies}>
        <ProductDescription
          productName={productData.title}
          productDescription={productData.description}
        />
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
      <div className={classes.productslidercont}>
        <ProductSlider
          titleText={"More From Innovator"}
          productData={prodDatajson.products}
          itemsPerPage={3}
        />
      </div>
      <br /> <br />
      <div className={classes.productslidercont}>
        <ProductSlider
          titleText={"Related Tools"}
          productData={prodDatajson.products}
          itemsPerPage={3}
        />
      </div>
      <br /> <br />
    </div>
  );
}

export default ProductPage;
