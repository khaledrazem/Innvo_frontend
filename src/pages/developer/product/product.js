import classes from "./product.module.css";
import ProductCarousel from "src/components/product-page-components/product-carousel/product-carousel";
import ProductInfo from "src/components/product-page-components/product-info/product-info";
import prodDatajson from "src/data/products.json";
import ProductDescription from "src/components/product-page-components/product-description/product-description";
import ProductFaq from "src/components/product-page-components/product-faq/product-faq";
import ProductReviews from "src/components/product-page-components/product-reviews/product-reviews";
import ratingDatajson from "src/data/ratings.json";
import ProductReviewPage from "src/components/product-page-components/product-review-pages/product-review-pages";
import ProductPrivacy from "src/components/product-page-components/product-privacy/product-privacy";
import ProductSlider from "src/components/product-slider/product-slider";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const [productData, setProductData] = useState(prodDatajson.products[0]);
  let reviewData = ratingDatajson[0];

  let { state } = useLocation();

  function transformData(data) {
    const product = {
      id: 1,
      logo: { url: data.productImages.images.filter((image) => image)[0] },
      title: data.productInfo.title,
      summary: data.productDescription.bio,
      features: JSON.stringify(data.productInfo.features.split("\n")),
      rating: 2,
      downloads: 1234, // Example value
      ratingscount: 6435,
      reviewscount: 6435,
      subscription: data.productInfo.subscription,
      description: {
        bio: data.productDescription.bio,
        images: data.productDescription.largeImages.map((url) => ({ url })),
        labelledImages: data.productDescription.labelledImages.map((item) => ({
          url: item.image,
          label: item.labels,
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
        <ProductCarousel
          height={435}
          width={665}
          images={[
            "https://i.ibb.co/s1tZrLB/000000-text-this-is-product.png",
            "https://i.ibb.co/s1tZrLB/000000-text-this-is-product.png",
            "https://i.ibb.co/s1tZrLB/000000-text-this-is-product.png",
          ]}
        />
        <ProductInfo productData={productData}></ProductInfo>
      </div>
      <br /> <br />
      <ProductDescription productDescription={productData.description} />
      <br /> <br />
      <ProductFaq productQuestions={productData.faq} />
      <br /> <br />
      <ProductReviews productReviews={productData.reviews} />
      <br /> <br />
      <ProductReviewPage reviewData={reviewData} />
      <br /> <br />
      <ProductPrivacy></ProductPrivacy>
      <br /> <br />
      <ProductSlider
        titleText={"More From Developer"}
        productData={prodDatajson.products}
        itemsPerPage={3}
      />
      <br /> <br />
      <ProductSlider
        titleText={"Related Tools"}
        productData={prodDatajson.products}
        itemsPerPage={3}
      />
      <br /> <br />
    </div>
  );
}

export default ProductPage;
