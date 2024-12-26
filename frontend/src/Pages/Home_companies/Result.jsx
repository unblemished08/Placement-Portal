import React from "react";

const Result = ({
  companyImage,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform">
      {/* Logo Section */}
      <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={companyImage}
          alt={`${name} Logo`}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Declared:</span>
            <span className="ml-2 text-gray-800">{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;