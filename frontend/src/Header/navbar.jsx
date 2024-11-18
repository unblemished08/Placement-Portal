import React, { useState } from "react";

export const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // Reset after animation
  };

  return (
    <nav className="bg-purple-700 text-white">
      <ul className="flex items-center justify-between mx-auto px-4 py-4 container">
        {[
          { name: "Home", href: "#home" },
          { name: "Search", href: "#search" },
          { name: "Statistics", href: "#statistics" },
          { name: "Past Record", href: "#past-record" },
          { name: "About", href: "#about" },
        ].map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              clickedIndex === index ? "scale-110" : "scale-100"
            } transition-transform duration-300 ease-in-out`}
          >
            <a href={item.href} className="hover:text-orange-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
