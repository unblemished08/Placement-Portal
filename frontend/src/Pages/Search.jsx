import React, { useContext, useState } from "react";
import Companies from "./search_componets/Companies";
import { StoreContext } from "../Context/StoreContext";
import CompanyDetails from "./search_componets/Company_detail";

const Search = () => {
  // detail of every company to be inserted here
  const { companies } = useContext(StoreContext);
  const [selectedCompany,setSelectedCompany]=useState(null)
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


  return (
    <>
      <div className="p-4 bg-gray-100">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg"
            placeholder="Search Companies, Projects, or Internships"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <select className="p-3 border border-gray-300 rounded-lg"
            value={type}
            onChange={(e)=>setType(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="placement">Placement</option>
            <option value="project">Project</option>
            <option value="intern">Intern</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-lg"
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            <option value="cs">CS</option>
            <option value="it">IT</option>
            <option value="ece">ECE</option>
            <option value="ee">EE</option>
            <option value="ce">CE</option>
            <option value="me">ME</option>
            <option value="pie">PIE</option>
          </select>
        </div>

         <CompanyDetails
          company={selectedCompany}
          onClose={()=>setSelectedCompany(null)}
          />

        {/* filtered item to displayt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.length>0?(
          filteredCompanies.map((company,index)=>(
            <div key={index} onClick={()=>setSelectedCompany(company)}>
             <Companies 
                key={index}
                companyImage={company.companyImage}
                name={company.name}
                ctc={company.ctc} 
                location={company.location}
                students_placed_yr={company.students_placed_yr}
                cgpa={company.cgpa}
                backlogs={company.backlogs}
                branch={company.branch}
                job_role={company.job_role}
                />
                </div>
          ))
        ):(
          <h1>
            bhai tu UPSC ki tyari kr
            <br/>
            jai baba ki!!
          </h1>
        )}
        </div>
      </div>
    </>
  );
};

export default Search;
