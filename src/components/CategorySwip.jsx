import {
  donut,
  coffe_cup,
  hot_cup,
  juice_cup,
  coffe_cup_pexels,
  home,
} from "../assets";
import Slider from "react-slick";

const CATEGORYS = [
  {
    id: 1,
    icon: donut,
    img: coffe_cup_pexels,
    name: "الحلويات",
    modern: false,
  },
  {
    id: 2,
    icon: coffe_cup,
    img: coffe_cup_pexels,
    name: "القهوة المقطرة",
    modern: true,
  },
  {
    id: 3,
    icon: juice_cup,
    img: coffe_cup_pexels,
    name: "مشروبات باردة",
    modern: false,
  },
  {
    id: 3,
    icon: hot_cup,
    img: coffe_cup_pexels,
    name: "مشروبات ساخنة",
    modern: false,
  },
  {
    id: 11,
    icon: donut,
    img: coffe_cup_pexels,
    name: "الحلويات",
    modern: false,
  },
  {
    id: 22,
    icon: coffe_cup,
    img: coffe_cup_pexels,
    name: "القهوة المقطرة",
    modern: true,
  },
  {
    id: 33,
    icon: juice_cup,
    img: coffe_cup_pexels,
    name: "مشروبات باردة",
    modern: false,
  },
  {
    id: 44,
    icon: hot_cup,
    img: coffe_cup_pexels,
    name: "مشروبات ساخنة",
    modern: false,
  },
];

const CategorySwip = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div className="mt-4 category">
      <Slider {...settings}>
        {CATEGORYS.map(({ id, icon, img, name, modern }) => {
          return (
            <div className="w-full" key={id}>
              <div
                className={`relative w-20 h-20 rounded-full flex justify-center bg-cover bg-center object-cover shadow_custom`}
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="inset-0 absolute h-20 w-20 bg-[#000000B2] rounded-full z-10"></div>
                <div className="flex flex-col relative z-20 mt-3 gap-4">
                  <img src={icon} alt="icon" className="h-[20px]" />
                  <h4 className="font-bold leading-[9.6px] text-[8px] w-[35px] h-[15px] text-center text-white">
                    {name}
                  </h4>
                </div>
                {modern && (
                  <p className="bg-secondary flex items-center justify-center w-[35px] h-[17px] z-30 text-[8px] font-normal text-center rounded-lg absolute left-[50%] bottom-[-10px] translate-x-[-50%] ">
                    جديد
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategorySwip;
