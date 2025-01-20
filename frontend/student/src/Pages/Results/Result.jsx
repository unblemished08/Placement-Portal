import { useNavigate } from "react-router-dom";

const Result = ({ companies }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/companyResult");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Job Results
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-5 border-b font-semibold text-left text-gray-700">Job ID</th>
              <th className="py-3 px-5 border-b font-semibold text-left text-gray-700">Company</th>
              <th className="py-3 px-5 border-b font-semibold text-center text-gray-700">Result</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-5 border-b text-gray-600">
                  {company.job_id}
                </td>
                <td className="py-3 px-5 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-12 w-12 object-contain rounded-full border border-gray-300"
                    />
                    <div className="text-gray-800 font-medium">
                      {company.name}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b text-center">
                  <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
