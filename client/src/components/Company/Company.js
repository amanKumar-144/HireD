import React, {useState,useEffect} from 'react';
import "./Company.css";
import { useSelector,useDispatch } from 'react-redux';

import {login,logout,selectUserRole,
selectUserName,selectUserAge,selectUserGender,selectUserEmail,
selectUserNumber,selectUserEducationalInformation,
selectUserSkills,selectUserResumeLink,selectUserRolesPreferred } from "../features/userSlice"

import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import HeroImage from '../general/HeroImage';

const Company = (props) => {
  const posting1 = () =>{

    console.log("Inside")
    console.log(props.jobCount);
    let title="SDE 1 Role";
    let roleType="Full Time"
    let companyName="Adobe";
    let companyUrl="www.adobe.com";
    let location="Noida";
    let description="Build good user Interface in Digital Media";
    props.postAJob(title,roleType,companyName,companyUrl,location,description);
  }
  const posting2 = () =>{
    let title="DataScience Role";
    let roleType="Part Time"
    let companyName="IBM";
    let companyUrl="www.ibm.com";
    let location="Bangalore";
    let description="Build ML Models";
    props.postAJob(title,roleType,companyName,companyUrl,location,description);
  }
  return (
    <div>
      <Navbar />
        <HeroImage heading="Company Dashboard" text="View Company Dashboard"/>

        <button className='btn btn-light' onClick={posting1}>
          Post An SDE Job
        </button>

        <button className='btn btn-light' onClick={posting2}>
          Post A DS Job
        </button>

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
                  </div>
                )
              })
            }
          </div>
        </div>


        <div className="pricing">
          <div className="card-container">
            <h1>Candidates who requested for Job</h1>
            {
              props.totalToSeekerIdAccepted.map((val,key)=>{
                return(
                  <div className='card' key={key}>
                    <h3>--Candidate Request--</h3>
                    <p className='btc'></p>
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

export default Company