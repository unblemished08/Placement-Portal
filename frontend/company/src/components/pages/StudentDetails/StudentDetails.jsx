import React from 'react'
import { useNavigate } from "react-router-dom";
const StudentDetails = (appliedStudents) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/fullDetails");
      };
    
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100 bg-opacity-90">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-3/4">
        <h1 className={`text-2xl font-bold text-center py-4 text-white ${
            appliedStudents.appliedStudents.length > 0 ? "bg-green-500" : "bg-red-500"
          }`}>
          STUDENTS APPLIED
        </h1>
        {appliedStudents.appliedStudents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left bg-white">
              <thead className="bg-gray-100 border-b">
                <tr >
                <th className="py-2 px-4">S No.</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Roll No</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4 ">CGPA</th> 
                  <th className="py-2 px-4 ">View Full Details</th>  
                </tr>
              </thead>
              <tbody>
                {appliedStudents.appliedStudents.map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{index+1}</td>
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.rollNo}</td>
                    <td className="py-2 px-4">{student.branch}</td>
                    <td className="py-2 px-4">{student.cgpa}</td>
                    <td className="py-2 px-4 border-b text-center">
                <button onClick={handleClick}   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Full Details
                </button>
              </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-red-500 text-lg">
            No students applied till now
          </div>
        )}
      </div>
    </div>
        </>
  )
}

export default StudentDetails