import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="bg-purple-500 text-white p-6 top-0 shadow-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Vibe Nearby</h1>

          <div className="flex gap-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-3 text-2xl duration-200 ${isActive ? "text-purple-950" : "text-white"} hover:text-orange-400`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `p-3 text-2xl duration-200 ${isActive ? "text-purple-950" : "text-white"} hover:text-orange-400`
              }
            >
              Explore
            </NavLink>
          </div>

          {/* Empty spacer, same width as the logo, so the nav links
              land at the true center of the bar instead of being
              pushed right by justify-between with only 2 items. */}
          <div className="w-[150px]" />
        </div>
      </nav>
    </header>
  );
}

export default Header;