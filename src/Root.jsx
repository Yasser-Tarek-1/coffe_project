import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen h-full relative">
      <Outlet />
    </div>
  );
}

export default Root;
