import React, { useState } from "react";
import classes from "./product-carousel.module.css";
import { Carousel } from "rsuite";

function ProductCarousel({ images, height, width }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return Array.isArray(images) && images.length > 0 ? (
    <div className={classes.container} style={{maxWidth: width}}>
      <div className={classes.carouselcontainer}>
        <Carousel
          autoplay
          autoplayInterval={1000}
          className={classes.customslider}
          activeIndex={activeIndex}
          onSelect={(index) => {
            setActiveIndex(index);
          }}
        >
          {images.map((image) => {
            return <img src={image} style={{aspectRatio: width/ height}}  />;
          })}
        </Carousel>
      </div>

      <div className={classes.imagelist}>
        {images.slice(0, 5).map((image, index) => {
          return (
            <div className={index === activeIndex ? classes.activeimage : ''}  style={{aspectRatio: width/ height}}  onClick={() => setActiveIndex(index)}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

export default ProductCarousel;
