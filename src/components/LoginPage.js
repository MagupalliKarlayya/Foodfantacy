import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import myimg from "../../img/loginimg.png";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(userName);
    navigate("/");
  };

  return (
    <div className="w-screen">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-[#E9FAFF] flex justify-between items-center p-3 rounded-md w-[80%] h-[60%]">
          <div className="hidden sm:block w-1/2 h-full bg-custom-gradient rounded-xl">
            <img src={myimg} alt="LoginImg" className="w-fit h-full" />
          </div>
          <div className="md:p-16 min-[642px]:p-16 flex items-center justify-center h-full sm:w-1/2 w-full  ">
            <div className="max-[642px]:p-5 flex flex-col justify-center   p-[15px]">
              <h1 className="font-bold text-3xl mb-3 flex justify-center items-center sm:justify-start">
                Login
              </h1>
              <p className="font-medium text-lg mb-2">
                Don't have an account yet?
                <span className="text-red-600 cursor-pointer hover:border-red-500 hover:border-b-2">
                  Sign Up
                </span>
              </p>
              <form onSubmit={handleLogin}>
                <div>
                  <h2 className="font-bold text-[18px] mb-1">User Name</h2>
                  <input
                    type="text"
                    className="w-[90%] mb-2 rounded-md p-[10px] shadow-md focus:border-green-500 focus:outline-none hover:border-green-500 hover:shadow-custom"
                    placeholder="Enter User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <h2 className="font-bold text-[18px] mb-1">Password</h2>
                  <input
                    type="password"
                    className="w-[90%] rounded-md p-[10px] focus:border-green-500 shadow-md focus:outline-none hover:border-green-500 hover:shadow-custom"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="font-normal text-lg text-white bg-green-500 rounded-md py-[6px] w-[90%] mb-3 hover:bg-green-600"
                >
                  LOGIN
                </button>
              </form>
              <div>
                <button className="font-semibold text-lg text-red-500 rounded-md p-1.5 w-1/2 hover:text-white hover:bg-red-600">
                  Google
                </button>
                <button className="font-semibold text-lg text-blue-500 rounded-md p-1.5 w-1/2 hover:text-white hover:bg-blue-600">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
