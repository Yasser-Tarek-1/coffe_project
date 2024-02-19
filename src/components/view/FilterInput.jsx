import { useEffect, useState } from "react";
import { search, filter } from "../../assets";
import { useTranslation } from "react-i18next";
import { filterByName } from "../../store/slices/filterDataSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterInput = ({ toggleShow }) => {
  const { t } = useTranslation();
  const [searchIn, setSearchIn] = useState("");
  const { category } = useSelector((state) => state.filterDataSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchIn == "") {
      dispatch(filterByName(null));
    } else {
      dispatch(filterByName(searchIn));
    }
  }, [dispatch, searchIn]);

  useEffect(() => {
    setSearchIn("");
  }, [category]);

  return (
    <div className="flex items-center gap-4 mt-10">
      <div className="w-full h-11 border-2 border-primary rounded-lg cursor-pointer flex items-cente justify-between px-3">
        <input
          onChange={(e) => setSearchIn(e.target.value)}
          value={searchIn}
          placeholder={t("view.inputPlacholder")}
          className=" w-full h-full text-start mt-[2px] flex items-center justify-center bg-transparent outline-none border-none text-primary "
        />
        <img src={search} alt="filter" className="w-5 block ms-3" />
      </div>
      <button className="w-8 block" onClick={toggleShow}>
        <img src={filter} alt="filter" className="w-8" />
      </button>
    </div>
  );
};

export default FilterInput;
