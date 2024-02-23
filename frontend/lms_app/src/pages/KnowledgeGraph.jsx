import Sidebar from "../components/Sidebar";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function KnowledgeGraph() {
  const course_code = useParams()["course_code"];
  const week_number = useParams()["week_number"];
  useEffect(() => {
    async function initiate() {
      const response = await fetch("http://127.0.0.1:5000/knowledge_graph", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_code: "ai", week_num: 1 }),
      });
      console.log(response.json());
    }
    initiate();
  }, []);
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col justify-normal h-auto w-[85%] m-10">
        <h1>This is the knowledge graph page</h1>

        <h2>with course_code: {course_code}</h2>
        <h2>with week_number: {week_number}</h2>
        <h3>Starting knowledge graph in new tab</h3>
      </div>
    </div>
  );
}
