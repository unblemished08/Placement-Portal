import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import UpComing_Companies from "./Home_companies/upcoming_companies";
import Current_Companies from "./Home_companies/current_companies";
const Home_user=()=>{
    const {UpcomingCompanies} = useContext(StoreContext);
    const {currCompaniesData}= useContext(StoreContext)
    const user=[{
      user_name:"Angel Priya",
      user_cgpa:9,
      user_branch:"EE",
      user_batch:"2026",
    },
    ] 

    const handle=(value)=>{

    }
    
    return(
        <>
            <div className="flex">
                <div className="w-9/12 p-4 m-2 shadow-md bg-pink2 rounded-md my-6">
                    <h1 className="font-bold text-3xl my-12">
                        Upcoming Companies
                    </h1>
                        
                        <div className="w-full flex flex-wrap gap-4 font-bold">
                            {
                            UpcomingCompanies.map((UpcomingCompanies,index)=>(
                                <UpComing_Companies 
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

                        <h1 className="font-bold text-3xl my-12">
                            Current Companies 
                          </h1>
                        <div className="w-full flex">
                          
                          <div className="w-full flex flex-wrap gap-4 font-bold">
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
                        </div>

                        <h1 className="font-bold text-3xl my-12">
                            Result Declared 
                          </h1>
                        <div className="w-full flex">
                       
                        </div>

                    
                </div>
                <div className="w-3/12 py-4 m-2 h-full sticky z-50 top-20">
                  <div className="w-full shadow-md rounded-md bg-pink3 h-1/2 ">
                  <div className="flex justify-center">
                    <h3 className="font-bold"> Profile</h3>
                  </div>
                  <div className="flex justify-center h-52 my-4">
                    <img src="https://www.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg" alt="" />
                  </div>
                  <div className="text-center">
                        {user.map((userInfo,index)=>(
                          <ul key={index} className="space-y-2">
                            <li className="font-bold text-lg">Name: {userInfo.user_name}</li>
                            <li className="font-semibold">Cgpa: {userInfo.user_cgpa}</li>
                            <li className="font-semibold">Branch: {userInfo.user_branch} </li>
                            <li className="font-semibold">Batch: {userInfo.user_batch}</li>
                          </ul>
                        ))}
                  </div>
                  </div>
                  <div className="py-4 bg-pink2 my-6 rounded-md shadow-md">
                    <button className="w-2/3 bg-pink4 mx-16 p-4 rounded-md my-3" onClick={(Upcoming)=>handle}>
                      Current Companies
                    </button>
                    <button className="w-2/3 bg-pink4 mx-16 p-4 rounded-md my-3">
                      Upcoming Companies
                    </button>
                    <button className="w-2/3 bg-pink4 mx-16 p-4 rounded-md my-3">
                      Results
                    </button>
                  </div>
                </div>
                
            </div>
        </>
    )
}

export default Home_user