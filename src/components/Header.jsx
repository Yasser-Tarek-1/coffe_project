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
    id: 1,
    icon: phone,
    alt: "phone",
    href: "#",
  },
  {
    id: 2,
    icon: snapchat,
    alt: "snapchat",
    href: "#",
  },
  {
    id: 3,
    icon: instgram,
    alt: "instgram",
    href: "#",
  },
  {
    id: 4,
    icon: tiktok,
    alt: "tiktok",
    href: "#",
  },
  {
    id: 5,
    icon: twitter,
    alt: "twitter",
    href: "#",
  },
  {
    id: 6,
    icon: document,
    alt: "document",
    href: "#",
  },
];

const Header = () => {
  return (
    <div className="bg-[#F2F2F2] w-full h-[184px]  rounded-br-lg rounded-bl-[100px]">
      {/* Top Header */}
      <div className="flex items-center justify-between mx-8 pt-[53px]">
        <Link to="/view">
          <img src={cart} alt="cart_icon" className="w-7" />
        </Link>
        <Logo logo={logo_primary} />
        <div className="w-12 h-7 border-[2px] border-[#373873] rounded-lg cursor-pointer flex items-center justify-evenly">
          <p className="uppercase text-base font-normal">AR</p>
          <img src={arrow} alt="arrow_icon" className="w-[9px]" />
        </div>
      </div>
      {/* Contact Us */}
      <div className="text-center py-4 flex gap-2 flex-col mr-5">
        <p className="text-[#373873] font-normal text-sm text-center">
          تواصل معنا
        </p>
        {/* SOCIAL_ICONS */}
        <div className="flex items-center justify-center gap-4">
          {SOCIAL_ICONS.map(({ id, alt, icon }) => {
            return (
              <a href="#" key={id}>
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
