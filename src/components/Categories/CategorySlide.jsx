import Slider from "react-slick";
import { useGetCategoriesQuery } from "../../store/services/products";
import CategoryItem from "./CategoryItem";
import { useEffect } from "react";
import { useState } from "react";

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
  // Add The All Category
  // let [allData, setAllData] = useState([
  //   {
  //     id: new Date().getTime(),
  //     ar_name: "الجميع",
  //     en_name: "All",
  //     image: "images/1705769994.jpg",
  //   },
  // ]);

  // useEffect(() => {
  //   if (data?.length > 0) {
  //     setAllData((prev) => {
  //       return [...prev, ...data];
  //     });
  //   }
  // }, [data]);

  return (
    <div className="mt-4 category">
      {!isLoading && isSuccess && data?.length >= 5 ? (
        <Slider {...settings}>
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </Slider>
      ) : (
        <div className="w-full flex justify-start items-center gap-4">
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CategorySlide;
