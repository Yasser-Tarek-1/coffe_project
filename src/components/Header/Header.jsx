import Logo from "../layout/Logo";
import { cart, arrow } from "../../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useGetInformationQuery } from "../../store/apis/Information";
import Links from "./Links";

const Header = () => {
  const { data } = useGetInformationQuery();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const lan = i18n.language;
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
    setIsOpen(false);
  };

  return (
    <div className="bg-base w-full h-[184px] rounded-br-lg rounded-bl-[100px] shadow_custom">
      {/* Top Header */}
      <div className="flex items-center justify-between mx-8 pt-[53px]">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 border-[2px] border-primary rounded-lg cursor-pointer flex items-center justify-evenly"
          >
            <p className="uppercase text-base font-normal text-primary h-7 flex items-center justify-center">
              {lan == "ar" ? "AR" : "EN"}
            </p>
            <p className="h-7 flex items-center justify-center">
              <img
                src={arrow}
                alt="arrow_icon"
                className="w-[9px] block h-full"
              />
            </p>
          </button>

          {isOpen && (
            <div className="absolute bg-primary uppercase text-base font-normal text-white left-0 top-[26px] rounded-lg w-12 flex items-center flex-col">
              <button onClick={() => switchLanguage("ar")}>AR</button>
              <button onClick={() => switchLanguage("en")}>EN</button>
            </div>
          )}
        </div>
        <Link to={"/"}>
          <Logo logo={`https://backend.skilltax.sa/public/${data?.logo}`} />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart_icon" className="w-7" />
        </Link>
      </div>
      {/* Contact Us */}
      <div
        className={`${
          lan == "ar" ? "mr-5" : "ml-5"
        } text-center py-4 flex gap-2 flex-col`}
      >
        <p className="text-primary font-normal text-sm text-center">
          {t("view.contactUs")}
        </p>
        {/* SOCIAL_ICONS */}
        <Links />
      </div>
    </div>
  );
};

export default Header;
