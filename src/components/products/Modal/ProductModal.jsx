import { useDispatch, useSelector } from "react-redux";
import { rate } from "../../../assets";
import Modal from "../../modal/Modal";
import CounterCart from "../../layout/CounterCart";
import { useEffect, useState } from "react";
import { addToCart } from "../../../store/slices/cartSlice";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import Button from "../../layout/Button";

const ProductModal = ({ isOpen, closeModalHandler }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    product: {
      id,
      image,
      ar_name,
      en_name,
      description,
      price_include_tax = 0,
      discount,
    },
    supplimetaries,
  } = useSelector((state) => state.modalSlice);
  const [count, setCount] = useState(1);
  const [supplimetariesChecked, setSupplimetariesChecked] = useState([]);
  let totalSupplimetariesPrice = 0;

  // Collect add-on prices
  supplimetariesChecked.forEach((sup) => {
    totalSupplimetariesPrice += sup.price_include_tax;
  });

  // Supplimetaries Checked Handler
  const supplimetariesCheckedHandler = (object) => {
    let existingSup = supplimetariesChecked.find((sup) => {
      return sup.id == object.id;
    });

    if (!existingSup) {
      setSupplimetariesChecked((prev) => {
        return [...prev, object];
      });
    } else {
      setSupplimetariesChecked((prev) => {
        return prev.filter((sup) => {
          return sup.id != object.id;
        });
      });
    }
  };

  // Counter + or -
  const counterHandler = (type) => {
    if (type == "dec" && count > 1) {
      setCount(count - 1);
    }
    if (type == "inc") {
      setCount(count + 1);
    }
  };

  // Close Modal And Clear Modal Handler
  const closeModalAndClearModalHandler = () => {
    closeModalHandler();
    setSupplimetariesChecked([]);
    setCount(1);
  };

  // Add To Cart Handler
  const dispatch = useDispatch();
  const addToCartHandler = () => {
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
      count,
      supplimetaries: [...supplimetariesChecked],
    };
    dispatch(addToCart(product));
    closeModalAndClearModalHandler();
    language == "ar" ? toast.success("تمت الاضافة") : toast.success("Added");
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModalHandler={closeModalAndClearModalHandler}
      height="min-h-[80vh]"
    >
      <div className="flex flex-col rounded-[11px] items-center h-full">
        <div className="w-full h-[30%] rounded-t-[11px]">
          <img
            src={`https://backend.skilltax.sa/public/${image}`}
            alt="product_1"
            className="object-cover w-full h-full max-h-[150px] rounded-t-[11px]"
          />
        </div>
        {/* About */}
        <div className="w-full p-4 text-start flex items-start flex-col gap-4">
          <div className="flex gap-1 items-center justify-start">
            <h3 className="me-2 font-bold text-[18px] text-primary leading-[19.2px]">
              {language == "ar" ? ar_name : en_name}
            </h3>
            <p className="text-[12px] font-medium text-secondary1 leading-[14.4px] mb-[-4px]">
              2.3
            </p>
            <img src={rate} alt="rate" className="w-3" />
          </div>
          <p
            className={`${
              language == "ar" ? "text-right" : "text-left"
            } w-full mx-auto text-primary font-light leading-4 text-[12px]`}
          >
            {description != "null" && description != null && description}
          </p>
        </div>
        {/* addition */}
        <div className="w-full p-4 flex items-center flex-col gap-4">
          <div className="w-full flex items-start gap-3">
            {supplimetaries?.length > 0 && (
              <>
                <div className="bg-secondary1 text-center border-secondary1 border-[1px] min-w-16 min-h-8 rounded-lg text-[11px] font-normal leading-3 text-white flex items-center justify-center">
                  {t("modal.addOns")}{" "}
                </div>
                <ul className="w-full flex items-center gap-1 flex-wrap">
                  {supplimetaries?.map(
                    ({ id, price_include_tax, ar_name, en_name }) => {
                      const isSelected = supplimetariesChecked.some(
                        (sup) => sup.id === id
                      );
                      return (
                        <li key={id}>
                          <label
                            id={id}
                            onClick={() =>
                              supplimetariesCheckedHandler({
                                id,
                                price_include_tax,
                                ar_name,
                                en_name,
                              })
                            }
                            htmlFor={id}
                            className={`border-primary border-[1px] flex-col cursor-pointer min-h-8 rounded-lg text-[11px] font-normal flex items-center justify-center
                             ${
                               isSelected
                                 ? "text-white bg-primary"
                                 : "text-primary bg-white"
                             }
                            )}`}
                          >
                            <div className="flex items-center justify-center gap-1 px-2 mt-1">
                              <span>
                                {language == "ar" ? ar_name : en_name}
                              </span>{" "}
                              + <span>{price_include_tax} ريال</span>
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              value={id}
                              id={id}
                            />
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
        {/* Modal Footer */}
        <div className="w-full absolute bottom-1 left-0 py-2 px-4 ">
          <div className="w-full h-full flex items-center gap-4">
            <CounterCart
              counterHandler={counterHandler}
              count={count}
              small={false}
            />

            <button
              onClick={addToCartHandler}
              className="flex-[2] bg-primary h-9 w-full rounded-lg flex items-center text-center justify-between px-2 l"
            >
              <p className="text-center text-white text-xs mt-[6px]">
                {t("modal.addCart")}
              </p>
              <div className=" items-center justify-center text-base text-secondary mt-2  leading-[19.2px]">
                {(
                  (price_include_tax + totalSupplimetariesPrice) *
                  count
                ).toFixed(2)}{" "}
                {t("view.currency")}
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
