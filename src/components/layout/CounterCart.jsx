const CounterCart = ({ count, counterHandler, small }) => {
  let style = `${
    small ? "w-5 h-5 text-base" : "w-7 h-7 text-lg"
  }  bg-secondary1 rounded-full flex items-center justify-center text-[#fff] leading-[0]`;
  return (
    <div className="flex items-center gap-2 mr-1 h-8">
      <button onClick={() => counterHandler("inc")} className={style}>
        +
      </button>
      <p
        className={`${
          small ? "text-xs w-3" : "text-sm w-4"
        } text-primary font-bold text-center leading-[0]`}
      >
        {count}
      </p>
      <button onClick={() => counterHandler("dec")} className={style}>
        −
      </button>
    </div>
  );
};

export default CounterCart;
