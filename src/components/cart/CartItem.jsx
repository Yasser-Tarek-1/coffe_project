import CounterCart from "../layout/CounterCart";
import { close, cal, rate } from "../../assets";
import {
  removeFromCart,
  incCount,
  decCount,
} from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const CartItem = ({
  id,
  count,
  product: {
    ar_name,
    en_name,
    description,
    image,
    price_include_tax,
    discount,
  },
  supplimetaries,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  let dispatch = useDispatch();

  // Update Count
  const counterHandler = (type) => {
    if (type == "dec" && count >= 2) {
      dispatch(decCount(id));
    }
    if (type == "inc") {
      dispatch(incCount(id));
    }
  };

  return (
    <div className="h-[109px] w-full bg-base shadow-all rounded-2xl p-4 relative">
      {/* Remove From Cart */}
      <button
        onClick={() => dispatch(removeFromCart(id))}
        className={`${
          language == "ar" ? "left-[16px]" : "right-[16px]"
        } absolute top-[16px]`}
      >
        <img src={close} alt="close" className="w-4" />
      </button>
      {/* Body */}
      <div className="flex items-center justify-between me-8 h-[77px]">
        {/* right */}
        {/* right Body */}
        <div className="flex items-start justify-center gap-2 ">
          <div className="h-full">
            <div>
              <img
                src={`https://backend.skilltax.sa/public/${image}`}
                alt={language == "ar" ? ar_name : en_name}
                className="w-16 h-16 object-cover rounded-lg mb-[10px]"
              />
            </div>
            <div className="flex items-center gap-1 flex-1 justify-end">
              <p className="text-[8px] font-medium text-secondary1 mt-[3px]">
                450 CAL
              </p>
              <img src={cal} alt="cal" />
              <p className="text-[8px] font-medium text-secondary1 mt-[3px]">
                2.3
              </p>
              <img src={rate} alt="rate" />
            </div>
          </div>
          {/* left Body */}
          <div className="h-full flex flex-col gap-1">
            <h3 className="text-[14px] font-bold leading-[16.8px] text-primary">
              {language == "ar" ? ar_name : en_name}
            </h3>
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

            {/* Additions */}
            <div className="flex flex-col gap-1">
              <p className="text-[#37387380] text-[8px] font-bold">
                {t("cart.size")}:
              </p>
              <p className="text-[#37387380] text-[8px] font-bold flex items-center gap-1">
                {t("modal.addOns")}:
                <p>
                  {language == "ar"
                    ? supplimetaries?.ar_name
                    : supplimetaries?.en_name}
                </p>
              </p>
              <p className="text-[#37387380] text-[8px] font-bold">
                {t("cart.notes")}:
              </p>
            </div>
          </div>
        </div>
        {/* left */}
        <CounterCart
          count={count}
          counterHandler={counterHandler}
          small={true}
        />
      </div>
    </div>
  );
};

export default CartItem;
