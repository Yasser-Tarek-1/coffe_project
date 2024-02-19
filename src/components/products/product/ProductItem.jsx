import { rate, cal } from "../../../assets";
import { useTranslation } from "react-i18next";
import { getProductSupplimetariesHandler } from "../../../services";
import { useGetSupplimetariesQuery } from "../../../store/apis/supplimetaries";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import toast from "react-hot-toast";

const ProductItem = ({
  toggle,
  onClick,
  id,
  ar_name,
  en_name,
  discount,
  image,
  price_include_tax,
  description,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { data: supplimetariesData } = useGetSupplimetariesQuery();
  const dispatch = useDispatch();
  const productSupp = getProductSupplimetariesHandler(id, supplimetariesData);
  // open modal if found product supplimetaries to show
  const openModal = () => {
    if (productSupp.length > 0) {
      onClick();
    }
  };

  const addToCartFun = () => {
    let product = {
      product: {
        id,
        image,
        ar_name,
        en_name,
        description,
        price_include_tax,
        discount,
      },
      count: 1,
      supplimetaries: [],
    };
    dispatch(addToCart(product));
    language == "ar" ? toast.success("تمت الاضافة") : toast.success("Added");
  };

  const addToCartHandler = () => {
    // open modal if found product supplimetaries to show
    if (productSupp.length > 0) {
      onClick();
    } else {
      // add to cart if not found product supplimetaries to show
      addToCartFun();
    }
  };

  return (
    <>
      {toggle ? (
        <div
          onClick={openModal}
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
            <div className="flex items-start justify-between gap-1">
              <h3 className="text-[14px] font-bold leading-[16.8px] text-primary flex-1 mt-1">
                {language == "ar" ? ar_name : en_name}
              </h3>
              <div className="flex items-center gap-1 justify-end flex-wrap">
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
            {/* Price */}
            <button
              onClick={addToCartHandler}
              className="w-36 flex justify-between mx-auto bg-primary rounded-lg items-center h-7 px-2 mt-3 "
            >
              <p className="text-xs text-white mt-[4px]">
                {" "}
                {t("modal.addCart")}
              </p>
              <p className="text-xs text-secondary mt-[4px]">
                {price_include_tax} {t("view.currency")}
              </p>
            </button>
            {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3
              className={`${
                discount && "line-through"
              } text-[12px] font-bold leading-[16.8px] text-primary  decoration-[#FF0000]`}
            >
              {price_include_tax} {t("view.currency")}
            </h3>
            {discount && (
              <h3
                className={`text-[12px]font-bold leading-[16.8px] text-primary `}
              >
                {price_include_tax} {t("view.currency")}
              </h3>
            )}
          </div>
     
        </div> */}
          </div>
        </div>
      ) : (
        <div
          onClick={openModal}
          className="w-full min-h-[109px] rounded-2xl px-4 pt-3 pb-1 bg-base relative shadow-all cursor-pointer"
        >
          {/* Discount */}
          {discount && (
            <div className="absolute top-0 left-0 w-[81px] h-[29px] bg-secondary rounded-tl-2xl rounded-r-2xl text-primary flex items-center justify-center font-bold text-[11px]">
              {t("view.discount")} {discount}%
            </div>
          )}
          {/* Card Body */}
          <div className="flex justify-between items-start">
            {/* image */}
            <div className="rounded-lg w-16 h-[49.86px]">
              <img
                src={`https://backend.skilltax.sa/public/${image}`}
                alt="image"
                className="rounded-lg w-16 h-[50px] object-cover"
              />
            </div>
            {/* Deatials */}
            <div className="flex flex-col items-end gap-[11px] flex-1 mx-4">
              <div className="flex items-center self-start w-[75%] justify-between gap-1">
                <h3 className="text-[14px] font-bold leading-[16.8px] text-primary mt-1">
                  {language == "ar" ? ar_name : en_name}
                </h3>
                <div className="flex items-center gap-1 justify-end flex-wrap">
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
              <button
                onClick={addToCartHandler}
                className="w-36 flex justify-between bg-primary rounded-lg items-center h-7 px-2 mt-3"
              >
                <p className="text-xs text-white"> {t("modal.addCart")}</p>
                <p className="text-xs text-secondary">
                  {price_include_tax} {t("view.currency")}
                </p>
              </button>
            </div>
          </div>
          <hr className="bg-secondary1 w-full h-[2px] my-2" />
          <p className="font-light text-[10px] text-primary leading-[9.6px]">
            {language == "ar" ? (
              <>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                تم توليد هذا النص من مولد النص العربى،
              </>
            ) : (
              <>
                This text is an example of text that can be replaced in the same
                space. This text was generated from the Arabic text generator,
                where you can generate such text or many other texts in addition
                to increasing the number of letters that the application
                generates. This text is an example of text that can be Replace
                in the same space. This text was generated from the Arabic text
                generator,
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default ProductItem;
