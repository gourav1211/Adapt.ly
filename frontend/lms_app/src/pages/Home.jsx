import Sidebar from "../components/Sidebar";
import * as React from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-start h-auto w-[85%]">
        <p className="text-lg font-bold m-10">Welcome Jane</p>
        <div className="flex flex-wrap h-[400px] content-between ml-2 pb-10 ">
          <div className="ml-8 mr-8 mt-8">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>

          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>

          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>
          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>
          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>
          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>
          <div className="ml-8 mr-8 mt-8 ">
            <Link to="/course_page/ai">
              <CourseCard />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
