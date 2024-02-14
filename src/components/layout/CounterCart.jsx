import { incrementBtn, decrementBtn } from "../../assets";

const CounterCart = ({ count, counterHandler, small }) => {
  return (
    <div className={`${!small && "flex-1"} flex items-center gap-2 h-8`}>
      <button
        className={small ? "w-5 block" : "w-7 block"}
        onClick={() => counterHandler("inc")}
      >
        <img src={incrementBtn} alt="+" className="w-full" />
      </button>
      <p
        className={`${
          small ? "text-xs w-3" : "text-base w-4"
        } text-primary font-bold text-center mt-[6px] flex items-center justify-center`}
      >
        {count}
      </p>
      <button
        className={small ? "w-5 block" : "w-7 block"}
        onClick={() => counterHandler("dec")}
      >
        <img src={decrementBtn} alt="-" className="w-full" />
      </button>
    </div>
  );
};

export default CounterCart;
