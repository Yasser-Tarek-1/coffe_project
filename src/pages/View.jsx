import Header from "../components/Header";
import { ad, search, filter } from "../assets";
import CategorySwip from "../components/CategorySwip";
import ProductsView1 from "../components/products/productsView1";
import ProductsView2 from "../components/products/ProductsView2";
import Footer from "../components/Footer";
import Slider from "react-slick";

import { useState } from "react";

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
      <Header className={"logo_color"} />
      <div className="px-4">
        {/* ads */}
        <Slider {...settings}>
          <div className="h-[200px] mt-8">
            <a href="#" className="w-full h-full outline-none">
              <img src={ad} alt="ad" className="w-full h-full" />
            </a>
          </div>
          <div className="h-[200px] mt-8">
            <a href="#" className="w-full h-full outline-none">
              <img src={ad} alt="ad" className="w-full h-full" />
            </a>
          </div>
          <div className="h-[200px] mt-8">
            <a href="#" className="w-full h-full outline-none">
              <img src={ad} alt="ad" className="w-full h-full" />
            </a>
          </div>
        </Slider>
        {/* filter */}
        <div className="flex items-center gap-4 mt-10">
          <button className="w-7" onClick={toggleShow}>
            <img src={filter} alt="filter" className="w-7" />
          </button>
          <div className="w-full h-7 border-2 border-[#373873] rounded-lg cursor-pointer flex items-cente justify-between px-3">
            <img src={search} alt="filter" className="w-3" />
            <input
              dir="rtl"
              placeholder="بحث"
              className="block w-full bg-transparent outline-none border-none  text-[#373873] "
            />
          </div>
        </div>
        {/* CategorySwip */}
        <CategorySwip />
        {/* Products */}
        <div className="mt-8 px-4">
          {toggle ? (
            <div className="w-full h-full grid grid-cols-2 gap-4">
              {products.map(({ id }) => {
                return <ProductsView1 key={id} />;
              })}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-[18px]">
              {products.map(({ id }) => {
                return <ProductsView2 key={id} />;
              })}
            </div>
          )}
        </div>
      </div>
      <p
        dir="rtl"
        className=" font-bold text-[16px] text-[#37387380] text-center mt-10"
      >
        جميع الأسعار تشمل ضريبة 15%{" "}
      </p>
      <Footer />
    </div>
  );
};

export default View;
