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
    <nav className="bg-gradient-to-r from-blue-400 to-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/">Placement Portal</NavLink>
        </div>

        {/* Menu Toggle (Mobile) */}
        <button
          className="lg:hidden text-white text-xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full lg:w-auto bg-purple-500 lg:bg-transparent`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Requirements", href: "/companyRequirements" },
            { name: "Students", href: "/StudentDetails" },
            { name: "My Profile", href: "/" },
            { name: "About", href: "/about" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`${
                clickedIndex === index ? "scale-110" : "scale-100"
              } transition-transform duration-300 ease-in-out py-2`}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-300 font-semibold border-b-2 border-green-400"
                    : "hover:textgreen-400 hover:border-b-2 hover:border-green-400 transition-all"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
