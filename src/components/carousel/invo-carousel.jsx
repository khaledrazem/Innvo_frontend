import React, { useState, useEffect } from "react";
import classes from "./invo-carousel.module.css";
import { Carousel } from "rsuite";

import {ReactComponent  as UpDownArrow} from "src/public/svg/UP-Down_Arrow.svg";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height
 
});

function InvoCarousel({images, height, width}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
console.log(images)
  }, [images])
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
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
      <UpDownArrow
        onClick={leftButton}
        className={classes.arrowiconleft}
      />
      </div>

      <Carousel
        className={classes.customslider}
        activeIndex={activeIndex}
        onSelect={(index) => {
          setActiveIndex(index);
        }}
      >
        {images.map((image) => {
          return <img src={image} style={imageStyle(width, height)} />;
        })}
      </Carousel>
      <div className={classes.arrowContainer}>
      <UpDownArrow
        onClick={rightButton}
        className={classes.arrowiconright}
      />
    </div>
    </div>

  ) : null;
}

export default InvoCarousel;
