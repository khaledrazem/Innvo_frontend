import { useState } from "react";
import InvoCarousel from "src/components/carousel/invo-carousel";
import Footer from "src/components/footer/footer";
import ProductSlider from "src/components/product-slider/product-slider";
import prodDatajson from "src/data/products.json";
import "src/variables.css";
import classes from "./discover.module.css";

function DiscoverPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.carouselcontainer}>
          <InvoCarousel
            height={268}
            width={1309}
            images={[
              "https://i.ibb.co/zFztgN8/Image-2-3.webp",
              "https://i.ibb.co/xhKZTbB/Image-4.png",
              "https://i.ibb.co/RSwGKF1/Image-1.jpg",
              "https://i.ibb.co/HPXmXpH/Image-5.webp",
            ]}
          />
        </div>
        <div className={classes.productsliderlist}>
          <ProductSlider
            titleText={"Top Rated"}
            productData={prodDatajson.products}
          />
          <ProductSlider
            titleText={"Most Used"}
            productData={prodDatajson.products}
          />
          <ProductSlider
            titleText={"Rising Stars"}
            productData={prodDatajson.products}
          />
          <ProductSlider
            titleText={"New and Noteworthy"}
            productData={prodDatajson.products}
          />
          <div>
            <ProductSlider
              titleText={"Explore"}
              productData={prodDatajson.products}
              pagination={expanded}
              bottomnav={true}
              itemsPerPage={expanded ? 40 : 18}
            />
            <div className={classes.explorebutton}>
              {!expanded && (
                <button onClick={() => setExpanded(true)}>View more</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default DiscoverPage;
