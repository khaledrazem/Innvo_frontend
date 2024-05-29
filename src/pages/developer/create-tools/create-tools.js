import { useForm } from "react-hook-form";
import AddProductInfo from "src/components/my-tools-page-components/add-product-info/add-product-info";
import UploadProductCarousel from "src/components/my-tools-page-components/upload-product-carousel/upload-product-carousel";
import ProductDescription from "src/components/product-page-components/product-description/product-description";
import ProductFaq from "src/components/product-page-components/product-faq/product-faq";
import ProductPrivacy from "src/components/product-page-components/product-privacy/product-privacy";
import classes from "./create-tools.module.css";
import AddProductDescription from "src/components/my-tools-page-components/add-product-description/add-product-description";
import AddProductFaq from "src/components/my-tools-page-components/add-product-faq/add-product-faq";
import AddProductPrivacy from "src/components/my-tools-page-components/add-product-privacy/add-product-privacy";

function CreateToolsPage() {
  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => console.log(errors, e)


  return (
    <div className={classes.container}>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={classes.info}>
          <UploadProductCarousel
            register={register}
            name={"productImages"}
            height={435}
            width={665}
          />
          <AddProductInfo register={register} name={"productInfo"} />
        </div>
        <br /> <br />
        <AddProductDescription
          register={register}
          name={"productDescription"}
        />
        <br /> <br />
        <AddProductFaq register={register} name={"productFaq"} />
        <br /> <br />
        <br /> <br />
        <AddProductPrivacy register={register} name={"productPrivacy"}/>
        <br /> <br />
      <button className={classes.submitbutton} type="submit">Submit</button>
<br /> <br />

      </form>
    </div>
  );
}

export default CreateToolsPage;
