import React, { useState } from "react";
import Companies from "./Companies";

const Search = () => {
  // detail of every company to be inserted here
  const companies = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company_name: "Google",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "5",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
      company_name: "JPMorgan",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "3",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT, ECE",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      company_name: "Adobe",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "6",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company_name: "Microsoft",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "6",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
      company_name: "VISA",
      ctc: "32.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "5",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/188px-SAP_2011_logo.svg.png",
      company_name: "SAP labs",
      ctc: "27 LPA",
      location: "Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "10",
      cgpa:"7.5",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT, ECE, EE",
      job_role:"Placement"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/375px-Tata_Consultancy_Services_Logo.svg.png",
      company_name: "TCS",
      ctc: "6 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "60",
      cgpa:"6.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT",
      job_role:"Placement, Intern"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
      company_name: "Hero",
      ctc: "12 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "30",
      cgpa:"6.5",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "ME",
      job_role:"Placement, Intern"
    }
  ];
  
  //for functionality of search bar

  const [query,setQuery]=useState('')//holds input data

  const [type,setType]=useState('') //will be used if we specify types of job roles

  const [branch,setBranch]=useState("")

  const filteredCompanies=companies.filter((company)=>{
    const matchedQuery = query==="" || company.company_name.toLowerCase().includes(query.toLowerCase())
    const matchedBranch =
      branch === "" ||
      company.eligible_branches
        .split(", ")
        .map((b) => b.toLowerCase())
        .includes(branch.toLowerCase());    
    const matchedRole=
        type==="" || 
        company.job_role
        .split(", ")
        .map((t)=>t.toLowerCase())
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
        {/* filtered item to displayt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.length>0?(
          filteredCompanies.map((company,index)=>(
             <Companies 
                key={index}
                src={company.src}
                company_name={company.company_name}
                ctc={company.ctc} 
                location={company.location}
                students_placed_yr={company.students_placed_yr}
                cgpa={company.cgpa}
                backlog_policy={company.backlog_policy}
                eligible_branches={company.eligible_branches}
                job_role={company.job_role}
                />
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
