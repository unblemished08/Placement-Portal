import React from "react";
import Google from "./Search-Companies/Google";
import Microsoft from "./Search-Companies/Microsoft";
import Accenture from "./Search-Companies/Accenture";
import Adobe from "./Search-Companies/Adobe";
import JPmorgan from "./Search-Companies/JPmorgan";
import TCS from "./Search-Companies/TCS";
import BNY from "./Search-Companies/BNYmellon";
import Goldman from "./Search-Companies/Goldman";
import ICICI from "./Search-Companies/ICICI";
import Visa from "./Search-Companies/VISA";

const Search = () => {
  return (
    <>
      <div className="p-4 bg-gray-100">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg"
            placeholder="Search Companies, Projects, or Internships"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option value="">Select Type</option>
            <option value="placement">Placement</option>
            <option value="project">Project</option>
            <option value="intern">Intern</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-lg">
            <option value="">Select Branch</option>
            <option value="cs">CS</option>
            <option value="it">IT</option>
            <option value="ece">ECE</option>
            <option value="ee">EE</option>
            <option value="ce">CE</option>
            <option value="me">ME</option>
            <option value="pie">PIE</option>
          </select>
          <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Company List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Google />
          <Microsoft />
          <Accenture/>
          <Adobe/>
          <JPmorgan/>
          <TCS/>
          <BNY/>
          <Goldman/>
          <ICICI/>
          <Visa/>
        </div>
      </div>
    </>
  );
};

export default Search;
