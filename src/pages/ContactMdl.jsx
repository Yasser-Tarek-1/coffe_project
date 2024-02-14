import Modal from "../components/modal/Modal";
import { Link } from "react-router-dom";
import { home } from "../assets";
import { useTranslation } from "react-i18next";
import { useGetInformationQuery } from "../store/apis/information";

const ContactMdl = () => {
  const { data } = useGetInformationQuery();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      className="min-h-screen h-full relative bg-no-repeat bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${home})`, objectFit: "cover" }}
    >
      {/* Modal */}
      <Modal isOpen={true}>
        <div className="bg-primary text-secondary h-20 rounded-[11px] w-full flex items-center justify-center pb-4">
          <h3 className="text-[16px] font-medium ">
            {language == "ar" ? data?.ar_business_name : data?.en_business_name}
          </h3>
        </div>
        <div className=" text-primary h-32 text-center flex items-center flex-col justify-center w-[60%] mx-auto">
          <p className="text-[14px] font-medium leading-4">
            {t("contactus.thx")}
          </p>
          <Link to={"/"} className="underline font-semibold mt-2">
            {t("contactus.homePage")}
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default ContactMdl;
