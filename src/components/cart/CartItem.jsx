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
  product: { ar_name, en_name, image, price_include_tax, discount },
  supplimetaries,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  let length = supplimetaries?.length;
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
    <div className="min-h-[109px] w-full bg-base shadow-all rounded-2xl p-4 relative">
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
      <div className="flex items-center justify-between me-4 min-h-[77px]">
        {/* right */}
        {/* right Body */}
        <div className="flex items-start justify-center gap-3">
          <div className="h-full">
            <div className="w-20">
              <img
                src={`https://backend.skilltax.sa/public/${image}`}
                alt={language == "ar" ? ar_name : en_name}
                className="w-20 h-16 object-cover rounded-lg mb-[10px]"
              />
            </div>
            <div className="flex items-center gap-1 justify-end w-full">
              <div className="flex items-center gap-1">
                <p className="text-[11px] font-medium text-secondary1 mt-1">
                  90 CAL
                </p>
                <img src={cal} alt="cal" className="w-2" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[11px] font-medium text-secondary1 mt-1">
                  4.3
                </p>
                <img src={rate} alt="rate" className="w-2" />
              </div>
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
              {/* <p className="text-[#37387380] text-[8px] font-bold">
                {t("cart.size")}:
              </p> */}

              {length > 0 && (
                <div className="text-[#37387380] text-[9px] font-bold flex items-start gap-1 mt-2">
                  {t("modal.addOns")}:
                  <p>
                    {supplimetaries.map(({ id, ar_name, en_name }, idx) => {
                      return (
                        <span key={id}>
                          {language == "ar" ? ar_name : en_name}
                          {length - 1 != idx && " - "}
                        </span>
                      );
                    })}
                  </p>
                </div>
              )}
              {/* <p className="text-[#37387380] text-[8px] font-bold">
                {t("cart.notes")}:
              </p> */}
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
