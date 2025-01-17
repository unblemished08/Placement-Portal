import { useNavigate } from "react-router-dom";

const Result=({companies})=>{

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/companyResult");
  };

    return(
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">RESULTS</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Job_id</th>
            <th className="py-2 px-4 border-b text-left">Company</th>
            <th className="py-2 px-4 border-b text-center">Result</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{company.job_id}</td>
              <td
               className="py-2 px-4 border-b">
                <div className="flex items-center space-x-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-10 w-10 object-contain"
                />
                <div>{company.name}</div> </div>
                </td>
              <td className="py-2 px-4 border-b text-center">
                <button onClick={handleClick}   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
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
}

export default Result;