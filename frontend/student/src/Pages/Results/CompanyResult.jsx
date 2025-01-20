const CompanyResult = ({ result }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-6xl">
        <h1
          className={`text-3xl font-extrabold text-center py-6 tracking-wide ${
            result.length > 0 ? "bg-blue-500 text-white" : "bg-red-600 text-white"
          }`}
        >
          {result.length > 0 ? "Selected Students" : "No Students Selected"}
        </h1>
        {result.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm bg-white">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="py-4 px-6 text-left font-semibold">Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Roll No</th>
                  <th className="py-4 px-6 text-left font-semibold">Branch</th>
                  <th className="py-4 px-6 text-left font-semibold">Job Profile</th>
                  <th className="py-4 px-6 text-left font-semibold">Role</th>
                  <th className="py-4 px-6 text-left font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {result.map((student, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-100`}
                  >
                    <td className="py-4 px-6 text-gray-700">{student.name}</td>
                    <td className="py-4 px-6 text-gray-700">{student.rollNo}</td>
                    <td className="py-4 px-6 text-gray-700">{student.branch}</td>
                    <td className="py-4 px-6 text-gray-700">{student.job_profile}</td>
                    <td className="py-4 px-6 text-gray-700">{student.role}</td>
                    <td className="py-4 px-6 text-gray-700">{student.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-gray-700">
            <p className="text-xl font-semibold text-red-500">No students were selected.</p>
            <p className="mt-2">Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyResult;
