import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Path() {
    <div className="flex">
        
        <Sidebar />
        <div className="flex-[1111px]">
            <Header />
            <div className="flex p-5 gap-5 ">
                <Cards />
            </div>
        </div>
        
    </div>


}
export default Path;