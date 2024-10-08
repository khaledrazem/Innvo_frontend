import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import CustomDropdown from "src/components/data-input/dropdown/dropdown";
import AddProductDescription from "src/components/my-tools-page-components/add-product-description/add-product-description";
import AddProductFaq from "src/components/my-tools-page-components/add-product-faq/add-product-faq";
import AddProductInfo from "src/components/my-tools-page-components/add-product-info/add-product-info";
import UploadProductCarousel from "src/components/my-tools-page-components/upload-product-carousel/upload-product-carousel";
import categoriesData from "src/data/categories.json";
import pricingsData from "src/data/pricings.json";
import tagsData from "src/data/tags.json";
import toolDetailsDatajson from "src/data/tooldetails.json";
import classes from "./edit-tools.module.css";

function EditToolsPage() {
  const { register, getValues, handleSubmit, setValue, reset } = useForm();

  let toolData = toolDetailsDatajson;
  let { toolId } = useParams();

  useState(() => {
    if (toolId && toolData) {
      reset(toolData);
    }
  }, [toolId]);

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => {
    console.log(getValues());
    console.log(errors, e);
  };

  return (
    <div className={classes.container}>
      <br />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.filters}>
          <div className={classes.filter}>
            <CustomDropdown
              options={categoriesData}
              register={register}
              placeholder="Categories"
              name="Categories"
            />
          </div>
          <div className={classes.filter}>
            <CustomDropdown
              options={pricingsData}
              register={register}
              placeholder="Pricing"
              name="Pricing"
            />
          </div>{" "}
          <div className={classes.filter}>
            <CustomDropdown
              options={tagsData}
              register={register}
              placeholder="Tags"
              name="Tags"
            />
          </div>
        </div>
        <br />
        <br />
        <div className={classes.info}>
          <div className={classes.carouselcontainer}>
            <UploadProductCarousel
              formImages={getValues("productImages")?.images}
              register={register}
              name={"productImages"}
              height={432}
              width={768}
            />
          </div>

          <AddProductInfo
            getValues={getValues}
            setValue={setValue}
            formImage={getValues("productInfo")?.logoimage}
            register={register}
            name={"productInfo"}
          />
        </div>
        <div className={classes.buttons}>
          <button className={classes.previewbutton}>
            <Link
              className={classes.productlink}
              to={"/marketplace/my-tools/edit/preview"}
              state={getValues()}
            />
            Preview Tool Page
          </button>
          <br />
          <button className={classes.createbutton}>
            <Link
              className={classes.productlink}
              to={"/marketplace/my-tools/edit/preview"}
              state={getValues()}
            />
            Create Tool Page
          </button>
        </div>
        <br /> <br /> <br /> <br />
        <AddProductDescription
          formImages={getValues("productDescription")}
          register={register}
          name={"productDescription"}
        />
        <br /> <br />
        <AddProductFaq register={register} name={"productFaq"} />
        <br /> <br />
        <br /> <br />
        {/* <AddProductPrivacy
          formSettings={getValues("productPrivacy")?.selectedSettings}
          setValue={setValue}
          register={register}
          name={"productPrivacy"}
        /> */}
        <br /> <br />
        <br /> <br />
      </form>
    </div>
  );
}

export default EditToolsPage;
