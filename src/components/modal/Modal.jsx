import { createPortal } from "react-dom";
import Overlay from "./Overlay";

const Modal = ({ closeModalHandler, isOpen, children, height }) => {
  return (
    <div>
      {createPortal(
        <>
          <Overlay open={isOpen} close={closeModalHandler} />
          <div
            className={`fixed w-[85%] max-w-[390px] z-50 bg-white left-[50%] rounded-[11px] overflow-hidden top-[50%] translate-y-[-50%] translate-x-[-50%] transition-all ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }
        ${height && height}
        `}
          >
            <div className="modal-content">{children}</div>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;
