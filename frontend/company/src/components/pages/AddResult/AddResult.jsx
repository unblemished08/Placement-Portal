import React, { useContext, useState } from "react";
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
    }

    return (
        <div className="min-h-screen bg-gray-100 flex pt-3 mt-0 px-10">
            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-xl h-fit mx-8 p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Add Student Details
                </h1>
                <form onSubmit={addStudent} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter student's name"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter student's email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Job Role:</label>
                        <input
                            type="text"
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                            placeholder="Enter job role"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    {error && <p className="text-red-500 font-medium">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Add Student
                    </button>
                </form>
            </div>

            {/* Student List Section */}
            <div className="w-full shadow-lg rounded-xl max-w-2xl p-3 mx-8 bg-white h-fit ">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold w-3/4 text-gray-800 mb-4 text-center">
                        Student List
                    </h1>
                    {students.length === 0
                        ? ""
                        : <button onClick={submitResult} className="bg-green-500 w-1/4 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition duration-300">
                            Upload Result
                        </button>
                    }

                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                                    <td><p className="text-gray-500 text-center">No students added yet.</p></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                        ) : (
                            <tbody>
                                {students.map((student, index) => (
                                    <tr
                                        key={student.id}
                                        className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                            }`}
                                    >
                                        <td className="py-3 px-6">{student.name}</td>
                                        <td className="py-3 px-6">{student.email}</td>
                                        <td className="py-3 px-6">{student.jobRole}</td>
                                        <td className="py-3 px-6">
                                            <button
                                                onClick={() => deleteStudent(student.id)}
                                                className="flex justify-center items-center w-full"
                                            >
                                                <img src="/images/delete.png" className="w-6 " alt="Delete" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddResult;
