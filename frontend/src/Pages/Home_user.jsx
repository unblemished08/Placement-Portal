import React, { useContext } from "react";
import Home_Companies from "./Home_companies/Home_companies";
import { StoreContext } from "../Context/StoreContext";
const Home_user=()=>{
    const {UpcomingCompanies} = useContext(StoreContext);

    const user=[{
      user_name:"Angel Priya",
      user_cgpa:9,
      user_branch:"EE",
      user_batch:"2026",
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
                <div className="w-3/12 p-4 m-2 shadow-md rounded-md bg-pink3 h-1/2 sticky z-50 top-20">
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
            </div>
        </>
    )
}

export default Home_user