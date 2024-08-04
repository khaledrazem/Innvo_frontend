import { useEffect, useState } from "react";
import classes from "./create-comment.module.css";
import { ReactComponent as TextIcon } from "src/public/svg/Text Icon.svg";
import { ReactComponent as VideoIcon } from "src/public/svg/Video.svg";
import { ReactComponent as ImageIcon } from "src/public/svg/Image.svg";
import { ReactComponent as PublishIcon } from "src/public/svg/Publish.svg";
import { useForm } from "react-hook-form";

function CreateComment({}) {
  const [expanded, setExpanded] = useState(false);
  const [mediaNames, setMediaNames] = useState([]);

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data, e);
  };
  const onError = (errors, e) => {
    console.log(getValues());
    console.log(errors, e);
  };

  return (
    <div className={classes.container}>
      <h3>Add a Comment</h3>

      <form
        className={classes.createpostform}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className={classes.forms}>
          <div className={classes.inputform}>
            <label>Title:</label>
            <input
              type="text"
              placeholder="Upcoming Updates and Changes"
              {...register("title")}
            ></input>
          </div>

          <div className={classes.inputform}>
            <label>Body:</label>
            <textarea
              placeholder="We’ll post official announcements and detailed information about new features, bug fixes,  
                and improvements. Feel free to discuss and provide feedback on these updates."
              {...register("body")}
            ></textarea>
          </div>
        </div>
        <div className={classes.footer}>
          <button className={classes.buttons}>Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
