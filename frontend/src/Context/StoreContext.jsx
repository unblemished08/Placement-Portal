import React, { createContext, useContext } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // api req for companies will be made here
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
      
    //   api req for upcoming companies will be made here
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
    
    const currCompaniesData = [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
        company_name: "Google",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Linkedin_Logo.png",
        company_name: "LinkedIn",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Amazon_logo.svg",
        company_name: "Amazon",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Microsoft_logo_%282012%29.svg",
        company_name: "Microsoft",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Accenture.svg",
        company_name: "Accenture",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 2,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/TCS_Logo.svg",
        company_name: "TCS",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Infosys_logo.svg",
        company_name: "Infosys",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Wipro_logo.svg",
        company_name: "Wipro",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Cisco_logo_blue_2016.svg",
        company_name: "Cisco",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/IBM_logo.svg",
        company_name: "IBM",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
    ];
    
    

    // all the objects which declared in the context must be created into a single object
    const contextValue = {
        companies,
        UpcomingCompanies,
        currCompaniesData
    }
  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
