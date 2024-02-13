import { useState } from "react";
import { product_1, rate, cal } from "../../../assets";
import CounterCart from "../../layout/CounterCart";
import { useTranslation } from "react-i18next";
const ProductsViewOne = ({
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
      className="min-h-[169px] rounded-2xl overflow-hidden relative w-[calc(50%-4px)] xs:w-[calc(50%-8px)] cursor-pointer"
    >
      {/* Discount */}
      {discount && (
        <div className="absolute w-[81px] h-[29px] bg-secondary rounded-tl-2xl rounded-r-2xl text-primary flex items-center justify-center font-bold text-[11px] left-0">
          {t("view.discount")} {discount}%
        </div>
      )}

      <img
        src={`https://backend.skilltax.sa/public/${image}`}
        alt="img"
        className="h-[111px] w-full object-cover"
      />
      <div className="p-2 min-h-[58px] flex flex-col justify-between">
        {/* Deatials */}
        <div className="flex items-center justify-between">
          <h3 className="text-[12px] xs:text-[14px] font-bold leading-[16.8px] text-primary flex-1">
            {language == "ar" ? ar_name : en_name}
          </h3>
          <div className="flex items-center gap-1 flex-1 justify-end">
            <p className="text-[6px] xs:text-[8px] font-medium text-secondary1">
              450 CAL
            </p>
            <img src={cal} alt="cal" />
            <p className="text-[6px] xs:text-[8px] font-medium text-secondary1">
              2.3
            </p>
            <img src={rate} alt="rate" />
          </div>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between">
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
          {/* <CounterCart counterHandler={counterHandler} count={count} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsViewOne;
