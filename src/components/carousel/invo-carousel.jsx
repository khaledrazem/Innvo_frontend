import { useEffect, useState } from "react";
import { Carousel } from "rsuite";
import classes from "./invo-carousel.module.css";

import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
  aspectRatio: width / height,
  objectFit: "cover",
});

function InvoCarousel({ images, videos, height, width }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(images);
    console.log(videos);
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
    <div className={classes.container} style={{ maxWidth: width }}>
      <div className={classes.arrowContainer}>
        <UpDownArrow onClick={leftButton} className={classes.arrowiconleft} />
      </div>

      <Carousel
        className={classes.customslider}
        activeIndex={activeIndex}
        onSelect={(index) => {
          setActiveIndex(index);
        }}
      >
        {Array.isArray(videos) && videos.length > 0
          ? videos.map((video) => {
              return (
                <video src={video} controls style={imageStyle(width, height)} />
              );
            })
          : null}
        {images.map((image) => {
          return <img src={image} style={imageStyle(width, height)} />;
        })}
      </Carousel>
      <div className={classes.arrowContainer}>
        <UpDownArrow onClick={rightButton} className={classes.arrowiconright} />
      </div>
    </div>
  ) : null;
}

export default InvoCarousel;
