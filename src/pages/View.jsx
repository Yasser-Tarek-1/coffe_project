import Header from "../components/Header";
import { ad, search, filter } from "../assets";
// import CategorySwip from "../components/CategorySwip";

const View = () => {
  return (
    <div className="w-full h-screen relative bg-white">
      <Header className={"logo_color"} />
      <div className="px-4">
        {/* ads */}
        <div className="h-[200px] mt-8">
          <img src={ad} alt="ad" className="w-full h-full" />
        </div>
        {/* filter */}
        <div className="flex items-center gap-4 mt-10">
          <button className="w-7">
            <img src={filter} alt="filter" className="w-7" />
          </button>
          <div className="w-full h-7 border-2 border-[#373873] rounded-lg cursor-pointer flex items-cente justify-between px-3">
            <img src={search} alt="filter" className="w-3" />
            <input
              dir="rtl"
              placeholder="بحث"
              className="block w-full bg-transparent outline-none border-none  text-[#373873] "
            />
          </div>
        </div>
        {/* CategorySwip */}
        {/* <CategorySwip /> */}
      </div>
    </div>
  );
};

export default View;
