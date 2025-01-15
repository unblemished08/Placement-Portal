import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompanyDetails = ({ company, onClose }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Change the route when the component is opened
  //   navigate("/companydetails");
  // }, [navigate]);

  if (!company) return null; // Do not render if no company is selected

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
          className="absolute top-4 right-4 text-red-500 text-lg font-bold hover:text-red-700 transition-all"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 my-10 mx-10">
          {/* Company Name */}
          

          {/* Company Image */}
          {company.companyImage && (
            <img
              src={company.companyImage}
              alt={`${company.name} Logo`}
              className="w-40 h-40 object-contain rounded-md shadow-md"
            />
          )}
          <h2 className="text-4xl font-extrabold text-gray-800">
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
          <p>
            <strong className="font-semibold">Results:</strong> {company.result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
