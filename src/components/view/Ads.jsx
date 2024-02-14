import Slider from "react-slick";
import { useGetSettingsQuery } from "../../store/apis/Settings";

const Ads = () => {
  const { data } = useGetSettingsQuery();
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
    <>
      {data?.image_one && (
        <>
          {data?.image_one && data?.image_two ? (
            <Slider {...settings}>
              <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
                <a href="#" className="w-full h-full outline-none">
                  <img
                    src={`https://backend.skilltax.sa/public/${data?.image_one}`}
                    alt="ad"
                    className="w-full h-full bg-cover object-cover rounded-2xl"
                  />
                </a>
              </div>
              <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
                <a href="#" className="w-full h-full outline-none">
                  <img
                    src={`https://backend.skilltax.sa/public/${data?.image_two}`}
                    alt="ad"
                    className="w-full h-full bg-cover object-cover rounded-2xl"
                  />
                </a>
              </div>
              {data?.image_three && (
                <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
                  <a href="#" className="w-full h-full outline-none">
                    <img
                      src={`https://backend.skilltax.sa/public/${data?.image_three}`}
                      alt="ad"
                      className="w-full h-full bg-cover object-cover rounded-2xl"
                    />
                  </a>
                </div>
              )}
            </Slider>
          ) : (
            <div className="h-[200px] mt-8 rounded-2xl overflow-hidden">
              <a href="#" className="w-full h-full outline-none">
                <img
                  src={`https://backend.skilltax.sa/public/${data?.image_one}`}
                  alt="ad"
                  className="w-full h-full bg-cover object-cover rounded-2xl"
                />
              </a>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Ads;
