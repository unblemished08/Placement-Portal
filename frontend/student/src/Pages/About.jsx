import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StudentDetails = ({ appliedStudents }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [cgpaFilter, setCgpaFilter] = useState("All");

  const handleClick = (student) => {
    navigate("/fullDetails", { state: { student } });
  };

  const filterStudents = () => {
    return appliedStudents
      .filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.rollNo.includes(searchQuery)
      )
      .filter((student) => {
        if (cgpaFilter === "All") return true;
        return student.cgpa >= parseFloat(cgpaFilter);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        <motion.h1 
          initial={{ x: -100 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center py-6 text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg border-b-4 border-white"
        >
          STUDENTS <span className="text-yellow-400">APPLIED</span>
        </motion.h1>

        <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search by Name or Roll No..."
            className="px-4 py-2 w-full md:w-1/2 rounded bg-gray-700 text-white placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded bg-gray-700 text-white"
            value={cgpaFilter}
            onChange={(e) => setCgpaFilter(e.target.value)}
          >
            <option value="All">All CGPA</option>
            <option value="9">Above 9</option>
            <option value="8.5">Above 8.5</option>
            <option value="8">Above 8</option>
            <option value="7.5">Above 7.5</option>
            <option value="7">Above 7</option>
          </select>
        </div>

        {filterStudents().length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-white bg-gray-700">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-2 px-4">S No.</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Roll No</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4">CGPA</th>
                  <th className="py-2 px-4 text-center">Profile</th>
                </tr>
              </thead>
              <tbody>
                {filterStudents().map((student, index) => (
                  <motion.tr
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-600 hover:bg-gray-600 hover:font-bold transition"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.rollNo}</td>
                    <td className="py-2 px-4">{student.branch}</td>
                    <td className="py-2 px-4 text-center">{student.cgpa}</td>
                    <td className="py-2 px-4 text-center">
                      <div className="flex flex-col items-center">
                        {student.imageUrl && (
                          <img 
                            src={student.imageUrl} 
                            alt={student.name} 
                            className="w-16 h-16 rounded-full border-2 border-white mb-2"
                          />
                        )}
                        <button
                          onClick={() => handleClick(student)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                          View Profile
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="p-8 text-center text-red-500 text-lg"
          >
            No students applied till now
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StudentDetails;
