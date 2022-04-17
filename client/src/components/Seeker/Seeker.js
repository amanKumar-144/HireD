import React, {useState,useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';

import {login,logout,selectUserRole,
selectUserName,selectUserAge,selectUserGender,selectUserEmail,
selectUserNumber,selectUserEducationalInformation,
selectUserSkills,selectUserResumeLink,selectUserRolesPreferred } from "../features/userSlice"
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import HeroImage from '../general/HeroImage';

const Seeker = (props) => {

  return (
    <div>
      <Navbar />
        <HeroImage heading="Seeker Dashboard View" text="View Seeker Dashboard"/>
        <div className="pricing">
          <div className="card-container">
            <h1>All Jobs Posted by Company</h1>
            {
              props.jobDetailsMap.map((jobDetails,key)=>{
                return(
                  <div className='card' key={key}>
                    <h3>--Job Description--</h3>
                    <p className='btc'>JobId : {jobDetails.jobId}</p>
                    <p className='btc'>Title : {jobDetails.title}</p>
                    <p className='btc'>RoleType : {jobDetails.roleType}</p>
                    <p className='btc'>CompanyName : {jobDetails.companyName}</p>
                    <p className='btc'>Company Url : {jobDetails.companyUrl}</p>
                    <p className='btc'>Location : {jobDetails.location}</p>
                    <p className='btc'>Description : {jobDetails.description}</p>

                    <button className='btn' onClick={(event)=>{
                        props.jobSeekerMap.map((jobSeeker,key)=>{
                          console.log(jobSeeker.seekerAddress);
                          if(jobSeeker.seekerAddress==props.account)
                          {
                            console.log("Function Called")
                            props.applyJobFromCandidate(jobDetails.jobId,jobSeeker.seekerId);
                          }
                        })
                    }}>
                      Apply For Job
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Seeker