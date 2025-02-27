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
          name: "Harshit Anand",
          rollNo: "12213053",
          studentImage:"/images/Harshit.jpg",
          companyImage:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          job_profile: "Placement",
          role: "SDE",
          batch:"2022-26",
      },
      {
          name: "Sameer Singh",
          rollNo: "12213054",
          studentImage:"/images/profle.jpg",
          companyImage:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
          job_profile: "Placement",
          role: "SDE",
          batch:"2022-26",
      },
      {
        name: "Sameer",
        rollNo: "12213055",
        studentImage:"/images/Sameer.jpg",
        companyImage:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        job_profile: "Placement",
        role: "SDE",
        batch:"2022-26",
    },
      {
        name: "Richa",
        rollNo: "12213002",
        studentImage:"/images/Richa.jpg",
        companyImage:"data:image/png;base64,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",
        job_profile: "Placement",
        role: "SDE",
        batch:"2022-26",
    }
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
        // formate
        // req  = {
        //     token : "token",
        //     students = result;
        // } in backend fetch company details from token and save the result accordingaly
        
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