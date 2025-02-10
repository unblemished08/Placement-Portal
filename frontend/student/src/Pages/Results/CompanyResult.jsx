const CompanyResult = ({ result }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black p-6">
      <div className="bg-gray-900 shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl border border-gray-700">
        <h1
          className={`text-4xl font-extrabold text-center py-6 tracking-wide uppercase shadow-md ${
            result.length > 0 ? "bg-blue-700 text-white" : "bg-red-700 text-white"
          }`}
        >
          {result.length > 0 ? "Selected Students" : "No Students Selected"}
        </h1>
        {result.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-md bg-gray-800 text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 border-b border-gray-600">
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
                    className={`border-b border-gray-600  ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-800"
                    } hover:bg-gray-600`}
                  >
                    <td className="py-4 px-6 text-gray-300">{student.name}</td>
                    <td className="py-4 px-6 text-gray-300">{student.rollNo}</td>
                    <td className="py-4 px-6 text-gray-300">{student.branch}</td>
                    <td className="py-4 px-6 text-gray-300">{student.job_profile}</td>
                    <td className="py-4 px-6 text-gray-300">{student.role}</td>
                    <td className="py-4 px-6 text-gray-300">{student.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-gray-300">
            <p className="text-2xl font-semibold text-red-400">No students were selected.</p>
            <p className="mt-2 text-lg">Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyResult;