const Overlay = ({ open, close }) => {
  return (
    <div
      onClick={close}
      className={`${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      } w-full h-full fixed inset-0 bg-[#00000080] z-40 transition-all duration-300`}
    ></div>
  );
};

export default Overlay;
