import Slider from "react-slick";
import { useGetCategoriesQuery } from "../../store/apis/categories";
import CategoryItem from "./CategoryItem";

const settings = {
  dots: false,
  infinite: false,
  speed: 150,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
};

const CategorySlide = () => {
  let { data, isLoading, isSuccess } = useGetCategoriesQuery();
  let ran = 0;
  let allCategoiresImage = "";

  if (data) {
    ran = Math.floor(Math.random() * data?.length);
    allCategoiresImage = data[ran]?.image;
  }

  return (
    <div className="mt-4 category">
      {!isLoading && isSuccess && data?.length >= 4 ? (
        <Slider {...settings}>
          <CategoryItem image={allCategoiresImage} />
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </Slider>
      ) : (
        <div className="w-full flex items-center justify-between">
          <CategoryItem image={allCategoiresImage} />
          {data?.map(({ id, ...items }) => {
            return <CategoryItem key={id} id={id} {...items} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CategorySlide;
