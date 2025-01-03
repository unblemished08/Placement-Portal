import React from "react";

const UpComing_Companies = ({
  last_date, cgpa, companyImage, name, branch, location, ctc, job_role
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
            <span className="font-semibold text-gray-600">CTC:</span>
            <span className="ml-2 text-gray-800">{ctc}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Locations:</span>
            <span className="ml-2 text-gray-800">{location}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Apply until:</span>
            <span className="ml-2 text-gray-800">{last_date}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">CGPA Required:</span>
            <span className="ml-2 text-gray-800">{cgpa}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold text-gray-600">Eligible Branches:</span>
            <span className="ml-2 text-gray-800">{branch}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600">Job Role:</span>
            <span className="ml-2 text-gray-800">{job_role}</span>
          </div>
        </div>
      </div >
    </div >
  );
};

export default UpComing_Companies;
