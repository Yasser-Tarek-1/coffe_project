import { useState } from "react";

const CounterCart = ({ minCount = 0 }) => {
  const [count, setCount] = useState(minCount);
  const counterHandler = (type) => {
    if (type == "dec" && count > minCount) {
      setCount(count - 1);
    }
    if (type == "inc") {
      setCount(count + 1);
    }
  };
  return (
    <div className="flex items-center gap-2 mr-1">
      <button
        onClick={() => counterHandler("inc")}
        className="w-4 h-4 bg-secondary1 rounded-full flex items-center justify-center text-[#fff]  text-sm"
      >
        +
      </button>
      <p className="text-primary font-bold text-[12px] w-3 text-center">
        {count}
      </p>
      <button
        onClick={() => counterHandler("dec")}
        className="w-4 h-4 bg-secondary1 rounded-full flex items-center justify-center text-[#fff]  text-sm"
      >
        -
      </button>
    </div>
  );
};

export default CounterCart;
