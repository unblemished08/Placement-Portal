import React, { useState, useEffect } from "react";

const CompaniesSlider = ({ companies = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!companies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [companies]);

  if (!companies.length) {
    return (
      <div className="text-center text-2xl p-6 text-gray-700">
        No companies available
      </div>
    );
  }

  const currentCompany = companies[currentIndex];

  return (
    
      <div className="relative w-4/5 h-4/5 px-10 py-10 rounded-lg bg-gray-200 flex flex-col md:flex-row items-center  shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
        
      
        
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center mb-6 md:mb-0 relative z-10">
          <img
            src={currentCompany.companyImage}
            alt={`${currentCompany.name} Logo`}
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 text-center md:text-left relative z-10">
          <h2 className="text-4xl font-extrabold mb-4">
            {currentCompany.name}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-semibold text-lg">CTC:</span>
              <span className="ml-2 text-lg">{currentCompany.ctc}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-semibold text-lg">Locations:</span>
              <span className="ml-2 text-lg">{currentCompany.location}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-semibold text-lg">Apply until:</span>
              <span className="ml-2 text-lg">{currentCompany.last_date}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-semibold text-lg">CGPA Required:</span>
              <span className="ml-2 text-lg">{currentCompany.cgpa}</span>
            </div>
            <div className="flex items-start justify-center md:justify-start">
              <span className="font-semibold text-lg">Eligible Branches:</span>
              <span className="ml-2 text-lg">{currentCompany.branch}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-semibold text-lg">Job Role:</span>
              <span className="ml-2 text-lg">{currentCompany.job_role}</span>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default CompaniesSlider;
