import { imglink } from "./config-file";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { isAuthenticated, username, logout } = useContext(AuthContext);

  return (
    <div className="h-[80px] [background:#FFF] flex justify-between shadow-lg w-screen inset-x-0 top-0 fixed z-50">
      <a href="/">
        <img src={imglink} className="w-20" />
      </a>

      {isAuthenticated && (
        <div className="flex text-green-600 font-semibold items-center justify-center">
          <h1>Hi {username}!</h1>
        </div>
      )}

      <div className="flex mr-8">
        <ul className="flex items-center">
          <Link to="/">
            <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-2">
              Home
            </li>
          </Link>
          <Link to="/AboutUs">
            <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-2">
              About
            </li>
          </Link>
          <Link to="/Contacts">
            <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-2">
              Contacts
            </li>
          </Link>
          <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-3 py-2">
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
          {isAuthenticated ? (
            <button onClick={logout}>
              {" "}
              <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-2">
                Logout
              </li>
            </button>
          ) : (
            <Link to="/login">
              <li className="m-1 text-base text-[#545454] font-semibold border-2 border-none hover:border-green-500 hover:text-white hover:bg-green-500 rounded-md p-2">
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
