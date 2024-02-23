import Sidebar from "../components/Sidebar";
import { useParams } from "react-router";

export default function QuizPage(props){

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col justify-normal h-auto w-[85%] m-10">
                <h1>This is the quiz page </h1>
            </div>
        </div>
    );
}