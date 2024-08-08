import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as StarEmptyIcon } from "src/public/svg/Review_star empty.svg";
import { ReactComponent as StarFillIcon } from "src/public/svg/Review_star fill.svg";
import classes from "./create-review.module.css";
function CreateReview({}) {
  const [ratingValue, setRatingValue] = useState(0);

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
    <form
      className={classes.container}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h3>Write a Review</h3>

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
          <label>Rating:</label>
          <div className={classes.ratings}>
            {[...Array(ratingValue)].map((e, i) => (
              <StarFillIcon
                onClick={() =>
                  i + 1 === ratingValue
                    ? setRatingValue(0)
                    : setRatingValue(i + 1)
                }
                className={classes.ratingsfill}
                key={i}
              />
            ))}
            {[...Array(5 - ratingValue)].map((e, i) => (
              <StarEmptyIcon
                onClick={() => setRatingValue(ratingValue + i + 1)}
                className={classes.ratingsblank}
                key={i}
              />
            ))}
            <label>{ratingValue}</label>
          </div>
        </div>

        <div className={classes.inputform}>
          <label>Review Body:</label>
          <textarea
            placeholder="We’ll post official announcements and detailed information about new features, bug fixes,  
                and improvements. Feel free to discuss and provide feedback on these updates."
            {...register("body")}
          ></textarea>
        </div>
      </div>
      <button className={classes.buttons}>Post</button>
    </form>
  );
}

export default CreateReview;
