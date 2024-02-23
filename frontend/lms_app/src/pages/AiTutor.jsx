import Sidebar from "../components/Sidebar";
import Tutor from '../components/Tutor';


export default function AiTutor(props){

    return (
        <div className = "flex " >
            <Sidebar />

            <div className="flex flex-col justify-start h-auto w-[85%]">
                <Tutor />

            </div>
        </div>
    );
}
