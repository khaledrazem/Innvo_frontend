import React, { useState, useEffect } from "react";
import classes from "./product-slider.module.css";
import ProductCard from "src/components/product-card/product-card";
import {ReactComponent  as UpDownArrow} from "src/public/svg/UP-Down_Arrow.svg";

function ProductSlider({titleText=null, productData, itemsPerPage = 6, pagination=true}) {
  const totalPages = Math.min(3, Math.ceil(productData.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  let currentProducts = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    currentProducts = productData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [productData]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return productData.length > 0 ? (
    <div className={classes.productpagination}>
      <div className={classes.header}>
        <label>
          {titleText}
        </label>
      </div>
    
      <div className={classes.paginationcontent}>

        <div className={classes.productlist}>
          <UpDownArrow 
            style={{ visibility: currentPage === 1 || !pagination ? 'hidden' : null }} 
            className={classes.leftarrow} 
            onClick={handlePreviousPage}
          >
            &lt;
          </UpDownArrow>

          {currentProducts.map((product, index) => (
            <ProductCard key={index} productData={product} />
          ))}

          <UpDownArrow 
            style={{ visibility: currentPage === totalPages || !pagination ? 'hidden' : null }} 
            className={classes.rightarrow} 
            onClick={handleNextPage}
          >
            &gt;
          </UpDownArrow>
        </div>

        <div className={classes.paginationcontrols} style={{ visibility: !pagination ? 'hidden' : null }}>
          <div className={classes.pagedots}>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={currentPage === index + 1 ? classes.dotactive : classes.dot}
              ></span>
            ))}
          </div>   
        </div>

      </div>
    </div>
  ) : null;
}

export default ProductSlider;
