import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState([]);
  const [buttons, setButtons] = useState(["companies", "students", "results"]);

  const handleClick = (item) => {
    setButtons((prev) => prev.filter((btn) => btn !== item));
    setNavItems((prev) => [...prev, item]);
    navigate(`/${item}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex space-x-4 justify-center shadow-md">
        {navItems.map((item) => (
          <motion.div
            key={item}
            className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg text-sm capitalize"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      
      {/* Circular Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {buttons.map((item) => (
          <motion.button
            key={item}
            className="w-52 h-52 flex items-center justify-center bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 hover:shadow-blue-400 hover:shadow-md capitalize"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(item)}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Home;
