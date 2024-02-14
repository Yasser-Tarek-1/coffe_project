import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/layout/Button";
import Logo from "../components/layout/Logo";
import { home } from "../assets";
import { useGetInformationQuery } from "../store/apis/Information";

const Home = () => {
  const { data } = useGetInformationQuery();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <div
      className="min-h-screen h-full relative bg-no-repeat bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${home})`, objectFit: "cover" }}
    >
      <div className="bg-[#000000b2] w-full h-full inset-0 absolute">
        <div className="mt-16">
          <Logo logo={`https://backend.skilltax.sa/public/${data?.logo}`} />
        </div>

        <div className="w-full gap-[5px] my-[73px] h-[38px] bg-secondary font-medium text-[22px] text-primary text-center flex items-center justify-center">
          <span>
            {language == "ar" ? data?.ar_business_name : data?.en_business_name}
          </span>
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
