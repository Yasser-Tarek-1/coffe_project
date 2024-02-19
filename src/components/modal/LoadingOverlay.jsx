import { createPortal } from "react-dom";
import Overlay from "./Overlay";

const LoadingOverlay = () => {
  return (
    <div>
      {createPortal(
        <>
          <Overlay open={true} />
          <div className="absolute w-full h-full inset-0 flex items-center justify-center z-[9999]">
            <div
              className="inline-block text-primary h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default LoadingOverlay;
