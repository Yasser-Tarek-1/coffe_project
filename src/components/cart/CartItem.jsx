import CounterCart from "../products/CounterCart";
import { close, product_1, cal, rate } from "../../assets";

const CartItem = () => {
  return (
    <div className="h-[109px] w-full bg-base shadow_custom rounded-2xl p-4 relative">
      {/* Close */}
      <button className="absolute left-[16px] top-[16px]">
        <img src={close} alt="close" className="w-4" />
      </button>
      {/* Body */}
      <div className="flex items-center justify-between me-8 h-[77px]">
        {/* right */}
        {/* right Body */}
        <div className="flex items-start justify-center gap-2">
          <div className="h-full">
            <div>
              <img
                src={product_1}
                alt="product_1"
                className="w-16 h-16 object-cover rounded-lg mb-[10px]"
              />
            </div>
            <div className="flex items-center gap-1 flex-1 justify-end">
              <p className="text-[8px] font-medium text-secondary1">450 CAL</p>
              <img src={cal} alt="cal" />
              <p className="text-[8px] font-medium text-secondary1">2.3</p>
              <img src={rate} alt="rate" />
            </div>
          </div>
          {/* left Body */}
          <div className="h-full flex flex-col gap-1">
            <h3 className="text-[14px] font-bold leading-[16.8px] text-primary">
              لاتيه
            </h3>
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
            {/* Additions */}
            <div className="flex flex-col gap-1">
              <p className="text-[#37387380] text-[8px] font-bold">الحجم</p>
              <p className="text-[#37387380] text-[8px] font-bold">الإضافات</p>
              <p className="text-[#37387380] text-[8px] font-bold">الملاحظات</p>
            </div>
          </div>
        </div>
        {/* left */}
        <CounterCart minCount={1} />
      </div>
    </div>
  );
};

export default CartItem;
