import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] h-20 flex items-center justify-center flex-col gap-2 py-3">
      <p
        dir="rtl"
        className=" font-medium text-[16px] text-[#373873] text-center"
      >
        لديك اقتراح أو شكوى ؟
      </p>
      <Link to={"/view"}>
        <button className="rounded-lg text-[16px] font-normal transition-all bg-[#373873] py-1 px-4 text-[#fff]">
          تواصل معنا
        </button>
      </Link>
    </div>
  );
};

export default Footer;
