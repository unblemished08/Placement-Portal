import React from "react";
import Home_Companies from "./Home_companies/Home_companies";
const Home_user=()=>{
    const UpcomingCompanies=
    [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
            company_name: "Hero",
            ctc: "12 LPA",
            location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
            last_date: "12AUG2004",
            cgpa: "6.5",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "ME",
            job_role: "Placement, Intern",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
            company_name: "Tata Motors",
            ctc: "15 LPA",
            location: "Mumbai, Pune, Bangalore",
            last_date: "15SEP2005",
            cgpa: "7.0",
            backlog_policy: "1 Backlog Allowed",
            eligible_branches: "ME, CE",
            job_role: "Placement",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mahindra_&_Mahindra_Logo.svg/270px-Mahindra_&_Mahindra_Logo.svg.png",
            company_name: "Mahindra & Mahindra",
            ctc: "10 LPA",
            location: "Chennai, Pune, Delhi",
            last_date: "10OCT2006",
            cgpa: "6.8",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "ME, EE",
            job_role: "Intern",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Larsen_%26_Toubro_Logo.svg/270px-Larsen_%26_Toubro_Logo.svg.png",
            company_name: "Larsen & Toubro",
            ctc: "18 LPA",
            location: "Mumbai, Bangalore, Hyderabad",
            last_date: "20NOV2007",
            cgpa: "7.5",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "CE, ME",
            job_role: "Placement",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Infosys_Logo.svg/270px-Infosys_Logo.svg.png",
            company_name: "Infosys",
            ctc: "9 LPA",
            location: "Bangalore, Mysore, Chennai",
            last_date: "05DEC2008",
            cgpa: "6.0",
            backlog_policy: "1 Backlog Allowed",
            eligible_branches: "CS, IT",
            job_role: "Intern",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Wipro_logo.svg/270px-Wipro_logo.svg.png",
            company_name: "Wipro",
            ctc: "10 LPA",
            location: "Hyderabad, Bangalore, Delhi",
            last_date: "12JAN2009",
            cgpa: "6.5",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "CS, IT, ECE",
            job_role: "Placement",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/HCL_Technologies_logo.svg/270px-HCL_Technologies_logo.svg.png",
            company_name: "HCL",
            ctc: "8 LPA",
            location: "Noida, Gurgaon, Chennai",
            last_date: "22FEB2010",
            cgpa: "6.0",
            backlog_policy: "1 Backlog Allowed",
            eligible_branches: "IT, ECE",
            job_role: "Intern, Project",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/TCS_Logo.svg/270px-TCS_Logo.svg.png",
            company_name: "TCS",
            ctc: "12 LPA",
            location: "Mumbai, Pune, Bangalore",
            last_date: "15MAR2011",
            cgpa: "7.0",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "CS, IT",
            job_role: "Placement",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Cognizant_Logo.svg/270px-Cognizant_Logo.svg.png",
            company_name: "Cognizant",
            ctc: "10 LPA",
            location: "Hyderabad, Gurgaon, Chennai",
            last_date: "18APR2012",
            cgpa: "6.3",
            backlog_policy: "1 Backlog Allowed",
            eligible_branches: "IT, CS, ECE",
            job_role: "Intern, Project",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Accenture.svg/270px-Accenture.svg.png",
            company_name: "Accenture",
            ctc: "14 LPA",
            location: "Bangalore, Hyderabad, Pune",
            last_date: "01MAY2013",
            cgpa: "7.2",
            backlog_policy: "No Backlog Allowed",
            eligible_branches: "CS, IT, ME",
            job_role: "Placement, Intern",
          },
    ]
    
    return(
        <>
            <div className="flex">
                <div className="w-9/12 p-4 m-2 shadow-md bg-pink2 rounded-md">
                    <h1 className="font-bold text-3xl">
                        Current Companies
                    </h1>
                        
                        <div className="w-full flex flex-wrap gap-4 font-bold">
                            {
                            UpcomingCompanies.map((UpcomingCompanies,index)=>(
                                <Home_Companies 
                            key={index}
                            src={UpcomingCompanies.src}
                            company_name={UpcomingCompanies.company_name}
                            last_date={UpcomingCompanies.last_date}
                            cgpa={UpcomingCompanies.cgpa}
                            eligible_branches={UpcomingCompanies.eligible_branches}
                            location={UpcomingCompanies.location}
                            ctc={UpcomingCompanies.ctc}
                            job_role={UpcomingCompanies.job_role}
                            />
                            ))
                        }
                        </div>

                        Upcoming Companies
                        <div className="w-full flex">

                        </div>

                        Previous Results
                        <div className="w-full flex">

                        </div>

                    
                </div>
                <div className="w-3/12 p-4 m-2 shadow-md rounded-md bg-pink3">user profile </div>
            </div>
        </>
    )
}

export default Home_user