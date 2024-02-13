import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Root() {
  const data = useSelector((state) => state.cartSlice);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data));
  }, [data]);

  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute("dir", i18n.dir());
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n, i18n.language]);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen h-full relative">
      <Outlet />
    </div>
  );
}

export default Root;
