import logo from 'src/logo.svg';
import InvoHeader from 'src/components/header/invo-header'
import 'src/variables.css'
import SideNavBar from 'src/components/side-navbar/side-navbar';
import classes from './discover.module.css'
import InvoCarousel from 'src/components/carousel/invo-carousel';
import ProductCard from 'src/components/product-card/product-card';
import prodDatajson from "src/data/products.json"
import ProductSlider from 'src/components/product-slider/product-slider';
import Footer from 'src/components/footer/footer';

function DiscoverPage() {
  return (
    
    <div className={classes.container}>
    <InvoCarousel height={225} width={1265} images={["https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
     "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png",
     "https://i.ibb.co/cQ1rkPT/000000-text-Dummy-header-test.png"

    ]}/>
    <ProductSlider titleText={"Top Rated"} productData={prodDatajson.products}/>
    <br/>    <br/>
    <ProductSlider titleText={"Most Used"} productData={prodDatajson.products}/>
    <br/>    <br/>
    <ProductSlider titleText={"Rising Stars"} productData={prodDatajson.products}/>
    <br/>    <br/>
    <ProductSlider titleText={"New and Noteworthy"} productData={prodDatajson.products}/>
    <br/>    <br/>

    <ProductSlider titleText={"Explore"} productData={prodDatajson.products} pagination={false} itemsPerPage={18}/>
     <div className={classes.explorebutton}> <button>View more

      </button></div>
    </div>
  );
}

export default DiscoverPage;
