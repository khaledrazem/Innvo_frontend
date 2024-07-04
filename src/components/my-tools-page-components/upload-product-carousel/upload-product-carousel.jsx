import React, { useState, useEffect } from "react";
import classes from "./upload-product-carousel.module.css";
import { Carousel } from "rsuite";

import { ReactComponent as ImageUploadIcon } from "src/public/svg/Image-Video_Upload.svg";

const mediaStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
  boxSizing: "border-box",
  objectFit: "contain",
});

function UploadProductCarousel({
  formImages = null,
  height,
  width,
  register,
  name,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [media, setMedia] = useState(new Array(5).fill(null));

  useEffect(() => {
    if (formImages != null) {
      setMedia(formImages);
    }
  }, [formImages]);

  function handleMediaUpload(event, index) {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.type.split("/")[0];
    const newMedia = URL.createObjectURL(file);

    setMedia((prevMedia) => {
      const updatedMedia = [...prevMedia];
      updatedMedia[index] = { url: newMedia, type: fileType };
      return updatedMedia.slice(0, 5);
    });
  }

  return (
    <div className={classes.container} style={{ maxWidth: width }}>
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
          {media.map((item, index) => {
            return item == null ? (
              <div
                key={index}
                className={classes.emptyimage}
                style={{ aspectRatio: width / height, maxWidth: width }}
              >
                <input
                  type="file"
                  accept="image/*,video/*"
                  {...register(name + ".media." + index, {
                    onChange: (event) => handleMediaUpload(event, index),
                  })}
                />
                <ImageUploadIcon />
                <label>Upload Images/Videos</label>
                <a>
                  Upload a high-resolution image or video that best represents
                  your tool
                </a>
              </div>
            ) : item.type === "image" ? (
              <img
                key={index}
                src={item.url}
                style={{ aspectRatio: width / height }}
              />
            ) : (
              <video
                key={index}
                controls
                style={{ aspectRatio: width / height }}
              >
                <source src={item.url} />
              </video>
            );
          })}
        </Carousel>
      </div>

      <div className={classes.imagelist}>
        {media.slice(0, 5).map((item, index) => {
          return (
            <div
              key={index}
              className={index === activeIndex ? classes.activeimage : ""}
              style={{ aspectRatio: width / height }}
              onClick={() => setActiveIndex(index)}
            >
              {item == null ? (
                <h3>{index + 1}</h3>
              ) : item.type === "image" ? (
                <img src={item.url} alt="" />
              ) : (
                <video>
                  <source src={item.url} />
                </video>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UploadProductCarousel;
