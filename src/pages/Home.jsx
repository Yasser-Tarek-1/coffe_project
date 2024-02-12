import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/layout/Button";
import Logo from "../components/Logo";
import { logo_white, home } from "../assets";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div
      className="min-h-screen h-full relative bg-no-repeat bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${home})`, objectFit: "cover" }}
    >
      <div className="bg-[#000000b2] w-full h-full inset-0 absolute">
        <div className="mt-16">
          <Logo logo={logo_white} />
        </div>

        <div className="w-full my-[73px] h-[38px] bg-secondary font-medium text-[22px] text-primary text-center">
          <span>{t("home.store")}</span> <span>(عين سكر)</span>{" "}
          <span>{t("home.welcome")}</span>
        </div>
        <div className="flex flex-col items-center gap-[48px]">
          <Link to={"/view"}>
            <Button style="bg-primary text-[#fff] hover:bg-[#404183]">
              {t("home.order")}
            </Button>
          </Link>
          <Link to={"/contactus"}>
            <Button style="bg-base text-primary "> {t("home.send")}</Button>
          </Link>
          <Link to={"/aboutus"}>
            <Button style="bg-base text-primary ">{t("home.aboutUs")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
