import React from "react";
import { NavLink,Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="bg-purple-500 text-white p-6 top-0 shadow-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl">Vibe Nearby</h1>
                    <div className="flex gap-x-10">
                        <NavLink to="/" className={({isActive})=>
                            `p-3 text-2xl duration-200 ${isActive?"text-purple-950":"text-white"}
                            hover:text-orange-400`
                        }>Home</NavLink>
                        <NavLink to="/explore" className={({isActive})=>
                            `p-3 text-2xl duration-200 ${isActive? "text-purple-950":"text-white"} hover:text-orange-400`
                        }>Explore</NavLink>
                    </div>
                    <Link to="#" className="bg-orange-400 p-4 mr-5 rounded-lg pr-7 pl-7">Login</Link>
                </div>
            </nav>
            
        </header>
    );
}
export default Header;