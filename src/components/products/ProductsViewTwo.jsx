import { product_1, rate, cal } from "../../assets";
import CartAdd from "./CartAdd";
const ProductsViewTwo = () => {
  return (
    <div className="w-full min-h-[109px] rounded-2xl px-4 pt-3 pb-[2px] bg-[#F2F2F2] relative shadow_custom">
      {/* Discount */}
      <div
        dir="rtl"
        className="absolute top-0 left-0 w-[81px] h-[29px] bg-[#FCBD1F] rounded-tl-2xl rounded-r-2xl text-[#373873] flex items-center justify-center font-bold text-[11px]"
      >
        خصم 20%
      </div>
      <div className="flex justify-between items-end">
        {/* 1 */}
        <CartAdd />
        {/* 2 */}
        <div className="flex  flex-col items-end gap-[11px] flex-1 mx-4">
          {/* Deatials */}
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={rate} alt="rate" />
              <p className="text-[8px] font-medium text-[#8185C9]">2.3</p>
              <img src={cal} alt="cal" />
              <p className="text-[8px] font-medium text-[#8185C9]">450 CAL</p>
            </div>
            <h3 className="text-[14px] font-bold leading-[16.8px] text-[#373873]">
              سبانش لاتيه
            </h3>
          </div>
          {/* Price */}
          <div className="flex items-center gap-2">
            {true && (
              <h3 className="text-[12px] font-bold leading-[16.8px] text-[#FF0000] ">
                12 ريال
              </h3>
            )}
            <h3
              className={`text-[12px] font-bold leading-[16.8px] text-[#373873] ${
                true && "line-through decoration-[#FF0000]"
              }`}
            >
              12 ريال
            </h3>
          </div>
        </div>
        {/* 3 */}
        <div className="rounded-lg w-16 h-[49.86px]">
          <img
            src={product_1}
            alt="image"
            className="rounded-lg w-16 h-[49.86px]"
          />
        </div>
      </div>
      <hr className="bg-[#8185C9] w-full h-[2px] my-2" />
      <p
        className="font-light text-[8px] text-[#373873] leading-[9.6px]"
        dir="rtl"
      >
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
