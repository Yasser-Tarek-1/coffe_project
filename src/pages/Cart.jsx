import { useDispatch, useSelector } from "react-redux";
import { arrow_back, cart } from "../assets";
import CartItem from "../components/cart/CartItem";
import { totalPriceInCart } from "../store/slices/cartSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  let { products, totalPrice } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPriceInCart());
  }, [dispatch, products]);

  return (
    <div className="min-h-screen pb-[380px] h-full relative w-full bg-white ">
      {/* Head */}
      <div className="w-full h-24 bg-base shadow_custom rounded-b-lg flex items-center justify-between pt-12 px-4 relative z-10">
        <div className="flex items-center gap-2">
          <img src={cart} alt="doc_icon" className="w-7" />
          <h3 className="text-xl font-bold leading-6 text-primary">
            {t("cart.cart")}
          </h3>
        </div>
        <button
          className={language == "en" ? "rotate-[180deg]" : ""}
          onClick={() => history.back(1)}
        >
          <img src={arrow_back} alt="arrow_back" className="w-5" />
        </button>
      </div>
      {products.length > 0 ? (
        <>
          <div className="w-full px-4">
            <h3 className="text-xl text-primary font-bold mt-6 mb-4">
              {t("cart.orders")}
            </h3>
            <div className="flex items-center justify-center gap-4 flex-col">
              {products.map(({ id, ...data }) => {
                return <CartItem id={id} {...data} key={id} />;
              })}
            </div>
          </div>
          {/* Footer */}
          <div className="w-full max-h-[350px] bg-white absolute bottom-1 left-0 py-8 shadow_custom_cart rounded-t-[27px]  px-4">
            <h3 className="text-primary text-center text-[16px] font-bold mb-3">
              {t("cart.orderSummary")}
            </h3>
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#37387380] text-[16px] font-bold">
                {t("cart.orderTotal")}
              </p>
              <p className="text-primary text-[16px] font-bold">
                {totalPrice.toFixed(2)} {t("view.currency")}
              </p>
            </div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#37387380] text-[16px] font-bold">
                {t("cart.discount")}
              </p>
              <p className="text-primary text-[16px] font-bold">
                0 {t("view.currency")}
              </p>
            </div>
            {/* <div className="flex items-center justify-between mb-1">
          <p className="text-[#37387380] text-[16px] font-bold">
            الضريبة المضافة 15%
          </p>
          <p className="text-primary text-[16px] font-bold">5.4 ريال</p>
        </div> */}
            <hr className="bg-[#37387380] w-full h-[1px] my-2" />
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#37387380] text-[16px] font-bold">
                {t("cart.total")}
              </p>
              <p className="text-primary text-[16px] font-bold">
                {totalPrice.toFixed(2)} {t("view.currency")}
              </p>
            </div>
            <>
              <p className=" font-bold text-[16px] text-[#37387380] text-center mt-10">
                {t("view.tax")} 15%
              </p>
              <button className="rounded-lg text-[16px] h-16 font-bold transition-all bg-primary py-1 px-4 text-[#fff] flex items-center gap-6 justify-center w-full">
                <p>{t("cart.getOrder")}</p>
                <p>
                  {totalPrice.toFixed(2)} {t("view.currency")}
                </p>
              </button>
            </>
          </div>
        </>
      ) : (
        <div className="w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 leading-3">
          <img src={cart} alt="cart" className="w-36" />
          <p className="text-xl text-primary"> {t("cart.cartEmpty")}</p>
          <button
            onClick={() => history.back(1)}
            className=" underline text-secondary1 font-semibold"
          >
            {t("cart.goBack")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
