import { FaStar } from "react-icons/fa";

export default MenuCard = ({ name, imageId, description }) => {
  const imgsrc =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    imageId;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" transition ease-in-out delay-150 w-[95%] h-[166px] shrink-0 [background:#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px] flex flex-row justify-between mb-4 hover:-translate-y-1 hover:scale-30 duration-200  cursor-pointer">
        <div className="flex flex-col p-5 mt-2 w-[80%]">
          <h1 className="font-semibold text-left text-[16px] text-ellipsis">
            {name}
          </h1>

          <p className="text-wrap  text-ellipsis text-sm text-[#545454] mt-2">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={imgsrc}
            className="w-[151px] h-[116px] shrink-0 [background:rgba(230,250,255,0.76)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[25px] mx-2 mb-2"
          />
          <button className="bg-[rgba(255,110,5,0.95)] text-sm font-semibold rounded-lg p-1 px-2">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};
