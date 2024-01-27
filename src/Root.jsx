import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="w-full xs:w-[430px] mx-auto min-h-screen h-full">
      <Outlet />
    </div>
  );
}

export default Root;
