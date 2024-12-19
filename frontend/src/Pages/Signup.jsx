import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    personal_email: "",
    college_email: "",
    phoneNumber: "",
    gender: "Male",
    batch: "",
    cgpa: "",
    backlogs: "Nil",
    branch: "CS",
    familyIncome: "<1Lac",
    category: "Gen",
    studentImage: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // Example API request: 
    // await axios.post('/api/signup', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Roll Number */}
        <div className="mb-4">
          <label htmlFor="rollNo" className="block text-gray-700">Roll Number</label>
          <input
            type="text"
            name="rollNo"
            id="rollNo"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Personal Email */}
        <div className="mb-4">
          <label htmlFor="personal_email" className="block text-gray-700">Personal Email</label>
          <input
            type="email"
            name="personal_email"
            id="personal_email"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.personal_email}
            onChange={handleChange}
            required
          />
        </div>

        {/* College Email */}
        <div className="mb-4">
          <label htmlFor="college_email" className="block text-gray-700">College Email</label>
          <input
            type="email"
            name="college_email"
            id="college_email"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.college_email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700">Gender</label>
          <select
            name="gender"
            id="gender"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Batch */}
        <div className="mb-4">
          <label htmlFor="batch" className="block text-gray-700">Batch</label>
          <input
            type="text"
            name="batch"
            id="batch"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.batch}
            onChange={handleChange}
            required
          />
        </div>

        {/* CGPA */}
        <div className="mb-4">
          <label htmlFor="cgpa" className="block text-gray-700">CGPA</label>
          <input
            type="number"
            name="cgpa"
            id="cgpa"
            step="0.01"
            min="0"
            max="10"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </div>

        {/* Backlogs */}
        <div className="mb-4">
          <label htmlFor="backlogs" className="block text-gray-700">Backlogs</label>
          <select
            name="backlogs"
            id="backlogs"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.backlogs}
            onChange={handleChange}
            required
          >
            <option value="Nil">Nil</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value=">=4">>=4</option>
          </select>
        </div>

        {/* Branch */}
        <div className="mb-4">
          <label htmlFor="branch" className="block text-gray-700">Branch</label>
          <select
            name="branch"
            id="branch"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="PIE">PIE</option>
          </select>
        </div>

        {/* Family Income */}
        <div className="mb-4">
          <label htmlFor="familyIncome" className="block text-gray-700">Family Income</label>
          <select
            name="familyIncome"
            id="familyIncome"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.familyIncome}
            onChange={handleChange}
            required
          >
            <option value="<1Lac">Less than 1 Lac</option>
            <option value=">=1Lac">1 Lac or more</option>
            <option value=">=5Lac">5 Lacs or more</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <select
            name="category"
            id="category"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Gen">General</option>
            <option value="OBC">OBC</option>
            <option value="SC/ST">SC/ST</option>
            <option value="PWD">PWD</option>
          </select>
        </div>

        {/* Student Image  -> later take image here */}
        <div className="mb-4">
          <label htmlFor="studentImage" className="block text-gray-700">Student Image URL</label>
          <input
            type="url"
            name="studentImage"
            id="studentImage"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.studentImage}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
