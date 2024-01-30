import { arrow_back, cart } from "../assets";
import Footer from "../components/Footer";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  return (
    <div className="min-h-screen h-full relative w-full bg-white ">
      {/* Head */}
      <div className="w-full h-24 bg-base shadow_custom rounded-b-lg flex items-center justify-between pt-12 px-4">
        <div className="flex items-center gap-2">
          <img src={cart} alt="doc_icon" className="w-7" />
          <h3 className="text-xl font-bold leading-6 text-primary">السلة </h3>
        </div>
        <button onClick={() => history.back(1)}>
          <img src={arrow_back} alt="arrow_back" className="w-5" />
        </button>
      </div>
      <div className="w-full px-4">
        <h3 className="text-xl text-primary font-bold mt-6 mb-4">طلباتي</h3>
        <div className="flex items-center justify-center gap-4 flex-col">
          <CartItem />
          <CartItem />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full bg-white absolute bottom-1 left-0 py-8 shadow_custom_cart rounded-t-[27px]  px-4">
        <h3 className="text-primary text-center text-[16px] font-bold mb-3">
          ملخص الطلب
        </h3>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#37387380] text-[16px] font-bold">مجموع الطلب</p>
          <p className="text-primary text-[16px] font-bold">36 ريال</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#37387380] text-[16px] font-bold">كود الخصم</p>
          <p className="text-primary text-[16px] font-bold">4 ريال</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#37387380] text-[16px] font-bold">
            الضريبة المضافة 15%
          </p>
          <p className="text-primary text-[16px] font-bold">5.4 ريال</p>
        </div>
        <hr className="bg-[#37387380] w-full h-[1px] my-2" />
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#37387380] text-[16px] font-bold">
            المجموع شامل الضريبة
          </p>
          <p className="text-primary text-[16px] font-bold">39.4 ريال</p>
        </div>
        <>
          <p className=" font-bold text-[16px] text-[#37387380] text-center mt-10">
            جميع الأسعار تشمل ضريبة 15%
          </p>
          <button className="rounded-lg text-[16px] h-16 font-bold transition-all bg-primary py-1 px-4 text-[#fff] flex items-center gap-6 justify-center w-full">
            <p>اتمم الطلب </p>
            <p> 39.4 ريال </p>
          </button>
        </>
      </div>
    </div>
  );
};

export default Cart;
