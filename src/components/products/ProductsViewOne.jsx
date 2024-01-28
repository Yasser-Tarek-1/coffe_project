import { product_1, rate, cal } from "../../assets";
import CartAdd from "./CartAdd";
const ProductsViewOne = () => {
  return (
    <div className="w-full min-h-[169px] rounded-2xl overflow-hidden relative">
      {/* Discount */}
      <div
        dir="rtl"
        className=" absolute w-[81px] h-[29px] bg-[#FCBD1F] rounded-tl-2xl rounded-r-2xl text-[#373873] flex items-center justify-center font-bold text-[11px]"
      >
        خصم 20%
      </div>
      <img src={product_1} alt="img" className="h-[111px] w-full" />
      <div className="p-2 h-[58px] flex flex-col justify-between">
        {/* Deatials */}
        <div className="flex items-center justify-between">
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
        <div className="flex items-center justify-between">
          <CartAdd />
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
      </div>
    </div>
  );
};

export default ProductsViewOne;
