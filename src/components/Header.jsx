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
  return (
    <div className="bg-base w-full h-[184px] rounded-br-lg rounded-bl-[100px] shadow_custom">
      {/* Top Header */}
      <div className="flex items-center justify-between mx-8 pt-[53px]">
        <div className="w-12 h-7 border-[2px] border-primary rounded-lg cursor-pointer flex items-center justify-evenly">
          <p className="uppercase text-base font-normal text-primary">AR</p>
          <img src={arrow} alt="arrow_icon" className="w-[9px] block" />
        </div>
        <Link to={"/"}>
          <Logo logo={logo_primary} />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart_icon" className="w-7" />
        </Link>
      </div>
      {/* Contact Us */}
      <div className="text-center py-4 flex gap-2 flex-col mr-5">
        <p className="text-primary font-normal text-sm text-center">
          تواصل معنا
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
