import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { logo_white } from "../assets";

const Home = () => {
  return (
    <div className="bg-home min-h-screen h-full relative">
      <div className="overlay">
        <div className="mt-16">
          <Logo logo={logo_white} />
        </div>

        <div className="w-full my-[73px] h-[38px] bg-[#FCBD1F] font-medium text-[24px] text-[#373873] text-center">
          متجر ( عين سكر) يرحب بكم من جديد
        </div>
        <div className="flex flex-col items-center gap-[48px]">
          <Link to={"/view"}>
            <Button style="bg-[#373873] text-[#fff] hover:bg-[#404183]">
              اطلب الآن
            </Button>
          </Link>
          <Button style="bg-[#F2F2F2] text-[#373873] ">
            رفع اقتراح أو شكوى
          </Button>
          <Button style="bg-[#F2F2F2] text-[#373873] ">من نحن</Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
