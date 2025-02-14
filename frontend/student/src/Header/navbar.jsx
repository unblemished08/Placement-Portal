import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // Reset after animation
  };

  return (
    <nav className="bg-gray-900 bg-gradient-to-r from-gray-800 to-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300">
          <NavLink to="/">Placement Portal</NavLink>
        </div>

        {/* Menu Toggle (Mobile) */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none transition-transform transform hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 lg:opacity-100 lg:translate-y-0"
          }`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Companies", href: "/companies" },
            { name: "Result", href: "/result" },
            { name: "Our Recruiters", href: "/recruiters" },
            { name: "Stats", href: "/stats" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`relative py-2 px-4 transition-all duration-300 ease-in-out ${
                clickedIndex === index ? "scale-110" : "scale-100"
              }`}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `relative text-lg font-medium tracking-wide transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "text-cyan-400 border-b-2 border-cyan-500"
                      : "hover:text-cyan-300 hover:border-b-2 hover:border-cyan-500"
                  }`
                }
              >
                {item.name}
                {/* Glowing effect on hover */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
