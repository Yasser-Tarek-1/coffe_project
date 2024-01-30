import { useState } from "react";
import ProductsViewOne from "./ProductsViewOne";
import ProductsViewTwo from "./ProductsViewTwo";
import Modal from "../modal/Modal";
import { coffe_cup_pexels, rate } from "../../assets";
import CounterCart from "./CounterCart";

const sizes = [
  { id: 1, name: "S", price: 12, cal: 354 },
  { id: 2, name: "M", price: 13, cal: 454 },
  { id: 3, name: "L", price: 14, cal: 505 },
];

const additions = [
  { id: 1, name: "دبل", price: 2 },
  { id: 2, name: "دبل شوت", price: 4 },
  { id: 3, name: "كراميل", price: 7 },
];

const Products = ({ toggle, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedSize, setCheckedSize] = useState("");
  const [checkedAdditions, setCheckedAdditions] = useState("");

  const openModalHandler = (id) => {
    console.log(id);
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const checkedSizeHandler = (e) => {
    setCheckedSize(e);
  };
  const checkedAdditionsHandler = (e) => {
    setCheckedAdditions(e);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
        height="min-h-[80vh]"
      >
        <div className="flex flex-col rounded-[11px] items-center h-full">
          <div className="w-full h-[30%] rounded-t-[11px]">
            <img
              src={coffe_cup_pexels}
              alt="product_1"
              className="object-cover w-full h-full max-h-[150px] rounded-t-[11px]"
            />
          </div>
          {/* About */}
          <div className="w-full p-4 text-start flex items-start flex-col gap-4">
            <div className="flex gap-1 items-center justify-start">
              <h3 className="me-2 font-bold text-[18px] text-primary leading-[19.2px]">
                لاتيه
              </h3>
              <p className="text-[12px] font-medium text-secondary1 leading-[14.4px] mb-[-4px]">
                2.3
              </p>
              <img src={rate} alt="rate" className="w-3" />
            </div>
            <p className="w-full mx-auto  text-right text-primary  font-light leading-4 text-[12px]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
              توليد هذا النص من مولد النص العربى،
            </p>
          </div>
          {/* addition */}
          <div className="w-full p-4 flex items-center flex-col gap-4">
            {/* 1 */}
            <div className="w-full flex items-start gap-3">
              <div className="bg-secondary1 border-secondary1 border-[1px] w-16 h-7 rounded-lg text-[10px] font-normal leading-3 text-white flex items-center justify-center">
                الحجم
              </div>
              <ul className="w-full flex items-center gap-1 flex-wrap">
                {sizes.map(({ id, price, name, cal }) => {
                  return (
                    <li key={id}>
                      <label
                        name={name}
                        data-value={name}
                        onClick={() => checkedSizeHandler(name)}
                        className={`border-primary border-[1px] flex-col cursor-pointer w-16 h-7 rounded-lg text-[10px] font-normal leading-3 flex items-center justify-center
                  ${
                    checkedSize == name
                      ? "text-white bg-primary"
                      : "text-primary bg-white"
                  } 
                  `}
                      >
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-secondary">S.R {price}</span>
                          <span>-</span>
                          <span> {name}</span>
                        </div>
                        <span>{cal} Cal </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* 2 */}
            <div className="w-full flex items-start gap-3">
              <div className="bg-secondary1 border-secondary1 border-[1px] min-w-16 min-h-7 rounded-lg text-[10px] font-normal leading-3 text-white flex items-center justify-center">
                الإضافات
              </div>
              <ul className="w-full flex items-center gap-2 flex-wrap">
                {additions.map(({ id, price, name }) => {
                  return (
                    <li key={id}>
                      <label
                        name={name}
                        data-value={name}
                        onClick={() => checkedAdditionsHandler(name)}
                        className={`border-primary border-[1px] flex-col cursor-pointer min-h-7 rounded-lg text-[10px] font-normal leading-3 flex items-center justify-center
                  ${
                    checkedAdditions == name
                      ? "text-white bg-primary"
                      : "text-primary bg-white"
                  } 
                  `}
                      >
                        <div className="flex items-center justify-center gap-1 px-2">
                          <span>{name}</span> + <span>{price}</span>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Modal Footer */}
          <div className="w-full absolute bottom-1 left-0 py-2 px-4 flex items-center gap-4">
            <CounterCart />
            <button className="rounded-lg text-[16px] h-8  transition-all bg-primary py-1 px-4 text-[#fff] flex items-center justify-between w-full">
              <p className="text-[10px] font-medium">اضف للسلة</p>
              <p className="text-[16px] text-secondary font-normal">12 ريال</p>
            </button>
          </div>
        </div>
      </Modal>
      <div className="mt-8">
        {toggle ? (
          <div className="w-full h-full flex flex-wrap gap-2 xs:gap-4">
            {products.map(({ id }) => {
              return (
                <ProductsViewOne
                  key={id}
                  onClick={() => openModalHandler(id)}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col gap-[18px]">
            {products.map(({ id }) => {
              return (
                <ProductsViewTwo
                  key={id}
                  onClick={() => openModalHandler(id)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
