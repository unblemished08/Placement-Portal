import React from "react";

const Google = () => {
  return (
    
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google Logo"
              className="w-32"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Google</h2>
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

export default Google;