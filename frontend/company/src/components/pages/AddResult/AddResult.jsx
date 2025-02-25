import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";

const AddResult = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const { setResult } = useContext(StoreContext);

  const addStudent = (e) => {
    e.preventDefault();
    if (!name || !email || !jobRole) {
      setError("All fields are required!");
      return;
    }

    const currStudent = {
      id: Date.now(),
      name,
      email,
      jobRole,
    };

    const studentExists = students.some((student) => student.email === email);
    if (studentExists) {
      setError("Student already added.");
      return;
    } else {
      setError("");
    }

    setStudents([...students, currStudent]);
    setName("");
    setEmail("");
    setJobRole("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const submitResult = () => {
    setResult(students);
    setStudents([]);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-900 flex flex-col md:flex-row pt-5 px-8 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Form Section */}
      <motion.div
        className="bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-lg mb-6 md:mb-0 md:mr-8 animate-slideInLeft"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Add Student Details</h1>
        <form onSubmit={addStudent} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student's name"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter student's email"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Job Role:</label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="Enter job role"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          {error && <p className="text-red-500 font-medium">{error}</p>}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-lg font-semibold"
          >
            Add Student
          </motion.button>
        </form>
      </motion.div>

      {/* Student List Section */}
      <motion.div
        className="w-full shadow-lg rounded-xl p-6 bg-gray-800 animate-slideInRight"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-3xl font-bold text-center w-3/4">Student List</h1>
          {students.length > 0 && (
            <motion.button
              onClick={submitResult}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 transition duration-300 px-4 py-2 rounded-lg shadow-md focus:ring-4 focus:ring-green-300"
            >
              Upload Result
            </motion.button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Job Role</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            {students.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="4">
                    <p className="text-gray-400 text-center py-4">
                      No students added yet.
                    </p>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`border-b border-gray-700 ${
                      index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                    }`}
                  >
                    <td className="py-3 px-6">{student.name}</td>
                    <td className="py-3 px-6">{student.email}</td>
                    <td className="py-3 px-6">{student.jobRole}</td>
                    <td className="py-3 px-6 text-center">
                      <motion.button
                        onClick={() => deleteStudent(student.id)}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center w-full"
                      >
                        <img
                          src="/images/delete.png"
                          className="w-6 invert"
                          alt="Delete"
                        />
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddResult;
