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
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
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
        <br />
        <br />
      </div>
      <Footer></Footer>
    </>
  );
}

export default DiscoverPage;
