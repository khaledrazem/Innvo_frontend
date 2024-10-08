import ProductCard from "src/components/product-card/product-card";
import prodDatajson from "src/data/products.json";
import classes from "./pins-center.module.css";

function PinsCenterPage() {
  let productData = prodDatajson.products;

  return (
    <div className={classes.container}>
      {productData.map((product, index) => (
        <div className={classes.productcardcont}>
          <ProductCard key={index} productData={product} />
        </div>
      ))}
    </div>
  );
}

export default PinsCenterPage;
