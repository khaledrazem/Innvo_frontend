import React, { useState, useEffect } from "react";
import classes from "./add-product-info.module.css";

import { ReactComponent as UpArrowIcon } from "src/public/svg/Up Arrow_Black.svg";

function AddProductInfo({ register, name }) {
  const [image, setImage] = useState(null);

  function toBulletPoints(text) {
    return text.split("\n");
  }

  function handleImageUpload (event) {

    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    
    setImage(newImages[0])

  };

  function handleImageDelete() {
    setImage(null);
    register(name + ".logoimage").onChange({ target: { value: null } });
  }

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        {image == null? 
        <div className={classes.emptyimage}>
            <input
            type="file"
            accept="image/*"
            {...register(name+".logoimage", {
              onChange: (event) => handleImageUpload(event)
            })}
          />
          <UpArrowIcon />
          </div> 
          :
           <img onClick={()=>handleImageDelete()} src={image}/>}
        <div className={classes.logoplaceholder}>

        <h3>Upload Tool Logo</h3>
        <label>Provide the official Logo of your tool.</label>
        </div>

      </div>

      <div className={classes.title}>
        <h4>Write Tool Name Here</h4>
        <label> Provide the official name of your tool.</label>
        <input
          type="text"
          {...register(name+".title")}
          required
        />
      </div>
      <div>
        <select
          required
          {...register(name+".subscription")}
          defaultValue={""}

        >
          <option disabled value="" >Select Tool Subscription</option>
          <option value="essential">Essential plan</option>
          <option value="elite">Elite plan</option>
          <option value="professional">Pro plan</option>
        </select>
      </div>

      <div className={classes.features}>
        <h4> Add Your Key Features</h4>
        <label>List the primary features that highlight the value of your tool.</label>
        <textarea
          {...register(name+".features", {setValueAs: v => toBulletPoints(v)})}
          required
          placeholder=" • Add Text
          • Add Text
          • Add Text
          • Add Text
          • Add Text"
        />
      </div>

      <div className={classes.externalurl}>
        <h4>External URL</h4>
        <input
          type="text"
          {...register(name+".url")}
          required
        />
      </div>

      <div className={classes.previewbutton}>
        <button>Preview Tool Page</button>
      </div>
    </div>
  );
}

export default AddProductInfo;
