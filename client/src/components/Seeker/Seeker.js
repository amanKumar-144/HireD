import React, {useState,useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';

import {login,logout,selectUserRole,
selectUserName,selectUserAge,selectUserGender,selectUserEmail,
selectUserNumber,selectUserEducationalInformation,
selectUserSkills,selectUserResumeLink,selectUserRolesPreferred } from "../features/userSlice"
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import HeroImage from '../general/HeroImage';

const Seeker = () => {
  return (
    <div>
      <Navbar />
        <HeroImage heading="Seeker Dashboard View" text="View Seeker Dashboard"/>
      <Footer />
    </div>
  )
}

export default Seeker