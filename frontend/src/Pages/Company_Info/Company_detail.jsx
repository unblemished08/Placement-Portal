import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyDetails = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const company = location.state?.company; // Get company details from navigation state

  // Handle close button
  const handleClose = () => {
    if (onClose) {
      onClose(); // Call the passed onClose function
    } else {
      navigate(-1); // Go back to the previous page if no onClose function is passed
    }
  };

  // Handle Result Navigation
  const handleResultNavigation = () => {
    navigate(`/companydetails/${company.job_id}/results`);
  };

  // Handle Apply Now Navigation
  const handleApplyNow = () => {
    navigate(`/companydetails/${company.job_id}/apply`);
  };

  if (!company) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="bg-white w-4/5 h-4/5 rounded-lg p-8 shadow-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">No Company Selected</h1>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10">
      <div
        className="bg-white w-4/5 h-4/5 rounded-lg p-8 shadow-xl overflow-y-auto relative border-2 ring-2 ring-purple-400"
        style={{
          boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.5)", // Custom glowing shadow
        }}
      >
        {/* Close Button */}
        
  <button
    className="sticky top-4 float-right ml-auto text-red-500 text-lg font-bold hover:text-red-700 transition-all"
    onClick={handleClose}
  >
    ✕
  </button>

        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center mb-8 my-10 mx-10">
          {/* Company Image */}
          {company.companyImage && (
            <img
              src={company.companyImage}
              alt={`${company.name} Logo`}
              className="w-40 h-40 object-contain rounded-md shadow-md"
            />
          )}
          <h2 className="text-4xl font-extrabold text-gray-800 mt-4 md:mt-0">
            {company.name}
          </h2>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <p>
            <strong className="font-semibold">CTC:</strong> {company.ctc}
          </p>
          <p>
            <strong className="font-semibold">Location:</strong> {company.location}
          </p>
          <p>
            <strong className="font-semibold">Job ID:</strong> {company.job_id}
          </p>
          <p>
            <strong className="font-semibold">CGPA Requirement:</strong> {company.cgpa}
          </p>
          <p>
            <strong className="font-semibold">Backlog Policy:</strong> {company.backlogs}
          </p>
          <p>
            <strong className="font-semibold">Eligible Branches:</strong> {company.branch}
          </p>
          <p>
            <strong className="font-semibold">Job Roles:</strong> {company.job_profile}
          </p>
          <p>
            <strong className="font-semibold">Email:</strong> {company.email}
          </p>
          <p>
            <strong className="font-semibold">Contact:</strong> {company.phoneNumber}
          </p>
          <p>
            <strong className="font-semibold">Eligible Gender:</strong> {company.gender}
          </p>
          <p>
            <strong className="font-semibold">Eligible Batch:</strong> {company.batch}
          </p>
          <p>
            <strong className="font-semibold">Last Date:</strong> {company.last_date}
          </p>
          <p>
            <strong className="font-semibold">Bonus:</strong> {company.isBonus ? "Yes" : "No"}
          </p>
          <p>
            <strong className="font-semibold">Group Discussion:</strong>{" "}
            {company.group_disscussion ? "Yes" : "No"}
          </p>
          <p>
            <strong className="font-semibold">Tech Rounds:</strong> {company.tech_rounds}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-start mt-8 space-x-4">
          {company.result === "Declared" ? (
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
              onClick={handleResultNavigation}
            >
              View Results
            </button>
          ) : company.result === "Pending" ? (
            <span className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md">
              Pending
            </span>
          ) : (
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
              onClick={handleApplyNow}
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
