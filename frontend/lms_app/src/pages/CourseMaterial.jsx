import Sidebar from "../components/Sidebar";
import { useParams } from "react-router";

export default function CourseMaterial() {
  let { course_code, week_number } = useParams();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-start h-auto w-[85%] m-10">
        <h1>This is the course material page</h1>
        <h2>with course_code: {course_code}</h2>
        <h2>with week_number: {week_number}</h2>
      </div>
    </div>
  );
}
