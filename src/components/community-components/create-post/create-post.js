import { useEffect, useState } from "react";
import classes from "./create-post.module.css";
import { ReactComponent as TextIcon } from "src/public/svg/Text Icon.svg";
import { ReactComponent as VideoIcon } from "src/public/svg/Video.svg";
import { ReactComponent as ImageIcon } from "src/public/svg/Image.svg";
import { ReactComponent as PublishIcon } from "src/public/svg/Publish.svg";
import { useForm } from "react-hook-form";

function CreatePost({}) {
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

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setMediaNames((prevNames) => [
      ...prevNames,
      files.map((file) => file.name),
    ]);
  };

  return (
    <div className={classes.container}>
      <h3>Create a Post</h3>

      {expanded ? (
        <form className={classes.createpostform}>
          <div className={classes.forms}>
            <div className={classes.inputform}>
              <label>Title</label>
              <input
                type="text"
                placeholder="Upcoming Updates and Changes"
                {...register("title")}
              ></input>
            </div>
            <div className={classes.inputform}>
              <label>Header</label>
              <input
                type="text"
                placeholder="Stay informed about the latest updates and changes."
                {...register("header")}
              ></input>
            </div>
            <div className={classes.inputform}>
              <label onClick={() => console.log(getValues("image"))}>
                Body
              </label>
              <textarea
                placeholder="We’ll post official announcements and detailed information about new features, bug fixes,  
                and improvements. Feel free to discuss and provide feedback on these updates."
                {...register("body")}
              ></textarea>
            </div>
          </div>
          <div className={classes.footer}>
            <div className={classes.media}>
              <label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", {
                    onChange: handleImageChange,
                  })}
                />
                <ImageIcon /> Images
              </label>
              <div className={classes.dividervertical} />
              <label>
                <input
                  type="file"
                  accept="video/*"
                  {...register("video", {
                    onChange: handleImageChange,
                  })}
                />
                <VideoIcon /> Videos
              </label>
              <ul className={classes.medianames}>
                {mediaNames.map((image, index) => (
                  <li key={index}>{image}</li>
                ))}
              </ul>
            </div>
            <div className={classes.buttons}>
              <button>Preview</button>
              <button>
                Publish <PublishIcon />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div
          className={classes.expandablebutton}
          onClick={() => setExpanded(!expanded)}
        >
          <TextIcon />
          <label>Something new?</label>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
