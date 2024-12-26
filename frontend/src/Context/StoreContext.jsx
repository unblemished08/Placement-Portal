import React, { createContext, useContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // api req for companies will be made here
    const companies = [
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
          name: "Google",
          ctc: "63.5 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "5",
          cgpa:"8.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
          name: "JPMorgan",
          ctc: "63.5 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "3",
          cgpa:"8.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT, ECE",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
          name: "Adobe",
          ctc: "63.5 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "6",
          cgpa:"8.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          name: "Microsoft",
          ctc: "63.5 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "6",
          cgpa:"8.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
          name: "VISA",
          ctc: "32.5 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "5",
          cgpa:"8.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/188px-SAP_2011_logo.svg.png",
          name: "SAP labs",
          ctc: "27 LPA",
          location: "Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "10",
          cgpa:"7.5",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT, ECE, EE",
          job_role:"Placement"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/375px-Tata_Consultancy_Services_Logo.svg.png",
          name: "TCS",
          ctc: "6 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "60",
          cgpa:"6.0",
          backlogs: "No Backlog Allowed",
          branch: "CS, IT",
          job_role:"Placement, Intern"
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
          name: "Hero",
          ctc: "12 LPA",
          location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
          students_placed_yr: "30",
          cgpa:"6.5",
          backlogs: "No Backlog Allowed",
          branch: "ME",
          job_role:"Placement, Intern"
        }
      ];

    //   api req for upcoming companies will be made here
      const UpcomingCompanies=
    [
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
            name: "Hero",
            ctc: "12 LPA",
            location: "Hyderabad, Bangalore, Delhi, Noida, Gurgaon",
            last_date: "12AUG2004",
            cgpa: "6.5",
            backlogs: "No Backlog Allowed",
            branch: "ME",
            job_role: "Placement, Intern",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
            name: "Tata Motors",
            ctc: "15 LPA",
            location: "Mumbai, Pune, Bangalore",
            last_date: "15SEP2005",
            cgpa: "7.0",
            backlogs: "1 Backlog Allowed",
            branch: "ME, CE",
            job_role: "Placement",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mahindra_&_Mahindra_Logo.svg/270px-Mahindra_&_Mahindra_Logo.svg.png",
            name: "Mahindra & Mahindra",
            ctc: "10 LPA",
            location: "Chennai, Pune, Delhi",
            last_date: "10OCT2006",
            cgpa: "6.8",
            backlogs: "No Backlog Allowed",
            branch: "ME, EE",
            job_role: "Intern",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Larsen_%26_Toubro_Logo.svg/270px-Larsen_%26_Toubro_Logo.svg.png",
            name: "Larsen & Toubro",
            ctc: "18 LPA",
            location: "Mumbai, Bangalore, Hyderabad",
            last_date: "20NOV2007",
            cgpa: "7.5",
            backlogs: "No Backlog Allowed",
            branch: "CE, ME",
            job_role: "Placement",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Infosys_Logo.svg/270px-Infosys_Logo.svg.png",
            name: "Infosys",
            ctc: "9 LPA",
            location: "Bangalore, Mysore, Chennai",
            last_date: "05DEC2008",
            cgpa: "6.0",
            backlogs: "1 Backlog Allowed",
            branch: "CS, IT",
            job_role: "Intern",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Wipro_logo.svg/270px-Wipro_logo.svg.png",
            name: "Wipro",
            ctc: "10 LPA",
            location: "Hyderabad, Bangalore, Delhi",
            last_date: "12JAN2009",
            cgpa: "6.5",
            backlogs: "No Backlog Allowed",
            branch: "CS, IT, ECE",
            job_role: "Placement",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/HCL_Technologies_logo.svg/270px-HCL_Technologies_logo.svg.png",
            name: "HCL",
            ctc: "8 LPA",
            location: "Noida, Gurgaon, Chennai",
            last_date: "22FEB2010",
            cgpa: "6.0",
            backlogs: "1 Backlog Allowed",
            branch: "IT, ECE",
            job_role: "Intern, Project",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/TCS_Logo.svg/270px-TCS_Logo.svg.png",
            name: "TCS",
            ctc: "12 LPA",
            location: "Mumbai, Pune, Bangalore",
            last_date: "15MAR2011",
            cgpa: "7.0",
            backlogs: "No Backlog Allowed",
            branch: "CS, IT",
            job_role: "Placement",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Cognizant_Logo.svg/270px-Cognizant_Logo.svg.png",
            name: "Cognizant",
            ctc: "10 LPA",
            location: "Hyderabad, Gurgaon, Chennai",
            last_date: "18APR2012",
            cgpa: "6.3",
            backlogs: "1 Backlog Allowed",
            branch: "IT, CS, ECE",
            job_role: "Intern, Project",
          },
          {
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Accenture.svg/270px-Accenture.svg.png",
            name: "Accenture",
            ctc: "14 LPA",
            location: "Bangalore, Hyderabad, Pune",
            last_date: "01MAY2013",
            cgpa: "7.2",
            backlogs: "No Backlog Allowed",
            branch: "CS, IT, ME",
            job_role: "Placement, Intern",
          },
    ]
    

    // api req for userProfile
    const [userData,setUserData] = useState({name:"Meetha",
      rollNo:"69",
      personal_email:"meetha@gmail.com",
      college_email:"maimeetha@gmail.com",
      phoneNumber:"6969696969",
      gender:"Rainbow",
      batch:"2022-26",
      cgpa:"6.9",
      backlogs:"Yes",
      branch:"IT",
      familyIncome:"69",
      category:'XYZ',
      studentImage:null,
      isDisabled:"No",
      password:"maimeethahu",
      approved:"No",});

      
    // api req for updating user's data
    const [isChange,setIsChange] = useState(true);
    useEffect(()=>{
      // req for changing the data -> send {userData} in the request
      setIsChange(false);
    },[isChange]);



    const currCompaniesData = [
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
        name: "Google",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Linkedin_Logo.png",
        name: "LinkedIn",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Amazon_logo.svg",
        name: "Amazon",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Microsoft_logo_%282012%29.svg",
        name: "Microsoft",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/5/51/Accenture.svg",
        name: "Accenture",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 2,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e8/TCS_Logo.svg",
        name: "TCS",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Infosys_logo.svg",
        name: "Infosys",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/7/73/Wipro_logo.svg",
        name: "Wipro",
        gd: "no",
        tech_rounds: 2,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Cisco_logo_blue_2016.svg",
        name: "Cisco",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
      {
        companyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/IBM_logo.svg",
        name: "IBM",
        gd: "yes",
        tech_rounds: 3,
        hr_rounds: 1,
      },
    ];
    
    const resultdata = [
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
          name: "Google",
          result: "Yes",
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Linkedin_Logo.png",
          name: "LinkedIn",
          value: "No",
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
          name: "Apple",
          value: "Yes",
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          name: "Microsoft",
          value: "No",
        },
        {
          companyImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Amazon_icon.png",
          name: "Amazon",
          value: "Yes",
        },
    ];
    

    // all the objects which declared in the context must be created into a single object
    const contextValue = {
        companies,
        UpcomingCompanies,
        currCompaniesData,
        resultdata,
        setUserData,
        setIsChange,
        userData,
    }
  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
