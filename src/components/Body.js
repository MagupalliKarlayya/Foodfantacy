import { restaurants } from "./config-file.js";
import { Restaurantscards } from "./RestuarentCard.js";
import { useState, useEffect } from "react";
import { Loader } from "./loader.js";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage.js";
import { Fitlertheitems } from "../utils/filterdata.js";
import GetResturants from "../utils/GetRestaurents.js";
import Isonline from "./useIsoffline.js";
import "../../index.css";
const Body = () => {
  const [Searchitem, setSearchitem] = useState("");
  const [restSearch, setrestSearch] = useState("");
  const { restuerentlist, filterrestaurant, error } = GetResturants();

  if (error) {
    return <ErrorMessage message={error} />;
  }
  const offline = Isonline();

  if (!offline) {
    return <h2>Please check Your Internet</h2>;
  }

  return (
    <>
      <div className=" flex flex-col sm:flex-row justify-center bg-[#E9FAFF] mt-[81px]  w-screen h-[90%] rounded-[0px_12px_0px_12px] shadow-xl">
        <div className=" flex flex-col justify-center  pl-[100px] ">
          <div className="  w-fit">
            <h1 className="font-[800] text-black text-[30px]  font-curlz  w-fit ">
              Order <span className="text-red-500">Your Best</span>
            </h1>
            <h1 className="font-[800]  text-black text-[30px]  font-curlz  w-fit">
              <span className="text-green-500">Food</span> anytime
            </h1>
            <p className="text-wrap text-xl  mt-[15px]  font-blackadder text-[#00c9b8] ">
              " Hey Our delicious food is warning for you,we are
            </p>
            <p className="  text-xl mb-5 font-blackadder text-[#00c9b8]  ">
              always never to you with fresh items of food "
            </p>
          </div>
          <div className=" mr-[20px]">
            <input
              type="text"
              placeholder="Search a restaurants you want..."
              value={Searchitem}
              onChange={(e) => {
                setSearchitem(e.target.value);
              }}
              className="w-[320px] h-[45px] [background:#FFF] border-none outline-none rounded-[100px] pl-4 mr-[-50px]"
            />
            <button
              className=" bg-green-500 hover:bg-green-600  text-white w-[75px] h-[45px] rounded-[80px] "
              onClick={() => {
                const data = Fitlertheitems(
                  Searchitem,
                  restuerentlist,
                  filterrestaurant
                );
                setrestSearch(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-[150px]  "></div>
        <div className="flex items-center justify-center sm:block">
          <img
            src="https://freepngimg.com/thumb/food/139206-food-plate-top-snack-view.png"
            alt="disimage"
            className="sm:w-[60%] w-[250px]"
          />
        </div>
      </div>
      <div className="h-[30px]"></div>
      {filterrestaurant == 0 ? (
        <div className="flex flex-wrap justify-around items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center ">
            {(restSearch ? restSearch : restuerentlist).length == 0 ? (
              <h2 className=" text-xl font-bold mt-[50px] ">
                Restaurant not present....{" "}
              </h2>
            ) : (
              (restSearch ? restSearch : restuerentlist).map((num) => {
                return (
                  <Link to={"/menus/" + num?.info?.id} key={num?.info?.id}>
                    <Restaurantscards {...num?.info} />
                  </Link>
                );
              })
            )}
          </div>
          <div className="h-[30px]"></div>
        </>
      )}
    </>
  );
};
export default Body;
