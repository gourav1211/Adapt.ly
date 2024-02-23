const Header = () => {

    return (
        <div className="navbar h-12 border-b-2 border-gray-300 flex items-center text-sm text-black">
            <div className=" w-full p-5 flex items-center justify-between">
                <div className="flex items-center border-2 border-black rounded-xl p-1">
                    <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent placeholder-text-sm placeholder-black text-black" />
                    
                </div>
                <div className=" flex items-center">
                    <div className="flex items-center mr-5 relative">
                        
                       <span className="text-black font-serif">English</span> 
                    </div>
                    <div className="flex items-center mr-5 relative">
                        
                    </div>
                    <div className="flex items-center mr-5 relative bg-blue-500">
                        <div className="rounded-lg ">
                        <button className="hover:bg-blue-400 text-lg font-bold rounded-xl">
                               <span font-bold text-xl>Login</span> 
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
