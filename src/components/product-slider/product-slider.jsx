import { useEffect, useState } from "react";
import { Pagination } from "rsuite";
import ProductCard from "src/components/product-card/product-card";
import { ReactComponent as UpDownArrow } from "src/public/svg/UP-Down Arrow.svg";
import classes from "./product-slider.module.css";

function ProductSlider({
  titleText = null,
  productData,
  itemsPerPage = 6,
  pagination = true,
  bottomnav = false,
}) {
  const totalPages = Math.min(3, Math.ceil(productData.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  let currentProducts = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    console.log(currentProducts);
    console.log(productData);
    currentProducts = productData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [productData]);
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    console.log(currentProducts);
    console.log(productData);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    console.log(currentProducts);
    console.log(productData);
  };

  return (
    <div className={classes.productpagination}>
      <div className={classes.header}>
        <label>{titleText}</label>
      </div>
      <div className={classes.paginationcontent}>
        <div className={classes.productlist}>
          {pagination && !bottomnav && (
            <UpDownArrow
              style={{
                visibility: currentPage === 1 || !pagination ? "hidden" : null,
              }}
              className={classes.leftarrow}
              onClick={handlePreviousPage}
            >
              &lt;
            </UpDownArrow>
          )}
          {currentProducts.map((product, index) => (
            <div className={classes.productcardcont}>
              <ProductCard key={index} productData={product} />
            </div>
          ))}
          {pagination && !bottomnav && (
            <UpDownArrow
              style={{
                visibility:
                  currentPage === totalPages || !pagination ? "hidden" : null,
              }}
              className={classes.rightarrow}
              onClick={handleNextPage}
            >
              &gt;
            </UpDownArrow>
          )}
        </div>
        {pagination && !bottomnav && (
          <div className={classes.paginationcontrols}>
            <div className={classes.pagedots}>
              {Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={
                    currentPage === index + 1 ? classes.dotactive : classes.dot
                  }
                ></span>
              ))}
            </div>
          </div>
        )}
        {pagination && bottomnav && (
          <Pagination
            prev={true}
            next={true}
            total={currentProducts.length / itemsPerPage}
            maxButtons={5}
            ellipsis={true}
            boundaryLinks={true}
            limit={itemsPerPage}
            activePage={currentPage}
            onChangePage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default ProductSlider;
