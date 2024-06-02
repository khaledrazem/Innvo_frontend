 import { useForm } from "react-hook-form";
import AddProductDescription from "src/components/my-tools-page-components/add-product-description/add-product-description";
import AddProductFaq from "src/components/my-tools-page-components/add-product-faq/add-product-faq";
import AddProductInfo from "src/components/my-tools-page-components/add-product-info/add-product-info";
import AddProductPrivacy from "src/components/my-tools-page-components/add-product-privacy/add-product-privacy";
import UploadProductCarousel from "src/components/my-tools-page-components/upload-product-carousel/upload-product-carousel";
import classes from "./edit-tools.module.css";
import toolDetailsDatajson from "src/data/tooldetails.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

function EditToolsPage() {
  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  let toolData = toolDetailsDatajson;

  useState(() => {

    if (toolData) {
    reset(toolData);
    }
  },[toolData])


  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => {console.log(getValues());
    console.log(errors, e)
  }
  let { userId } = useParams();


  return (
    <div className={classes.container}>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.info}>
          <UploadProductCarousel
          formImages={getValues("productImages").images}
            register={register}
            name={"productImages"}
            height={435}
            width={665}
          />
          <AddProductInfo getValues={getValues} setValue={setValue} formImage={getValues("productInfo").logoimage} register={register} name={"productInfo"} />
        </div>
        <br /> <br />
        <AddProductDescription
         formImages={getValues("productDescription")}
          register={register}
          name={"productDescription"}
        />
        <br /> <br />
        <AddProductFaq register={register} name={"productFaq"} />
        <br /> <br />
        <br /> <br />
        <AddProductPrivacy formSettings={getValues("productPrivacy").selectedSettings} setValue={setValue} register={register} name={"productPrivacy"}/>
        <br /> <br />
      <button className={classes.submitbutton} onClick={console.log(getValues())} type="submit">Submit</button>
<br /> <br />

      </form>
    </div>
  );
}

export default EditToolsPage;
