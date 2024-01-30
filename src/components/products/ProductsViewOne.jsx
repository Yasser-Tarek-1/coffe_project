import { product_1, rate, cal } from "../../assets";
import CounterCart from "./CounterCart";
const ProductsViewOne = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="min-h-[169px] rounded-2xl overflow-hidden relative w-[calc(50%-4px)] xs:w-[calc(50%-8px)] cursor-pointer"
    >
      {/* Discount */}
      <div className="absolute w-[81px] h-[29px] bg-secondary rounded-tl-2xl rounded-r-2xl text-primary flex items-center justify-center font-bold text-[11px] left-0">
        خصم 20%
      </div>
      <img
        src={product_1}
        alt="img"
        className="max-h-[111px] w-full object-cover"
      />
      <div className="p-2 min-h-[58px] flex flex-col justify-between">
        {/* Deatials */}
        <div className="flex items-center justify-between">
          <h3 className="text-[12px] xs:text-[14px] font-bold leading-[16.8px] text-primary flex-1">
            سبانش لاتيه
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
            {true && (
              <h3 className="text-[11px] xs:text-[12px]font-bold leading-[16.8px] text-[#FF0000] ">
                12 ريال
              </h3>
            )}
            <h3
              className={`text-[11px] xs:text-[12px]font-bold leading-[16.8px] text-primary ${
                true && "line-through decoration-[#FF0000]"
              }`}
            >
              12 ريال
            </h3>
          </div>
          <CounterCart />
        </div>
      </div>
    </div>
  );
};

export default ProductsViewOne;
