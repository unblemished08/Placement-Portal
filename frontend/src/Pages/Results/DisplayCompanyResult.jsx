import CompanyResult from "./CompanyResult"
//fetch result from backend server
const result = [
    {
        name: "Harshit Anand",
        rollNo: "12213053",
        branch: "IT",
        job_profile: "Intern",
        role: "SDE",
        location: "Hydreabad"
    },
    {
        name: "Harshit Anand",
        rollNo: "12213053",
        branch: "IT",
        job_profile: "Intern",
        role: "SDE",
        location: "Hydreabad"
    },
    {
        name: "Harshit Anand",
        rollNo: "12213053",
        branch: "IT",
        job_profile: "Intern",
        role: "SDE",
        location: "Hydreabad"
    }
];


const DisplayCompanyResult = () => {
    return (
        <CompanyResult result={result} />
    );
}

export default DisplayCompanyResult;