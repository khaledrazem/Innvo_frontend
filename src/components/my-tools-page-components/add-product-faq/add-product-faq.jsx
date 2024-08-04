import { useState } from "react";
import classes from "./add-product-faq.module.css";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";

function AddProductFaq({ register, name }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [productQuestions, setProductQuestions] = useState(
    new Array(5).fill(null)
  );

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={classes.faqcontainer}>
      <h3>FAQ (Frequently Asked Questions)</h3>
      {productQuestions.map((item, index) => (
        <div key={index} className={classes.faqitem}>
          <div
            className={classes.faqquestion}
            onClick={() => handleToggle(index)}
          >
            <input
              className={classes.questioninput}
              type="text"
              {...register(name + "." + index + ".question")}
              placeholder="Add Question"
            />
            <span
              className={
                activeIndex === index
                  ? classes.faqtoggleActive
                  : classes.faqtoggle
              }
            >
              {<UpDownArrow />}
            </span>
          </div>
          {activeIndex === index && (
            <div className={classes.faqanswer}>
              <input
                className={classes.answerinput}
                type="text"
                {...register(name + "." + index + ".answer")}
                placeholder="Add Answer"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddProductFaq;
