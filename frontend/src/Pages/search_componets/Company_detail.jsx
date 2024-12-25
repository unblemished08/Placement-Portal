// CompanyDetails.js
import React from "react";

const CompanyDetails = ({ company, onClose }) => {
  if (!company) return null; // Do not render if no company is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-4/5 h-4/5 rounded-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{company.company_name}</h2>
        <p>
          <strong>CTC:</strong> {company.ctc}
        </p>
        <p>
          <strong>Location:</strong> {company.location}
        </p>
        <p>
          <strong>Students Placed per Year:</strong> {company.students_placed_yr}
        </p>
        <p>
          <strong>CGPA Requirement:</strong> {company.cgpa}
        </p>
        <p>
          <strong>Backlog Policy:</strong> {company.backlog_policy}
        </p>
        <p>
          <strong>Eligible Branches:</strong> {company.eligible_branches}
        </p>
        <p>
          <strong>Job Roles:</strong> {company.job_role}
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CompanyDetails;
