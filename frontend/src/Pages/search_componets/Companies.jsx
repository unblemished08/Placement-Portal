import React from "react";

const Companies= ({
  companyImage,
  name,
  ctc,
  location,
  students_placed_yr,
  cgpa,
  backlogs,
  branch,
  job_role
}) => {
  return (
    
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full hover:scale-105 transition-transform">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <img
              src={companyImage}
              alt={name}
              className="w-32"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">CTC:</span>
            <span className="ml-2 text-gray-800">{ctc}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Locations:</span>
            <span className="ml-2 text-gray-800">
              {location}
            </span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">
              Students Placed Last Year:
            </span>
            <span className="ml-2 text-gray-800">{students_placed_yr}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">CGPA Required:</span>
            <span className="ml-2 text-gray-800">{cgpa}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Backlog Policy:</span>
            <span className="ml-2 text-gray-800">{backlogs}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Eligible Branches:</span>
            <span className="ml-2 text-gray-800">{branch}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Job Role:</span>
            <span className="ml-2 text-gray-800">{job_role}</span>
          </div>
          
          
      </div>
    </div>
  );
};

export default Companies;
