import React, { useState, useEffect } from "react";
import classes from "./upload-product-carousel.module.css";
import { Carousel } from "rsuite";

import { ReactComponent as ImageUploadIcon } from "src/public/svg/Image-Video_Upload.svg";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
  boxSizing: "border-box",
  objectFit: "contain",

});

function UploadProductCarousel({ formImages=null, height, width, register, name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState(new Array(5).fill(null));

  useEffect(() => {
    console.log(formImages)
    if (formImages != null) {
      setImages(formImages);

    }
  }, [formImages])

  function handleImageUpload (event, index) {

    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    
    setImages((prevImages) => {
      const updatedImages = prevImages;
      updatedImages[index] = newImages[0]
      return updatedImages.slice(0, 5); 
    });

  };

  return  (
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
        {images.map((image, index) => {
          return image == null? 
          <div className={classes.emptyimage}  style={{aspectRatio: width/ height, maxWidth: width}}>
             <input
            type="file"
            accept="image/*"
            {...register(name+".images."+index, {
              onChange: (event) => handleImageUpload(event, index)
            })}
          />
            <ImageUploadIcon/>
            <label>Upload Image</label>
            <a>Upload a high-resolution image that best represents your tool</a>

          </div> 
          :
           <img src={image} style={{aspectRatio: width/ height}} />;
        })}
      </Carousel>

      </div>

      <div className={classes.imagelist}>
        {images.slice(0, 5).map((image, index) => {
          return <div className={index === activeIndex ? classes.activeimage : ''}  style={{aspectRatio: width/ height}}  onClick={() => setActiveIndex(index)}>

            {image == null ? <h3 >{index+1}</h3>:
          <img src={image} alt="" />}
          </div>
        })}
      </div>
    </div>

  ) ;
}

export default UploadProductCarousel;
