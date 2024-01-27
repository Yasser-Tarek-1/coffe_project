const Button = ({ children, onclick, style }) => {
  return (
    <button
      className={`w-[255.83px] h-[81.01px] rounded-[11px] text-[16px] font-medium transition-all ${style}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
