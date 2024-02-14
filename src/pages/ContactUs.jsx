import { useEffect } from "react";
import { doc_icon, arrow_back } from "../assets";
import { useTranslation } from "react-i18next";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import { useGetInformationQuery } from "../store/apis/information";

const ContactUs = () => {
  const { data } = useGetInformationQuery();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen h-full relative w-full bg-white pb-8">
      {/* Head */}
      <div className="w-full h-24 bg-base shadow-all rounded-b-lg flex items-center justify-between pt-12 px-4">
        <div className="flex items-center gap-2">
          <img src={doc_icon} alt="doc_icon" className="w-6" />
          <h3 className="mt-[6px] text-xl font-bold leading-6 text-primary">
            {t("contactus.suggestions")}
          </h3>
        </div>
        <button
          className={language == "en" ? "rotate-[180deg]" : ""}
          onClick={() => history.back(1)}
        >
          <img src={arrow_back} alt="arrow_back" className="w-5" />
        </button>
      </div>
      {/* About */}
      <p className="w-[80%] mx-auto my-16 text-center text-black font-medium leading-6 text-xl">
        <span>{t("contactus.us")}</span>{" "}
        <span>
          {" "}
          {language == "ar" ? data?.ar_business_name : data?.en_business_name}
        </span>{" "}
        <span>{t("contactus.about")}</span>
      </p>
      {/* Form */}
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
