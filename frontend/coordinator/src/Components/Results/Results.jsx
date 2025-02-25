import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { results, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClick = (company) => {
    setData(company);
    navigate("/company-result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Results</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-300">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                <th className="p-3 text-left">Company Name</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {results.map((company) => (
                <tr
                  key={company.job_id}
                  className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                >
                  <td className="p-3">{company.name}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleClick(company)}
                      className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
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
    </div>
  );
};

export default Results;
