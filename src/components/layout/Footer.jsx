import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full absolute right-0 bottom-0">
      <p className="font-bold text-[16px] text-[#37387380] text-center">
        {t("view.tax")} 15%
      </p>
      <div className="bg-base h-20 flex items-center justify-center flex-col gap-2 py-3">
        <p className=" font-medium text-[16px] text-primary text-center">
          {t("view.send")}
        </p>
        <Link to={"/contactus"}>
          <button className="rounded-lg text-[16px] font-normal transition-all bg-primary py-1 px-4 text-[#fff]">
            {t("view.contactUs")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
