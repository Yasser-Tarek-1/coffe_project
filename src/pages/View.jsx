import { useState } from "react";
import Header from "../components/Header";
import { ad, search, filter } from "../assets";
import CategorySwip from "../components/CategorySwip";
import Footer from "../components/Footer";
import Slider from "react-slick";
import Products from "../components/products/Products";

const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const View = () => {
  const [toggle, setToggle] = useState(true);

  const toggleShow = () => {
    setToggle(!toggle);
  };

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div className="w-full min-h-screen relative bg-white">
      <Header />
      <div className="px-4">
        {/* ads */}
        <Slider {...settings}>
          <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
            <a href="#" className="w-full h-full outline-none">
              <img
                src={ad}
                alt="ad"
                className="w-full h-full bg-cover object-cover rounded-2xl"
              />
            </a>
          </div>
          <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
            <a href="#" className="w-full h-full outline-none">
              <img
                src={ad}
                alt="ad"
                className="w-full h-full bg-cover object-cover rounded-2xl"
              />
            </a>
          </div>
          <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
            <a href="#" className="w-full h-full outline-none">
              <img
                src={ad}
                alt="ad"
                className="w-full h-full bg-cover object-cover rounded-2xl"
              />
            </a>
          </div>
        </Slider>
        {/* filter */}
        <div className="flex items-center gap-4 mt-10">
          <div className="w-full h-7 border-2 border-primary rounded-lg cursor-pointer flex items-cente justify-between px-3">
            <input
              placeholder="بحث"
              className="block w-full bg-transparent outline-none border-none  text-primary "
            />
            <img src={search} alt="filter" className="w-3" />
          </div>
          <button className="w-7" onClick={toggleShow}>
            <img src={filter} alt="filter" className="w-7" />
          </button>
        </div>
        {/* CategorySwip */}
        <CategorySwip />
        {/* Products */}
        <Products products={products} toggle={toggle} />
      </div>
      <Footer />
    </div>
  );
};

export default View;
