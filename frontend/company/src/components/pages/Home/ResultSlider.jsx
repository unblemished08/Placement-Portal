import React, { useState, useEffect } from "react";

const ResultSlider = ({ student = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!student.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % student.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [student]);

  if (!student.length) {
    return (
      <div className="text-center text-2xl p-6 text-gray-700">
        No students available
      </div>
    );
  }

  const currentStudent = student[currentIndex];

  return (
    <div className="relative h-full  w-8/12 max-w-5xl mx-auto p-10 bg-gradient-to-r from-blue-400 to-gray-600 text-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
      {/* Student Info and Images */}
      <div className="flex flex-col h-full justify-center md:flex-row items-center gap-12">
        {/* Company Logo Section */}
        <div className="md:w-56 md:h-56 bg-white object-contain rounded-full border-4 border-white shadow-md flex-shrink-0 flex items-center justify-center">
          <img
            src={currentStudent.companyImage}
            alt={`${currentStudent.name} Logo`}
            className="w-8/12"
          />
        </div>

        {/* Student Details Section */}
        <div className="flex-1 ml-12 space-y-4 text-center md:text-left">
          <h2 className="text-4xl text-center font-extrabold mb-4">{currentStudent.name}</h2>
          <div className="flex-row items-center text-center justify-center grid-cols-2 md:grid-cols-3 gap-y-4 text-lg">
            <div>
              <span className="font-bold">Roll No:</span> {currentStudent.rollNo}
            </div>
            <div>
              <span className="font-bold">Batch:</span> {currentStudent.batch}
            </div>
            <div>
              <span className="font-bold">Job Role:</span> {currentStudent.job_profile}
            </div>
          </div>
        </div>

        {/* Student Image Section */}
        <div className="flex-shrink-0">
          <img
            src={currentStudent.studentImage}
            alt={`${currentStudent.name}`}
            className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {student.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResultSlider;
