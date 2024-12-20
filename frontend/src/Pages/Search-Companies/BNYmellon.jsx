import React from "react";

const BNY= () => {
  return (
    
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full hover:scale-105 transition-transform">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/BNY_logo_2024.svg/330px-BNY_logo_2024.svg.png"
              alt="Google Logo"
              className="w-32"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">BNY Mellon</h2>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">CTC:</span>
            <span className="ml-2 text-gray-800">₹63.5 LPA</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Locations:</span>
            <span className="ml-2 text-gray-800">
              Hyderabad, Bangalore, Delhi, Noida, Gurgaon
            </span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">
              Students Placed Last Year:
            </span>
            <span className="ml-2 text-gray-800">5</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">CGPA Required:</span>
            <span className="ml-2 text-gray-800">8.0</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Backlog Policy:</span>
            <span className="ml-2 text-gray-800">No backlogs allowed</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Eligible Branches:</span>
            <span className="ml-2 text-gray-800">CSE, IT</span>
          </div>
        
      </div>
    </div>
  );
};

export default BNY;
