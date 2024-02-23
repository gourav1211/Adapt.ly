import Sidebar from "../components/Sidebar";
import { useParams } from "react-router";

export default function ShortNotes() {

    // const [course_code, week_number] = useParams();
    const course_code = useParams()['course_code'];
    const week_number= useParams()['week_number'];
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col justify-start h-auto w-[85%] m-10 rounded-md">
        <h1>This is the short notes page</h1>
        <h2>with course_code: {course_code}</h2>
        <h2>with week_number: {week_number}</h2>
      </div>
    </div>
  );
}
