import React, { useState, useEffect } from "react";
import classes from "./product-carousel.module.css";
import { Carousel } from "rsuite";

import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down_Arrow.svg";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
});

function ProductCarousel({ images, height, width }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(images);
  }, [images]);
  function rightButton() {
    if (activeIndex == images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  function leftButton() {
    if (activeIndex == 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

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

            <img
              src={image}
              alt=""
            
            />
                      </div>

          );
        })}
      </div>
    </div>
  ) : null;
}

export default ProductCarousel;
