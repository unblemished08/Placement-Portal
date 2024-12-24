import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import UpComing_Companies from "./Home_companies/upcoming_companies";
import Current_Companies from "./Home_companies/current_companies";
import Result from "./Home_companies/Result";
import { useRef } from "react";
const Home_user = () => {
  const { UpcomingCompanies } = useContext(StoreContext);
  const { currCompaniesData } = useContext(StoreContext);
  const { resultdata } = useContext(StoreContext);

  const upcomingRef = useRef(null);
  const currentRef = useRef(null);
  const resultRef = useRef(null);

  const user = [
    {
      user_name: "Angel Priya",
      user_cgpa: 9,
      user_branch: "EE",
      user_batch: "2026",
    },
  ];

  const handle = (section) => {
    if(section==="upcoming" && upcomingRef.current)
    {
      upcomingRef.current.scrollIntoView({behavior:"smooth"});
    }
    else if(section==="current" && currentRef.current){
      currentRef.current.scrollIntoView({behavior:"smooth"});
    }
    else if(section==="results" && resultRef.current)
    {
      resultRef.current.scrollIntoView({behavior:"smooth"})
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-9/12 p-4 m-2 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md my-6 ">
          {/* Upcoming Companies */}
          <h1 ref={upcomingRef} className="font-bold text-4xl my-8 text-gray-800">Upcoming Companies</h1>
          <div className="w-full flex flex-wrap gap-6">
            {UpcomingCompanies.map((Company, index) => (
              <UpComing_Companies
                key={index}
                src={Company.src}
                company_name={Company.company_name}
                last_date={Company.last_date}
                cgpa={Company.cgpa}
                eligible_branches={Company.eligible_branches}
                location={Company.location}
                ctc={Company.ctc}
                job_role={Company.job_role}
              />
            ))}
          </div>

          {/* Current Companies */}
          <h1 ref={currentRef} className="font-bold text-4xl my-8 text-gray-800">Current Companies</h1>
          <div className="w-full flex flex-wrap gap-6">
            {currCompaniesData.map((company, index) => (
              <Current_Companies
                key={index}
                src={company.src}
                company_name={company.company_name}
                gd={company.gd}
                tech_rounds={company.tech_rounds}
                hr_rounds={company.hr_rounds}
              />
            ))}
          </div>

          {/* Results */}
          <h1 ref={resultRef} className="font-bold text-4xl my-8 text-gray-800">Result Declared</h1>
          <div className="w-full flex flex-wrap gap-6">
            {resultdata.map((company, index) => (
              <Result
                key={index}
                src={company.src}
                company_name={company.company_name}
                value={company.value}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/12 py-4 m-2 h-full sticky top-20">
          {/* Profile Section */}
          <div className="w-full shadow-md rounded-md bg-pink3 p-6">
            <h3 className="font-bold text-xl text-center text-gray-800">Profile</h3>
            <div className="flex justify-center my-6">
              <img
                className="rounded-full h-32 w-32 border-4 border-gray-300"
                src="https://www.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
                alt="User Profile"
              />
            </div>
            <div className="text-center">
              {user.map((userInfo, index) => (
                <ul key={index} className="space-y-2 text-gray-700">
                  <li className="font-bold text-lg">Name: {userInfo.user_name}</li>
                  <li className="font-medium">CGPA: {userInfo.user_cgpa}</li>
                  <li className="font-medium">Branch: {userInfo.user_branch}</li>
                  <li className="font-medium">Batch: {userInfo.user_batch}</li>
                </ul>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="py-6 bg-pink2 mt-6 rounded-md shadow-md">
            <button
              className="w-2/3 bg-pink4 mx-auto block p-3 rounded-md text-white font-medium hover:bg-pink3 transition"
              onClick={() => handle('upcoming')}
            >
              Upoming Companies
            </button>
            <button onClick={() => handle('current')} className="w-2/3 bg-pink4 mx-auto block p-3 rounded-md text-white font-medium hover:bg-pink3 transition mt-4">
            Current Companies
            </button>
            <button onClick={() => handle('results')} className="w-2/3 bg-pink4 mx-auto block p-3 rounded-md text-white font-medium hover:bg-pink3 transition mt-4">
              Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_user;
