import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import { useGetSettingsQuery } from "../store/apis/menuSettings";
import { useEffect } from "react";

const AboutUs = () => {
  const { data } = useGetSettingsQuery();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen h-full relative w-full bg-white pb-8">
      <Header />
      {/* About */}
      <h3 className="mt-14 mb-6 text-primary text-center text-xl font-bold">
        {t("contactus.aboutus")}
      </h3>
      <p
        className={`${
          language == "ar" ? "text-right" : "text-left"
        } w-[90%] mx-auto text-primary font-light leading-4 text-[14px]`}
      >
        {data?.about_us}
      </p>
    </div>
  );
};

export default AboutUs;
