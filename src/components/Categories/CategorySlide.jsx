import Slider from "react-slick";
import { useGetCategoriesQuery } from "../../store/apis/products";
import CategoryItem from "./CategoryItem";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const settings = {
  dots: false,
  infinite: true,
  speed: 150,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
};

const CategorySlide = () => {
  let { data, isLoading, isSuccess } = useGetCategoriesQuery();

  return (
    <div className="mt-4 category">
      {!isLoading && isSuccess && data?.length >= 4 ? (
        <Slider {...settings}>
          <CategoryItem />
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </Slider>
      ) : (
        <div className="w-full flex justify-start items-center gap-4">
          <CategoryItem />
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CategorySlide;
