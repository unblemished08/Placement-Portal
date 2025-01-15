const CompanyResult=(result)=>{
    return (
        <>
        
            <div className="flex items-center justify-center h-screen bg-gray-100 bg-opacity-90">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-3/4">
        <h1 className={`text-2xl font-bold text-center py-4 text-white ${
            result.result.length > 0 ? "bg-green-500" : "bg-red-500"
          }`}>
          SELECTED STUDENTS
        </h1>
        {result.result.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left bg-white">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Roll No</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4">Job Profile</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Location</th>
                </tr>
              </thead>
              <tbody>
                {result.result.map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.rollNo}</td>
                    <td className="py-2 px-4">{student.branch}</td>
                    <td className="py-2 px-4">{student.job_profile}</td>
                    <td className="py-2 px-4">{student.role}</td>
                    <td className="py-2 px-4">{student.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-red-500 text-lg">
            No one is selected
          </div>
        )}
      </div>
    </div>
        </>
    )
}

export default CompanyResult;