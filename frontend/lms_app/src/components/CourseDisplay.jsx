import { Link } from "react-router-dom";

export default function CourseDisplay(props) {
    let week_number = props.week_number;
  return (
    <div>
      <h1>This is the course display widget</h1>
      <h2>Week {week_number} </h2>
      <p>It will contain the following: </p>
      <ul>
        <Link to={"/course_material/"  +props.course_code + "/" +week_number }>
          <li>Course Materials</li>
        </Link>
        <Link to={"/course_material/" + props.course_code + "/" +week_number }>
          <li>Short Notes</li>
        </Link>
        <Link to={"/course_material/" + props.course_code + "/" +week_number }>
          <li>Flashcards</li>
        </Link>
        <Link to={"/course_material/" + props.course_code + "/" +week_number }>
          <li>Knowledge Graphs</li>
        </Link>
      </ul>
    </div>
  );
}
