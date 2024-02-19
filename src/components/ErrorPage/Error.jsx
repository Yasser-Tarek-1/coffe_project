import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MENU_ID } from "../../constants";

const Error = ({ error }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <h1 className="mb-4 text-6xl font-semibold text-primary">404</h1>
      <p className="mb-4 text-lg"> {t("404")}</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-primary font-semibold text-center">
        {error ? (
          <p>قم بالتأكد من صحة الرابط</p>
        ) : (
          <Link to={`/${MENU_ID}`}> {t("contactus.homePage")}</Link>
        )}
      </p>
    </div>
  );
};

export default Error;
