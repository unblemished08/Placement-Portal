import React from "react";

const Current_Companies= ({
  companyImage,
  name,
  gd, // "yes" or "no"
  tech_rounds, // Number of technical interview rounds
  hr_rounds, // Number of HR interview rounds
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform">
      {/* Logo Section */}
      <div className="w-1/3">
        <div className="items-center mb-6">
          <div>
            <img
              src={companyImage}
              alt={`${name} Logo`}
              className="w-32"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 my-8 mx-5">
            {name}
          </h2>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Group Discussion:</span>
            <span className="ml-2 text-gray-800">{gd === "yes" ? "Yes" : "No"}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Technical Rounds:</span>
            <span className="ml-2 text-gray-800">{tech_rounds}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">HR Rounds:</span>
            <span className="ml-2 text-gray-800">{hr_rounds}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current_Companies;
