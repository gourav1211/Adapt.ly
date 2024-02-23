import * as React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar  flex-1 min-h-[100vh] border-solid border-gray-300  border-r-2">
      <div className="h-[50px] flex items-center justify-center">
        <span className="text-3xl font-bold">Adapt.ly</span>
      </div>
      <hr className=" h-0 border-solid border-gray-300 border-t-2 " />
      <div className="center mt-40 flex items-center justify-center">
        <ul className="cursor-pointer ">
          <li className="hover:bg-blue-500 text-white text-xl ">
            <Link to="/">
              <span className="pl-2 text-xl text-violet-950 font-semibold ">
                Home
              </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl">
            <Link to='/quiz'>
            <span className="pl-2 text-xl text-violet-950 font-semibold">
              Quiz
            </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl ">
            <Link to="/ai_tutor">
            <span className="pl-2 text-xl text-violet-950 font-semibold">
              AI Tutor
            </span>
            </Link>
          </li>
          <li className="mt-40 hover:bg-blue-500 text-white text-xl">
            <Link to="/profile">
              <span className="pl-2 text-xl text-violet-950 font-semibold hover:active:bg-blue-500">
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
