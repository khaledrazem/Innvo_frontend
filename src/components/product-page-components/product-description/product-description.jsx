import "src/variables.css";
import classes from "./product-description.module.css";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
  aspectRatio: width / height,
});

function ProductDescription({
  productDescription = null,
  imageWidth = 768,
  imageHeight = 432,
  labelledImageWidth = 256,
  labelledImageHeight = 144,
}) {
  return productDescription != null ? (
    <div className={classes.container}>
      <div className={classes.descriptiontitle}>
        <h3>From the developer</h3>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.descriptioncontainer}>
        <div className={classes.bio}>
          <label>{productDescription.bio}</label>
        </div>

        <div className={classes.descriptionimages}>
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
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductDescription;
