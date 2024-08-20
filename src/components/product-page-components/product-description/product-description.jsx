import { useEffect } from "react";
import "src/variables.css";
import classes from "./product-description.module.css";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
  aspectRatio: width / height,
});

function ProductDescription({ prod = null }) {
  useEffect(() => {
    console.log("prod.description");

    console.log(prod.description);
  }, []);
  return prod !== null ? (
    <div className={classes.container}>
      <div className={classes.descriptiontitle}>
        <h3>What is {prod.title}</h3>
      </div>
      <div className={classes.descriptioncontainer}>
        <div className={classes.bio}>
          <label>{prod.description.bio}</label>
        </div>

        {/* <div className={classes.descriptionimages}>
          {Array.isArray(productDescription.images) &&
          productDescription.images.length > 0
            ? productDescription.images.map((image) => {
                return (
                  <img
                    src={image.url}
                    style={imageStyle(imageWidth, imageHeight)}
                  />
                );
              })
            : null}
        </div>

        <div className={classes.labelledimages}>
          {Array.isArray(productDescription.labelledImages) &&
          productDescription.labelledImages.length > 0
            ? productDescription.labelledImages.map((image) => {
                return (
                  <div className={classes.labelledImage}>
                    <img
                      src={image.url}
                      style={imageStyle(
                        labelledImageWidth,
                        labelledImageHeight
                      )}
                    />
                    <label>{image.label}</label>
                  </div>
                );
              })
            : null}
        </div> */}
      </div>
    </div>
  ) : null;
}

export default ProductDescription;
