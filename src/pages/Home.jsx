import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { logo_white, home } from "../assets";

const Home = () => {
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
          متجر ( عين سكر) يرحب بكم من جديد
        </div>
        <div className="flex flex-col items-center gap-[48px]">
          <Link to={"/view"}>
            <Button style="bg-primary text-[#fff] hover:bg-[#404183]">
              اطلب الآن
            </Button>
          </Link>
          <Link to={"/contactus"}>
            <Button style="bg-base text-primary ">رفع اقتراح أو شكوى</Button>
          </Link>
          <Link to={"/aboutus"}>
            <Button style="bg-base text-primary ">من نحن</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
