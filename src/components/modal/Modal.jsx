import { Fragment } from "react";

const Modal = ({ isOpen, closeModalHandler, children, height }) => {
  return (
    <Fragment>
      <div
        onClick={closeModalHandler}
        className={`w-full h-full fixed inset-0 z-40 flex items-center justify-center transition-all bg-[#000000b2] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`fixed max-w-[300px] z-50 bg-white w-[75%]  left-[50%] rounded-[11px] overflow-hidden top-[50%] translate-y-[-50%] translate-x-[-50%] transition-all ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }
        ${height && height}
        `}
      >
        <div className="modal-content">{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
