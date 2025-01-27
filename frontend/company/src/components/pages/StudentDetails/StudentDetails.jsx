import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FullDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student; // Get student details from navigation state

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!student) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="bg-white w-4/5 h-4/5 rounded-lg p-8 shadow-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">No Student Selected</h1>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
            onClick={handleClose}
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
        className="bg-white w-4/5 h-4/5 rounded-lg p-8 shadow-xl overflow-y-auto relative border-2 ring-2 ring-blue-400"
        style={{
          boxShadow: "0 0 20px 10px rgba(61, 104, 232, 0.5)",
        }}
      >
        <button
          className="sticky top-4 float-right ml-auto text-red-500 text-lg font-bold hover:text-red-700 transition-all"
          onClick={handleClose}
        >
          ✕
        </button>

        <div className="flex flex-wrap justify-between items-center mb-8">
          {student.studentImage && (
            <img
              src={student.studentImage}
              alt={`${student.name} Profile`}
              className="w-40 h-40 object-contain rounded-md shadow-md"
            />
          )}
          <h2 className="text-4xl font-extrabold text-gray-800">{student.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <p>
            <strong className="font-semibold">Roll No:</strong> {student.rollNo}
          </p>
          <p>
            <strong className="font-semibold">Email:</strong> {student.personal_email}
          </p>
          <p>
            <strong className="font-semibold">Phone:</strong> {student.phoneNumber}
          </p>
          <p>
            <strong className="font-semibold">Gender:</strong> {student.gender}
          </p>
          <p>
            <strong className="font-semibold">Branch:</strong> {student.branch}
          </p>
          <p>
            <strong className="font-semibold">CGPA:</strong> {student.cgpa}
          </p>
          <p>
            <strong className="font-semibold">Batch:</strong> {student.batch}
          </p>
          <p>
            <strong className="font-semibold">Backlogs:</strong> {student.backlogs}
          </p>
          <p>
            <strong className="font-semibold">Family Income:</strong> {student.familyIncome}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
