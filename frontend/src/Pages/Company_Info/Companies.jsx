import React, { useContext, useState } from "react";
import Company from "./Company";
import { StoreContext } from "../../Context/StoreContext";
import CompanyDetails from "./Company_detail";

const Search = () => {
  // detail of every company to be inserted here
  const { companies } = useContext(StoreContext);
  const { appliedCompanies } = useContext(StoreContext);

  const [isApplied, setIsApplied] = useState(false);

  const [selectedCompany, setSelectedCompany] = useState(null)
  //for functionality of search bar

  const [query, setQuery] = useState('')//holds input data

  const [type, setType] = useState('') //will be used if we specify types of job roles

  const [branch, setBranch] = useState("")

  const filteredCompanies = companies.filter((company) => {
    const matchedQuery = query === "" || company.name.toLowerCase().includes(query.toLowerCase())
    const matchedBranch =
      branch === "" ||
      company.branch
        .split(", ")
        .map((b) => b.toLowerCase())
        .includes(branch.toLowerCase());
    const matchedRole =
      type === "" ||
      company.job_role
        .split(", ")
        .map((t) => t.toLowerCase())
        .includes(type.toLowerCase());
    return matchedQuery && matchedBranch && matchedRole;
  })

  const filteredAppliedCompanies = appliedCompanies.filter((company) => {
    const matchedQuery = query === "" || company.name.toLowerCase().includes(query.toLowerCase())
    const matchedBranch =
      branch === "" ||
      company.branch
        .split(", ")
        .map((b) => b.toLowerCase())
        .includes(branch.toLowerCase());
    const matchedRole =
      type === "" ||
      company.job_role
        .split(", ")
        .map((t) => t.toLowerCase())
        .includes(type.toLowerCase());
    return matchedQuery && matchedBranch && matchedRole;
  })
  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="flex flex-wrap items-center m-3 p-2 space-y-4 md:space-y-0 md:space-x-4">
          {/* Search Input */}
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg w-full md:w-6/12 h-12"
            placeholder="Search Companies, Projects, or Internships"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Radio Buttons */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="companyFilter"
                value="all"
                checked={!isApplied}
                onChange={() => setIsApplied(false)}
                className="mr-2"
              />
              All Companies
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="companyFilter"
                value="applied"
                checked={isApplied}
                onChange={() => setIsApplied(true)}
                className="mr-2"
              />
              Applied Companies
            </label>
          </div>

          {/* Select Dropdown */}
          <div>
            <select
              className="p-3 border border-gray-300 rounded-lg w-full md:w-auto h-12"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="placement">Placement</option>
              <option value="project">Project</option>
              <option value="intern">Intern</option>
            </select>
          </div>
        </div>

        <CompanyDetails
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
        {/* filtered item to displayt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isApplied ? (
            filteredAppliedCompanies.length > 0 ? (
              filteredAppliedCompanies.map((company, index) => (
                <div key={index} onClick={() => setSelectedCompany(company)}>
                  <Company
                    key={index}
                    companyImage={company.companyImage}
                    name={company.name}
                    ctc={company.ctc}
                    gender={company.gender}
                    last_date={company.last_date}
                    cgpa={company.cgpa}
                    backlogs={company.backlogs}
                    branch={company.branch}
                    job_role={company.job_role}
                  />
                </div>
              ))
            ) : (
              <h1>You have not applied in any company.</h1>
            )
          ) : filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, index) => (
              <div key={index} onClick={() => setSelectedCompany(company)}>
                <Company
                  key={index}
                  companyImage={company.companyImage}
                  name={company.name}
                  ctc={company.ctc}
                  gender={company.gender}
                  last_date={company.last_date}
                  cgpa={company.cgpa}
                  backlogs={company.backlogs}
                  branch={company.branch}
                  job_role={company.job_role}
                />
              </div>
            ))
          ) : (
            <h1>There is no company at current.</h1>
          )}
        </div>

      </div>
    </>
  );
};

export default Search;
