import Logo from "./Logo";
import {
  logo_primary,
  cart,
  arrow,
  phone,
  snapchat,
  instgram,
  tiktok,
  twitter,
  document,
} from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SOCIAL_ICONS = [
  {
    id: 11,
    icon: document,
    alt: "document",
    href: "/contactus",
  },
  {
    id: 22,
    icon: twitter,
    alt: "twitter",
    href: "#",
  },
  {
    id: 33,
    icon: tiktok,
    alt: "tiktok",
    href: "#",
  },
  {
    id: 44,
    icon: instgram,
    alt: "instgram",
    href: "#",
  },
  {
    id: 55,
    icon: snapchat,
    alt: "snapchat",
    href: "#",
  },
  {
    id: 66,
    icon: phone,
    alt: "phone",
    href: "#",
  },
];

const Header = () => {
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
            className="w-12 h-7 border-[2px] border-primary rounded-lg cursor-pointer flex items-center justify-evenly"
          >
            <p className="uppercase text-base font-normal text-primary">
              {lan == "ar" ? "AR" : "EN"}
            </p>
            <img src={arrow} alt="arrow_icon" className="w-[9px] block" />
          </button>
          {isOpen && (
            <div className="absolute bg-primary uppercase text-base font-normal text-white left-0 top-[26px] rounded-lg w-12 flex items-center flex-col">
              <button onClick={() => switchLanguage("ar")}>AR</button>
              <button onClick={() => switchLanguage("en")}>EN</button>
            </div>
          )}
        </div>
        <Link to={"/"}>
          <Logo logo={logo_primary} />
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
        <div className="flex items-center justify-center gap-4">
          {SOCIAL_ICONS.map(({ id, alt, icon, href }) => {
            return alt == "document" ? (
              <Link to={href} key={id}>
                <img src={icon} alt={alt} className="w-6" />
              </Link>
            ) : (
              <a href={href} key={id}>
                <img src={icon} alt={alt} className="w-6" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
