import * as React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-[100%] flex-1 min-h-[100vh] border-solid border-gray-300  border-r-2 bg-black relative">
      <div className="h-[70px] flex flex-col items-center justify-center mt-10">
        <img className = "rounded-[50%]" src="https://img.lovepik.com/element/45001/3052.png_860.png" alt="profile_picture" height={100} width={100} />
        <span className="text-3xl font-bold text-[yellow]">Jane Doe</span>
      </div>
      {/* <hr className=" h-0 border-solid border-gray-300 border-t-2 " /> */}
      <div className="center mt-40 flex items-center justify-around">
        <ul className="cursor-pointer ">
          <li className="hover:bg-blue-500 text-white text-xl w-[250px] bg-yellow-300 rounded-left-[15%]">
            <Link to="/">
              <span className="pl-[100px] text-xl text-violet-950 font-semibold ">
                Home
              </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl w-[250px] bg-yellow-300 rounded-left-[15%]">
            <Link to='/quiz'>
            <span className="pl-[100px] text-xl text-violet-950 font-semibold">
              Quiz
            </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl w-[250px] bg-yellow-300 rounded-left-[15%]">
            <Link to="/ai_tutor">
            <span className="pl-[100px] text-xl text-violet-950 font-semibold">
              AI Tutor
            </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl w-[250px] bg-yellow-300 border-r-[10]rounded-left-[15%] ">
            <Link to="/profile">
              <span className="pl-[100px] text-xl text-violet-950 font-semibold hover:active:bg-blue-500 rounded-left-[15%]">
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
