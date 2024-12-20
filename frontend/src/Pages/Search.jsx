import React from "react";
import Accenture from "./Companies";

const Search = () => {
  const companies = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company_name: "Google",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "5",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
      company_name: "JPMorgan",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "3",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT, ECE"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      company_name: "Adobe",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "6",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company_name: "Microsoft",
      ctc: "63.5 LPA",
      location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
      students_placed_yr: "6",
      cgpa:"8.0",
      backlog_policy: "No Backlog Allowed",
      eligible_branches: "CS, IT"
    }
  ];
  
  return (
    <>
      <div className="p-4 bg-gray-100">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg"
            placeholder="Search Companies, Projects, or Internships"
          />
          <select className="p-3 border border-gray-300 rounded-lg">
            <option value="">Select Type</option>
            <option value="placement">Placement</option>
            <option value="project">Project</option>
            <option value="intern">Intern</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-lg">
            <option value="">Select Branch</option>
            <option value="cs">CS</option>
            <option value="it">IT</option>
            <option value="ece">ECE</option>
            <option value="ee">EE</option>
            <option value="ce">CE</option>
            <option value="me">ME</option>
            <option value="pie">PIE</option>
          </select>
          <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          companies.map((company,index)=>{
            return <Accenture 
                    key={index}
                    src={company.src}
                    company_name={company.company_name}
                    ctc={company.ctc} 
                    location={company.location}
                    students_placed_yr={company.students_placed_yr}
                    cgpa={company.cgpa}
                    backlog_policy={company.backlog_policy}
                    eligible_branches={company.eligible_branches}
                    />
          })
        }
        </div>
      </div>
    </>
  );
};

export default Search;
