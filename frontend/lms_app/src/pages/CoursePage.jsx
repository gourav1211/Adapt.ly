import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CoursePage({ match }) {
  // TODO: fetch data from the server for displaying the content
  const [toggled1, setToggled] = useState(-1);
  const [toggled2, setToggled1] = useState(-1);
  const [toggled3, setToggled2] = useState(-1);
  const [toggled4, setToggled4] = useState(-1);

  function handleChange1() {
    console.log("Triggered");
    setToggled(toggled1 * -1);
  }

  const { course_code } = useParams();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-start h-auto w-[85%]">
        <div className="w-full h-[200px]">
          <img
            src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4="
            alt="ai_image"
          />
        </div>

        <p className="mt-0 text-[48px] text-[white]">Artificial Intelligence</p>

        <div className="mt-[100px] ml-10 flex flex-col justify-normal bg-yellow-300 w-[70%] rounded-md">
          <div className="flex flex-row justify-between pr-10">
            <p className="pl-2.5 pt-2.5">Week 1 </p>
            <button onClick={() => handleChange1()}>
              {" "}
              <img src="/chevrons-bottom.png" alt="Toggle" />
            </button>
          </div>
          {toggled1 == 1 ? (
            <div className="bg-white flex flex-row justify-space w-60% border border-solid border-[gray]">
              <div className="flex flex-col h-[15%]">
                <Link to={"/course_material/" + course_code + "/" + 1}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/32/32329.png"
                    alt="Course Material"
                  />

                  <h1>Course Material</h1>
                </Link>
              </div>
              <div className="flex flex-col h-[15%]">
                <Link to={"/short_notes/" + course_code + "/" + 1}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/32/32329.png"
                    alt="Course Material"
                  />
                </Link>
                <h1>Short Notes</h1>
              </div>
              <div className="flex flex-col h-[15%]">
                <Link to={"/flashcards/" + course_code + "/" + 1}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/32/32329.png"
                    alt="Course Material"
                  />
                </Link>
                <h1>Flash Cards</h1>
              </div>
              <div className="flex flex-col h-[15%]">
                <Link to={"/knowledge_graph/" + course_code + "/" + 1}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/32/32329.png"
                    alt="Course Material"
                  />
                  <h1>Knowledge Graphs</h1>
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
