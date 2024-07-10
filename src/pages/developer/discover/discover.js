import InvoCarousel from "src/components/carousel/invo-carousel";
import ProductSlider from "src/components/product-slider/product-slider";
import prodDatajson from "src/data/products.json";
import "src/variables.css";
import classes from "./discover.module.css";
import Footer from "src/components/footer/footer";

function DiscoverPage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.carouselcontainer}>
          <InvoCarousel
            height={268}
            width={1265}
            images={[
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
              "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
            ]}
          />
        </div>
        <br />
        <ProductSlider
          titleText={"Top Rated"}
          productData={prodDatajson.products}
        />
        <br /> <br />
        <br /> <br /> <br />
        <ProductSlider
          titleText={"Most Used"}
          productData={prodDatajson.products}
        />
        <br /> <br />
        <br /> <br /> <br />
        <ProductSlider
          titleText={"Rising Stars"}
          productData={prodDatajson.products}
        />
        <br /> <br />
        <br /> <br /> <br />
        <ProductSlider
          titleText={"New and Noteworthy"}
          productData={prodDatajson.products}
        />
        <br /> <br />
        <br /> <br /> <br />
        <ProductSlider
          titleText={"Explore"}
          productData={prodDatajson.products}
          pagination={false}
          itemsPerPage={18}
        />
        <div className={classes.explorebutton}>
          {" "}
          <button>View more</button>
        </div>
        <br />
        <br />
      </div>
      <Footer></Footer>
    </>
  );
}

export default DiscoverPage;
