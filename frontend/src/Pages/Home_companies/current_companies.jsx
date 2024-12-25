import React from "react";

const Current_Companies = ({
  src,
  company_name,
  gd, // "yes" or "no"
  tech_rounds, // Number of technical interview rounds
  hr_rounds, // Number of HR interview rounds
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform">
      {/* Logo Section */}
      <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={src}
          alt={`${company_name} Logo`}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{company_name}</h2>
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
