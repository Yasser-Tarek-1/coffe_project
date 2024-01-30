import { useState } from "react";
import { doc_icon, arrow_back } from "../assets";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [active, setActive] = useState("suggestion");
  const navigate = useNavigate();

  const openModalHandler = () => {
    navigate("/contactus/done");
  };

  return (
    <div className="min-h-screen h-full relative w-full bg-white pb-8">
      {/* Head */}
      <div className="w-full h-24 bg-base shadow_custom rounded-b-lg flex items-center justify-between pt-12 px-4">
        <div className="flex items-center gap-2">
          <img src={doc_icon} alt="doc_icon" className="w-6" />
          <h3 className="text-xl font-bold leading-6 text-primary">
            الشكاوئ والإقتراحات
          </h3>
        </div>
        <button onClick={() => history.back(1)}>
          <img src={arrow_back} alt="arrow_back" className="w-5" />
        </button>
      </div>
      {/* About */}
      <p className="w-[80%] mx-auto my-16 text-center text-black font-medium leading-6 text-xl">
        نحن (اسم المتجر) نُرحب دائما بسماع اقتراحاتكم وملاحظاتكم وكافة الشكاوئ
        لرفع الخدمة المقدمة إليكم
      </p>
      {/* Form */}
      <div className="flex items-center justify-center flex-col gap-4">
        <button
          onClick={(e) => setActive(e.target.name)}
          name="complaint"
          className={`w-[90%] block outline-none e font-medium shadow_custom rounded-[11px] text-lg h-16 mx-auto
          ${
            active == "complaint"
              ? "text-white bg-primary"
              : "text-black bg-bas"
          }
          `}
        >
          رفع شكوى
        </button>
        <button
          onClick={(e) => setActive(e.target.name)}
          name="suggestion"
          className={`w-[90%] block outline-none e font-medium shadow_custom rounded-[11px] text-lg h-16 mx-auto
          ${
            active == "suggestion"
              ? "text-white bg-primary"
              : "text-black bg-bas"
          }
          `}
        >
          رفع اقتراح
        </button>
      </div>
      <form className="mt-12">
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            اسم العميل
          </label>
          <input
            placeholder="أدخل نص"
            type="text"
            className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] px-1 shadow_custom"
          />
        </div>
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            رقم الهاتف
          </label>
          <div
            className="h-12 bg-base shadow_custom rounded-lg overflow-hidden flex items-center"
            dir="ltr"
          >
            <p className="w-[20%] text-primary border-r border-r-[#d4d1d1] h-full flex items-center justify-center">
              +966
            </p>
            <input
              placeholder="554******"
              type="number"
              defaultValue="553558045"
              className="block w-[80%] outline-none bg-base mx-auto h-full placeholder:text-[16px] px-2 text-primary"
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            النص المرسل
          </label>
          <textarea
            placeholder="أدخل نص"
            type="text"
            className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] p-1 shadow_custom min-h-32"
          />
        </div>
        <button
          type="button"
          onClick={openModalHandler}
          className={`w-[90%] block mt-8 outline-none font-medium shadow_custom rounded-[11px] text-lg h-16 mx-auto text-white bg-primary`}
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
