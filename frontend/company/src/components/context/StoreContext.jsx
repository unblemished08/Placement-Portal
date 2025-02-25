import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // api req for setting company requirements
    const [CompanyReq,setCompanyReq] = useState({
            name : "Google",
            ctc : "67 LPA",
            job_id : "MS1298234",
            email : "hr@google.com",
            phoneNumber : "1234567890",
            gender : "Both",
                // enum: ["Only Female" ,"Both"], 
            batch : "2022-25",
            cgpa : 8,
            backlogs : "Nil",
                // enum: ["Nil", "1", "2","3",">=4"]
            branch : ["CS", "IT"],
                // enum: ["CS", "IT", "ECE","EE","MECH","CIVIL","PIE"]
            location : ["Noida", "Banglore"],
            job_profile : ["Full Time", "Research Intern"],
                // enum: ["Full Time", "Project", "Research Intern"]
            companyImage : "",
            onlyPWD : false, // this feild is to be added in backend company schema
            last_date : "2025-01-22",
            group_disscussion : true,
            OA : "Yes",
            aptitude : "No",
            tech_rounds : 2,
            hr_rounds : 1,
            description : "This is the description field.",

    });
    
    // api req for updating company's requirements
    const [isChange,setIsChange] = useState(true);
    useEffect(()=>{
      // req for changing the data -> send {companyRequirements} in the request
      setIsChange(false);
    },[isChange]);

    //result silder data for profile
    const result_for_profile=[
        {
          name: "Siddharth ydv",
          rollNo: "12213039",
          studentImage:"/images/profile.jpg",
          companyImage:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          job_profile: "Placement",
          role: "SDE",
          batch:"2022-26",
      },
      {
          name: "Anant",
          rollNo: "12213013",
          studentImage:"/images/profile.jpg",
          companyImage:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
          job_profile: "Placement",
          role: "SDE",
          batch:"2022-26",
      },
      {
          name: "Naman",
          rollNo: "12213055",
          studentImage:"/images/profile.jpg",
          companyImage:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
          job_profile: "Placement",
          role: "SDE",
          batch:"2022-26",
      },
      ]

    // student applied in particular company
    const appliedStudents = [
        {
            name: "Harshit Anand",
            rollNo: "12213053",
            branch: "IT",
            cgpa: 9.5,
        },
        {
            name: "Sameer Singh",
            rollNo: "12213054",
            branch: "IT",
            cgpa: 9.2,
        },
        {
            name: "Sameer",
            rollNo: "12213055",
            branch: "IT",
            cgpa: 10,
        }
    ];

    //each student full details
    const studentDetails={
      name:"Meetha",
      rollNo:"69",
      personal_email:"meetha@gmail.com",
      college_email:"maimeetha@gmail.com",
      phoneNumber:"6969696969",
      gender:"Rainbow",
      batch:"2026",
      cgpa:"6.9",
      backlogs:"Yes",
      branch:"IT",
      familyIncome:"69",
      category:'XYZ',
      studentImage:'https://nitkkr.ac.in/wp-content/uploads/2023/01/Parveen.jpg',
      isDisabled:"No",
    };

    // api request for result declared by comapny
    const [result, setResult] = useState([]);
    useEffect(()=>{
        // console.log(result); send request
    },[result]);

    // send notification
    const [notification,setNotification] = useState({});
    useEffect(()=>{
        // console.log(notification); // send req {from,to[], message}
    },[notification])

    // received Notification
    // const recNotis = [
    //     {
    //         from : "Admin",
            
    //     }
    // ]
        
    // all the objects which declared in the context must be created into a single object
    const contextValue = {
        appliedStudents,
        studentDetails,  
        setIsChange,     
        result_for_profile, 
        CompanyReq,
        setCompanyReq,
        setResult,
        setNotification,
    }
    return (
       <StoreContext.Provider value={contextValue}>
           {props.children}
       </StoreContext.Provider>
    )
}
export default StoreContextProvider