import React from "react";

const Result= ({
    companyImage,name,value
}) => {
  return (
    
      <div className="flex bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform">
        {/* Logo Section */}
        <div className="w-1/3">
            <div className=" items-center mb-6">
            <div>
                <img
                src={companyImage}
                alt="Google Logo"
                className="w-32"
                />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 my-8 mx-5">{name}</h2>
        </div>
        </div>
        {/* Details Section */}
        <div>

            <div className="space-y-4">
            <div className="flex items-start">
                <span className="font-semibold text-gray-600">Declared</span>
                <span className="ml-2 text-gray-800">{value}</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Result;
