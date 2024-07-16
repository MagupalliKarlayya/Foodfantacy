import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaKorvue } from "react-icons/fa";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full h-12 bg-white shadow-md mt-auto bottom-0 flex justify-center items-center z-50">
      <div className=" text-black flex">
        Created By
        <div className="ml-2 mx-1 text-red-600">
          {<FontAwesomeIcon icon={faHeart} />}
        </div>
        <div className="font-bold mx-1">Karlayya</div>
        <FaKorvue className=" mt-[4px] mr-1 text-xl" />
        2024
        <div className="font-serif mx-1 text-red-300">
          <span className="font-bold text-black"> Food</span> fantacy
        </div>
      </div>
    </footer>
  );
};
export default Footer;
