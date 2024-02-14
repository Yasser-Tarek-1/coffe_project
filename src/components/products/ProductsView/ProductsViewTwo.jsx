import { useState } from "react";
import { rate, cal } from "../../../assets";
import CounterCart from "../../layout/CounterCart";
import { useTranslation } from "react-i18next";
const ProductsViewTwo = ({
  onClick,
  id,
  ar_name,
  en_name,
  discount,
  image,
  price_include_tax,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [count, setCount] = useState(1);

  const counterHandler = (type) => {
    if (type == "dec" && count > 0) {
      setCount(count - 1);
    }
    if (type == "inc") {
      setCount(count + 1);
    }
  };
  return (
    <div
      onClick={onClick}
      className="w-full min-h-[109px] rounded-2xl px-4 pt-3 pb-1 bg-base relative shadow-all cursor-pointer"
    >
      {/* Discount */}
      {discount && (
        <div className="absolute top-0 left-0 w-[81px] h-[29px] bg-secondary rounded-tl-2xl rounded-r-2xl text-primary flex items-center justify-center font-bold text-[11px]">
          {t("view.discount")} {discount}%
        </div>
      )}
      {/* Card Body */}
      <div className="flex justify-between items-end">
        {/* image */}
        <div className="rounded-lg w-16 h-[49.86px]">
          <img
            src={`https://backend.skilltax.sa/public/${image}`}
            alt="image"
            className="rounded-lg w-16 h-[50px] object-cover"
          />
        </div>
        {/* Deatials */}
        <div className="flex flex-col items-start gap-[11px] flex-1 mx-4">
          <div className=" w-full flex items-center justify-between flex-wrap">
            <h3 className="text-[14px] font-bold leading-[16.8px] text-primary flex-1">
              {language == "ar" ? ar_name : en_name}
            </h3>
            <div className="flex items-center gap-1 flex-1 justify-end">
              <p className="text-[8px] font-medium text-secondary1">450 CAL</p>
              <img src={cal} alt="cal" />
              <p className="text-[8px] font-medium text-secondary1">2.3</p>
              <img src={rate} alt="rate" />
            </div>
          </div>
          {/* Price */}
          <div className="flex items-center gap-2">
            <h3
              className={`${
                discount && "line-through"
              } text-[11px] xs:text-[12px]font-bold leading-[16.8px] text-primary  decoration-[#FF0000]`}
            >
              {price_include_tax} {t("view.currency")}
            </h3>
            {discount && (
              <h3
                className={`text-[11px] xs:text-[12px]font-bold leading-[16.8px] text-primary `}
              >
                {price_include_tax} {t("view.currency")}
              </h3>
            )}
          </div>
        </div>
        {/* CounterCart */}
        {/* <CounterCart counterHandler={counterHandler} count={count} /> */}
      </div>
      <hr className="bg-secondary1 w-full h-[2px] my-2" />
      <p className="font-light text-[8px] text-primary leading-[9.6px]">
        {language == "ar" ? (
          <>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا
            النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى،
          </>
        ) : (
          <>
            This text is an example of text that can be replaced in the same
            space. This text was generated from the Arabic text generator, where
            you can generate such text or many other texts in addition to
            increasing the number of letters that the application generates.
            This text is an example of text that can be Replace in the same
            space. This text was generated from the Arabic text generator,
          </>
        )}
      </p>
    </div>
  );
};

export default ProductsViewTwo;
