import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import FlashCard from "../components/Flashcard";

export default function FlashCards() {
  const { course_code, week_number } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      //TODO: fetch flash cards for the week from the server
    } catch (err) {
      console.log("Error occurred");
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col justify-start h-auto w-[85%] m-10">
        <h1>This is the flashcard page</h1>
        <h2>with course_code: {course_code}</h2>
        <h2>with week_number: {week_number}</h2>
        <div className="flex flex-wrap h-[400px] content-between ml-2 pb-10 ">
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
        <FlashCard question = "Color of the sun" answer= "Yellow" />
</div>
      </div>
    </div>
  );
}
