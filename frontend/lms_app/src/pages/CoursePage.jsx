import Sidebar from "../components/Sidebar";
import {useParams} from 'react-router-dom';


export default function CoursePage({match}) {
  // TODO: fetch data from the server for displaying the content
    const {course_code} = useParams();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-start h-auto w-[85%]">
        <h1>this is the course page with course code: {course_code}</h1>
      </div>
    </div>
  );
}
