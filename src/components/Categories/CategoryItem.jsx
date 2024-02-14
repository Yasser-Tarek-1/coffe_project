import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../store/slices/filterDataSlice";

const CategoryItem = ({
  id,
  image,
  icon,
  ar_name = "الجميع",
  en_name = "All",
  ...prop
}) => {
  const {
    i18n: { language },
  } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(filterByCategory(en_name))}
      className={`relative cursor-pointer w-20 h-20 bg-primary rounded-full flex justify-center bg-cover bg-center object-cover shadow_custom`}
      style={{
        backgroundImage: `url(https://backend.skilltax.sa/public/${image})`,
      }}
    >
      {en_name != "All" && (
        <div className="inset-0 absolute h-20 w-20 bg-[#000000B2] rounded-full z-10"></div>
      )}
      <div
        className={`${
          icon ? "mt-3" : "justify-center"
        } flex flex-col relative z-20 gap-4`}
      >
        {icon && <img src={icon} alt="icon" className="h-[20px]" />}
        <h4 className="font-bold leading-[9.6px] text-[8px] w-[35px] h-[15px] text-center text-white capitalize">
          {language == "ar" ? ar_name : en_name}
        </h4>
      </div>
      {false && (
        <p className="bg-secondary flex items-center justify-center w-[35px] h-[17px] z-30 text-[8px] font-normal text-center rounded-lg absolute left-[50%] bottom-[-10px] translate-x-[-50%] ">
          جديد
        </p>
      )}
    </div>
  );
};

export default CategoryItem;
