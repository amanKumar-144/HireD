import React from 'react'
import "./Login.css"
import {Button} from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import {login,logout,selectUserRole,
selectUserName,selectUserAge,selectUserGender,selectUserEmail,
selectUserNumber,selectUserEducationalInformation,
selectUserSkills,selectUserResumeLink,selectUserRolesPreferred } from "../features/userSlice"
import {Link} from 'react-router-dom';

import jobVideo from "../assets/video.mp4";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

const Login = (props) => {

    const dispatch = useDispatch();

    const userRole = useSelector(selectUserRole);
    const userName = useSelector(selectUserName);
    const userAge = useSelector(selectUserAge);
    const userGender = useSelector(selectUserGender);
    const userEmail = useSelector(selectUserEmail);
    const userNumber = useSelector(selectUserNumber);
    const userEducationalInformation = useSelector(selectUserEducationalInformation);
    const userSkills = useSelector(selectUserSkills);
    const userResumeLink = useSelector(selectUserResumeLink);
    const userRolesPreferred = useSelector(selectUserRolesPreferred);

    //Register Seeker
    const handleSignIn1 = () => {
        console.log("Register Seeker Button Clicked");
        let name="Aman";
        let age="21";
        let gender="male";
        let emailId="aman.kumar@iiitb.ac.in";
        let phoneNum="9380480882";
        props.registerSeeker(name,age,gender,emailId,phoneNum);
        dispatch(login({
            userRole:"Seeker",
            userName:"Aman",
            userAge:"21",
            userGender:"Male",
            userEmail:"aman.kumar@iiitb.org",
            userNumber:"9380480882",
            userEducationalInformation:"IMTech from IIIT-Bangalore",
            userSkills:["C++","Javascript","Python"],
            userResumeLink:"https://www.linkedin.com/in/aman-kumar-012872206/",
            userRolesPreferred:["SDE-1","Member of Technical Staff","Data Scientist"]
        }))
    }
    //Login Seeker
    const handleSignIn2 = () => {
        props.loginSeeker();
    }

    //Register Company
    const handleSignIn3 = () => {
        dispatch(login({
            userRole:"Company"
        }))
        let companyName="Adobe";
        props.registerCompany(companyName);
    }

    //Login Company
    const handleSignIn4 = () => {
        props.loginCompany();
    }

    const handleSignOut = () => {
        dispatch(logout());
    }


    return (
    <div>
    <Navbar />
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={jobVideo} type='video/mp4'/>
            </video>

            <div className='content'>
                <h1>Job Portal</h1>
                <p>Blockchain Powered App</p>
                <div>
                    
                    <Link to='/seekerDashboard'>
                        <button className='btn btn-light' onClick={handleSignIn1}>
                            Register Seeker
                        </button>
                    </Link>
                    <Link to='/seekerDashboard'>
                        <button className='btn btn-light' onClick={handleSignIn2}>
                            Login Seeker
                        </button>
                    </Link>
                    <Link to='/companyDashboard'>
                        <button className='btn btn-light' onClick={handleSignIn3}>
                            Register Company
                        </button>
                    </Link>
                    <Link to='/companyDashboard'>
                        <button className='btn btn-light' onClick={handleSignIn4}>
                            Login Company
                        </button>
                    </Link>
                    

                    <Link to="/">
                        <button className='btn btn-light' onClick={handleSignOut}>
                            Logout Seeker
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    <Footer />
    </div>
    )
}

export default Login