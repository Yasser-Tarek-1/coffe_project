import { useState } from "react";
import Header from "../components/Header/Header";
import CategorySlide from "../components/Categories/CategorySlide";
import Footer from "../components/layout/Footer";
import Products from "../components/products/Products";
import Ads from "../components/view/Ads";
import FilterInput from "../components/view/FilterInput";

const View = () => {
  const [toggle, setToggle] = useState(true);
  const toggleShow = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full min-h-screen h-full relative bg-white pb-36">
      <Header />
      <div className="px-4">
        {/* Ads */}
        <Ads />
        {/* filter */}
        <FilterInput toggleShow={toggleShow} />
        {/* CategorySwip */}
        <CategorySlide />
        {/* Products */}
        <Products toggle={toggle} />
      </div>
      <Footer />
    </div>
  );
};

export default View;
