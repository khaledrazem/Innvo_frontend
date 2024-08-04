import "src/variables.css";
import classes from "./add-product-description.module.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as ImageUploadIcon } from "src/public/svg/Image-Video_Upload.svg";

const mediaStyle = (width, height) => ({
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

  function handleMediaUpload(setFunction, event, index) {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.type.split("/")[0];
    const newMedia = { url: URL.createObjectURL(file), type: fileType };

    setFunction((prevMedia) => {
      const updatedMedia = [...prevMedia];
      updatedMedia[index] = newMedia;
      return updatedMedia.slice(0, prevMedia.length);
    });
  }

  useEffect(() => {
    console.log("{{{{{{}}}}}}");
    console.log(formImages);
    if (formImages?.largeImages != null) {
      setImages(formImages.largeImages);
    }

    if (formImages?.labelledImages != null) {
      setLabelledImages(
        formImages.labelledImages.map((imageLabel) => imageLabel.image)
      );
    }
  }, [formImages]);

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
          {images.map((media, index) => (
            <div
              key={index}
              className={classes.imagecontainer}
              style={{
                aspectRatio: imageWidth / imageHeight,
                maxWidth: imageWidth,
              }}
            >
              {media == null ? (
                <div className={classes.emptyimage}>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    {...register(name + ".largeImages." + index, {
                      onChange: (e) => handleMediaUpload(setImages, e, index),
                    })}
                  />
                  <ImageUploadIcon />
                </div>
              ) : media.type === "image" ? (
                <img
                  src={media.url}
                  style={mediaStyle(imageWidth, imageHeight)}
                />
              ) : (
                <video controls style={mediaStyle(imageWidth, imageHeight)}>
                  <source src={media.url} />
                </video>
              )}
            </div>
          ))}
        </div>
        <br />

        <div className={classes.labelledimages}>
          {labelledImages.map((media, index) => (
            <div key={index} className={classes.labelledImage}>
              <div
                className={classes.imagecontainer}
                style={{
                  aspectRatio: labelledImageWidth / labelledImageHeight,
                  maxWidth: labelledImageWidth,
                }}
              >
                {media == null ? (
                  <div className={classes.emptyimage}>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      {...register(name + ".labelledImages." + index, {
                        onChange: (e) =>
                          handleMediaUpload(setLabelledImages, e, index),
                      })}
                    />
                    <ImageUploadIcon />
                  </div>
                ) : media.type === "image" ? (
                  <img
                    src={media.url}
                    style={mediaStyle(labelledImageWidth, labelledImageHeight)}
                  />
                ) : (
                  <video
                    controls
                    style={mediaStyle(labelledImageWidth, labelledImageHeight)}
                  >
                    <source src={media.url} />
                  </video>
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
