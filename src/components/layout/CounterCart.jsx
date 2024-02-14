import { incrementBtn, decrementBtn } from "../../assets";

const CounterCart = ({ count, counterHandler, small }) => {
  return (
    <div className="flex items-center gap-2 mr-1 h-8">
      <button
        className={small ? "w-5" : "w-7"}
        onClick={() => counterHandler("inc")}
      >
        <img src={incrementBtn} alt="+" className="w-full" />
      </button>
      <p
        className={`${
          small ? "text-xs w-3" : "text-sm w-4"
        } text-primary font-bold text-center leading-[0]`}
      >
        {count}
      </p>
      <button
        className={small ? "w-5" : "w-7"}
        onClick={() => counterHandler("dec")}
      >
        <img src={decrementBtn} alt="-" className="w-full" />
      </button>
    </div>
  );
};

export default CounterCart;
