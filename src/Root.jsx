import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { useGetInformationQuery } from "./store/apis/basicInformation";

function Root() {
  const { data } = useGetInformationQuery();
  let { menuId } = useParams();
  const cart = useSelector((state) => state.cartSlice);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update title
    document.title =
      i18n.language == "ar" ? data?.ar_business_name : data?.en_business_name;

    // Update favicon
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = `https://backend.skilltax.sa/public/${data?.logo}`;
    }
  }, [data, i18n.language]);

  useEffect(() => {
    localStorage.setItem("MENU_ID", menuId);
  }, [menuId]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", i18n.dir());
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n, i18n.language]);

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen h-full relative">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 1500 }}
      />
      <Outlet />
    </div>
  );
}

export default Root;
