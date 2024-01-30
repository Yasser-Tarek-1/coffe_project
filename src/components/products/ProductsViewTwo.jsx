import { product_1, rate, cal } from "../../assets";
import CounterCart from "./CounterCart";
const ProductsViewTwo = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full min-h-[109px] rounded-2xl px-4 pt-3 pb-1 bg-base relative shadow_custom cursor-pointer"
    >
      {/* Discount */}
      <div className="absolute top-0 left-0 w-[81px] h-[29px] bg-secondary rounded-tl-2xl rounded-r-2xl text-primary flex items-center justify-center font-bold text-[11px]">
        خصم 20%
      </div>
      {/* Card Body */}
      <div className="flex justify-between items-end">
        {/* image */}
        <div className="rounded-lg w-16 h-[49.86px]">
          <img
            src={product_1}
            alt="image"
            className="rounded-lg w-16 h-[50px] object-cover"
          />
        </div>
        {/* Deatials */}
        <div className="flex flex-col items-start gap-[11px] flex-1 mx-4">
          <div className=" w-full flex items-center justify-between flex-wrap">
            <h3 className="text-[14px] font-bold leading-[16.8px] text-primary flex-1">
              سبانش لاتيه
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
            {true && (
              <h3 className="text-[12px] font-bold leading-[16.8px] text-[#FF0000] ">
                12 ريال
              </h3>
            )}
            <h3
              className={`text-[12px] font-bold leading-[16.8px] text-primary ${
                true && "line-through decoration-[#FF0000]"
              }`}
            >
              12 ريال
            </h3>
          </div>
        </div>
        {/* CounterCart */}
        <CounterCart />
      </div>
      <hr className="bg-secondary1 w-full h-[2px] my-2" />
      <p className="font-light text-[8px] text-primary leading-[9.6px]">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.هذا النص هو
        مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
        النص العربى،
      </p>
    </div>
  );
};

export default ProductsViewTwo;
