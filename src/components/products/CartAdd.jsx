import { useState } from "react";

const CartAdd = () => {
  const [count, setCount] = useState(0);
  const counterHandler = (type) => {
    if (type == "dec" && count > 0) {
      setCount(count - 1);
    }
    if (type == "inc") {
      setCount(count + 1);
    }
  };
  return (
    <div className="flex items-center gap-2 mr-1">
      <button
        onClick={() => counterHandler("dec")}
        className="w-4 h-4 bg-[#8185C9] rounded-full flex items-center justify-center text-[#fff]  text-sm"
      >
        -
      </button>
      <p className="text-[#373873] font-bold text-[12px] w-3 text-center">
        {count}
      </p>
      <button
        onClick={() => counterHandler("inc")}
        className="w-4 h-4 bg-[#8185C9] rounded-full flex items-center justify-center text-[#fff]  text-sm"
      >
        +
      </button>
    </div>
  );
};

export default CartAdd;
