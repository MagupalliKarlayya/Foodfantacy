import { Outlet, Link } from "react-router-dom";
import myimg from "../../img/burgerimg.png";
import { useState } from "react";

const Aboutus = () => {
  const [profile, setprofile] = useState(true);
  const handleclick = () => {
    setprofile(true);
  };
  const handleclickbutton = () => {
    setprofile(false);
  };
  return (
    <div className="w-screen h-full flex  flex-col items-center justify-center">
      <div className="w-screen h-[120px]"></div>

      {profile ? (
        <>
          <Link to="profile" onClick={handleclickbutton}>
            <button className="transition ease-in-out p-3 rounded-2xl text-white text-xl font-semibold delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ">
              Show My Profile
            </button>
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={handleclick}
            className="transition ease-in-out p-3 rounded-2xl text-white text-xl font-semibold delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-200"
          >
            Hide My Profile
          </button>
          <Outlet />
        </>
      )}

      <div className="flex flex-col sm:flex-row  items-center justify-center sm:pl-[80px] p-5 w-full  m-[20px] ">
        <div>
          <h1 className="text-6xl font-medium font-chiller ml-[-30px] m-2">
            The Real Taste of
          </h1>
          <h1 className="text-6xl bg-red-700 w-fit p-2 text-white">Indian</h1>
          <h2 className="  text-6xl pl-4 bg-green-700 text-white w-fit p-2 m-1">
            Food
          </h2>
          <p className="text-wrap text-3xl font-medium font-blackadder ml-[-40px] mt-3 text-red-800 ">
            "Food is not just eating energy.
          </p>
          <p className="text-wrap text-3xl font-medium font-blackadder m-0 text-red-800 ">
            It's an experience."
          </p>
        </div>
        <div className=" mt-[40px] sm:m-5 ">
          <img
            src={myimg}
            className="shadow-2xl rounded-3xl hover:shadow-none"
          />
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
