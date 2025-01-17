import React, { createContext } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
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

    // all the objects which declared in the context must be created into a single object
    const contextValue = {
        appliedStudents,
        studentDetails,
    }
    return (
       <StoreContext.Provider value={contextValue}>
           {props.children}
       </StoreContext.Provider>
    )
}
export default StoreContextProvider