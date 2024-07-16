import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdStars } from "react-icons/md";

export let Restaurantscards = ({
  cloudinaryImageId,
  name,
  sla,
  cuisines,
  areaName,
  id,
  avgRating,
  costForTwoMessage,
}) => {
  const disimg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  return (
    <div className=" transition ease-in-out delay-150 w-[230px] h-auto shrink-0 [background:#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] m-5 p-3 items-center hover:-translate-y-1 hover:scale-110 duration-200 ">
      <img
        src={disimg}
        alt="Image"
        className="w-screen h-[160px] rounded-[28px] "
      />
      <div className="m-2">
        <h2 className=" font-bold text-[17px] truncate">{name}</h2>
        <div className=" flex font-medium  items-center text-[14px]">
          <MdStars className="text-green-700 text-[18px] mr-1 mt-[0.5px]" />
          <span className="font-normal">{avgRating}</span>
          <GoDotFill className="text-[6px] mt-1 mx-1" />
          {sla.slaString}
        </div>
        <h4 className="truncate text-[#545454] font-normal text-sm">
          {cuisines.join(", ")}
        </h4>
        <h5 className="text-[#545454] font-normal text-sm">{areaName}</h5>
      </div>
    </div>
  );
  node - v;
};
