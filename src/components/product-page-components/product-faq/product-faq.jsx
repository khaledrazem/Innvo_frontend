import { useState } from "react";
import classes from "./product-faq.module.css";
import {ReactComponent  as UpDownArrow} from "src/public/svg/UP-Down Arrow.svg";


function ProductFaq({
  productQuestions=null
}) {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return productQuestions!=null? (
    <div className={classes.container}>
      <h3>FAQ</h3>
      {productQuestions.map((item, index) => (
        <div key={index} className={classes.faqitem} onClick={() => handleToggle(index)}>
          <div className={classes.faqquestion} >
            {item.question}
            <span className={activeIndex === index ? classes.faqtoggleActive : classes.faqtoggle}>{ <UpDownArrow/>}</span>
          </div>
          {activeIndex === index && (
            <div className={classes.faqanswer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  ): null;
};

export default ProductFaq;
