import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <p className=" font-bold text-[16px] text-[#37387380] text-center mt-10">
        جميع الأسعار تشمل ضريبة 15%
      </p>
      <div className="bg-base h-20 flex items-center justify-center flex-col gap-2 py-3">
        <p className=" font-medium text-[16px] text-primary text-center">
          لديك اقتراح أو شكوى ؟
        </p>
        <Link to={"/contactus"}>
          <button className="rounded-lg text-[16px] font-normal transition-all bg-primary py-1 px-4 text-[#fff]">
            تواصل معنا
          </button>
        </Link>
      </div>
    </>
  );
};

export default Footer;
