import { json, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "./loader";
import ErrorMessage from "./ErrorMessage";
import useRestItems from "../utils/useExtractitems";
import { FaStar } from "react-icons/fa";
import ManuCard from "./ManuCard";

const Menuitems = () => {
  const { id } = useParams();
  const { itemsname, error } = useRestItems(id);

  const imgsrc = itemsname?.cards[2]?.card?.card?.info?.cloudinaryImageId;
  const itemrest =
    itemsname?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  const RestName = itemsname?.cards[2]?.card?.card?.info?.name;
  const avgRating = itemsname?.cards[2]?.card?.card?.info?.avgRating;
  const costForTwoMessage =
    itemsname?.cards[2]?.card?.card?.info?.costForTwoMessage;
  const cuisines = ` ${itemsname?.cards[2]?.card?.card?.info?.cuisines[0]}, ${itemsname?.cards[2]?.card?.card?.info?.cuisines[1]}`;
  const slaString = itemsname?.cards[2]?.card?.card?.info?.sla?.slaString;
  var Itemslist;
  if (itemrest) {
    Itemslist = itemrest.length;
  }

  if (itemsname == null) {
    return (
      <div className="w-screen h-fit flex justify-center  flex-wrap flex-grow">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      {imgsrc && (
        <>
          <div className="w-screen h-[80px]"></div>
          <div className="flex justify-center box-border m-0 p-0 w-screen h-fit border-2 flex-grow ">
            <div className="flex flex-col  w-3/5 h-auto p-0 ">
              <div className=" flex bg-[#E9FAFF] w-full h-[200px] justify-start items-center rounded-md">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgsrc}`}
                  className="w-[230px] h-[160px] m-[30px] rounded-lg"
                />
                <div className="flex flex-col box-border ">
                  <h1 className="font-sans   text-4xl text-ellipsis font-normal h-[33%] ">
                    {RestName}
                  </h1>
                  <p className="mt-1 mb-3 text-[#545454]">{cuisines}</p>
                  <div className="flex flex-row">
                    <h1 className=" bg-green-500  text-white flex rounded-[5px]  items-center">
                      <FaStar className="m-2" />
                      <span className="mr-2">{avgRating}</span>
                    </h1>
                    <h1 className="border-l-4 border-white mx-[20px] h-8 "></h1>
                    <time className="text-[#545454] font-medium">
                      {slaString}
                    </time>
                    <h1 className="border-l-4 border-white mx-[20px] h-8"></h1>
                    <p className="text-[#545454] font-medium">
                      {costForTwoMessage}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[20px]"></div>
              <div className="mb-[10px] ml-[25px]">
                <h2 className="font-mono font-bold text-2xl">Reccomende</h2>
                <p className="font-mono text-[16px] font-medium text-[#545454]">
                  ({Itemslist})
                </p>
              </div>
              <div>
                {itemrest ? (
                  itemrest.map((item, index) => (
                    // <li key={index}>{...item?.card?.info?.name}</li>
                    <ManuCard
                      {...item?.card?.info}
                      key={item?.card?.info?.id}
                    />
                  ))
                ) : (
                  <h1>No items available</h1>
                )}
              </div>
              <div className="h-3"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menuitems;
