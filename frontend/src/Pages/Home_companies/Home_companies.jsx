import React from "react";

const Home_Companies= ({
    last_date,cgpa,src,company_name,eligible_branches,location,ctc,job_role
}) => {
  return (
    
      <div className="flex bg-white p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform">
        {/* Logo Section */}
        <div className="w-1/3">
            <div className=" items-center mb-6">
            <div>
                <img
                src={src}
                alt="Google Logo"
                className="w-32"
                />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 my-8 mx-5">{company_name}</h2>
        </div>
        </div>
        {/* Details Section */}
        <div>

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
                Apply until
                </span>
                <span className="ml-2 text-gray-800">{last_date}</span>
            </div>
            <div className="flex items-start">
                <span className="font-semibold text-gray-600">CGPA Required:</span>
                <span className="ml-2 text-gray-800">{cgpa}</span>
            </div>
            
            <div className="flex items-start">
                <span className="font-semibold text-gray-600">Eligible Branches:</span>
                <span className="ml-2 text-gray-800">{eligible_branches}</span>
            </div>
            <div className="flex items-start">
                <span className="font-semibold text-gray-600">Job Role:</span>
                <span className="ml-2 text-gray-800">{job_role}</span>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Home_Companies;
