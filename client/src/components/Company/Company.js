import React, {useState,useEffect} from 'react';

import { useSelector,useDispatch } from 'react-redux';

import {login,logout,selectUserRole,
selectUserName,selectUserAge,selectUserGender,selectUserEmail,
selectUserNumber,selectUserEducationalInformation,
selectUserSkills,selectUserResumeLink,selectUserRolesPreferred } from "../features/userSlice"

import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import HeroImage from '../general/HeroImage';

const Company = () => {
  return (
    <div>
      <Navbar />
        <HeroImage heading="Company Dashboard" text="View Company Dashboard"/>
      <Footer />
    </div>
  )
}

export default Company