import React, { useContext, useDebugValue } from 'react'
import { StoreContext } from '../Context/StoreContext'
const Company = (prop) => {
  const { userData } = useContext(StoreContext);
  return (
    <div>
      <div>
        <h2>Offer Details</h2>
        <img src={prop.companyImage} alt="Company Logo" />
      </div>
      <div>
        <p>Company Name : {prop.name}</p>
        <p>CTC : {prop.ctc}</p>
        <p>Job ID : {prop.job_id}</p>
        <p>Eligible Gender : {prop.gender}</p>
        <p>Eligible Batch : {prop.batch}</p>
        <p>Minimum CGPA : {prop.cgpa}</p>
        <p>No. of BackLog Allowed : {prop.backlogs}</p>
        <p>Location : {prop.location}</p>
        <p>Job Profile : {prop.job_profile}</p>
        <p>Last Date : {prop.last_date}</p>

        <p>Interview Rounds</p>
        <p>{prop.group_disscussion ? "Group Disscussion" : "No Group Disscussion"}</p>
        <p>Tech Rounds : {prop.tech_rounds}</p>
        <p>HR Rounds : {prop.hr_rounds}</p>
      </div>
    </div>
  )
}

export default Company
