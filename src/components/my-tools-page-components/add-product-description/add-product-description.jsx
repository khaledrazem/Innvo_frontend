import "src/variables.css";
import classes from "./add-product-description.module.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as ImageUploadIcon } from "src/public/svg/Image-Video_Upload.svg";

const imageStyle = (width, height) => ({
  maxWidth: width,
  maxHeight: height,
});

function AddProductDescription({
  formImages,
  register,
  name,
  imageWidth = 1000,
  imageHeight = 560,
  labelledImageWidth = 313,
  labelledImageHeight = 175,
}) {
  const [images, setImages] = useState(new Array(2).fill(null));
  const [labelledImages, setLabelledImages] = useState(new Array(3).fill(null));

  function handleImageUpload(setFunction, event, index) {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));

    setFunction((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = newImages[0];
      return updatedImages.slice(0, prevImages.length);
    });
  }

  useEffect(() => {
    if (formImages?.largeImages != null) {
      setImages(formImages.largeImages);
    }

    if (formImages?.labelledImages != null) {
      console.log(
        formImages.labelledImages.map((imageLabel) => imageLabel.image)
      );
      setLabelledImages(
        formImages.labelledImages.map((imageLabel) => imageLabel.image)
      );
    }
  }, formImages);
  return (
    <div className={classes.container}>
      <div className={classes.descriptiontitle}>
        <h3>Add Developer Content</h3>
        <label>
          Upload and Fill in the boxes to elaborate on the development,
          benefits, and unique aspects of your tool.
        </label>
      </div>
      <br />

      <div className={classes.descriptioncontainer}>
        <div className={classes.bio}>
          <textarea
            required
            {...register(name + ".bio")}
            placeholder=" Add Text and a bio"
          />
        </div>
        <br />

        <div className={classes.descriptionimages}>
          {images.map((image, index) => (
            <div
              className={classes.imagecontainer}
              style={{
                aspectRatio: imageWidth / imageHeight,
                maxWidth: imageWidth,
              }}
            >
              {image == null ? (
                <div className={classes.emptyimage}>
                  <input
                    key={index}
                    type="file"
                    {...register(name + ".largeImages." + index, {
                      onChange: (e) => handleImageUpload(setImages, e, index),
                    })}
                  />
                  <ImageUploadIcon />
                </div>
              ) : (
                <img src={image} style={imageStyle(imageWidth, imageHeight)} />
              )}
            </div>
          ))}
        </div>
        <br />

        <div className={classes.labelledimages}>
          {labelledImages.map((image, index) => (
            <div key={index} className={classes.labelledImage}>
              <div
                className={classes.imagecontainer}
                style={{
                  aspectRatio: labelledImageWidth / labelledImageHeight,
                  maxWidth: labelledImageWidth,
                }}
              >
                {image == null ? (
                  <div className={classes.emptyimage}>
                    <input
                      type="file"
                      {...register(
                        name + ".labelledImages." + index + ".image",
                        {
                          onChange: (e) =>
                            handleImageUpload(setLabelledImages, e, index),
                        }
                      )}
                    />
                    <ImageUploadIcon />
                  </div>
                ) : (
                  <img
                    src={image}
                    style={imageStyle(labelledImageWidth, labelledImageHeight)}
                  />
                )}
              </div>
              <input
                className={classes.imagelabelinput}
                type="text"
                {...register(name + ".labelledImages." + index + ".labels")}
                placeholder=" Add Text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddProductDescription;
