import Result from "./Result";

 //fetch from backend all companies
const companies = [
    {
      name: 'Google',
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_id:"1234",
    },
    {
      name: 'J P Morgan',
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
      job_id:"1234",
    },
    {
      name: 'Microsoft',
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      job_id:"1234",
    },
  ];

const DisplayResult=()=>{
  return(
        <Result companies={companies}/>
    );
}

export default DisplayResult;