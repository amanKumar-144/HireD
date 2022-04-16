import React from 'react';
import './Footer.css';
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">

            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <div>
                        <p>26/C, Hosur Rd, Electronics City Phase 1, Electronic City</p>
                        <h4>Bengaluru, Karnataka 560100</h4>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>+91 9380480882</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>aman.kumar@iiitb.ac.in</h4>
                </div>
            </div>

            <div className='right'>
                <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>Consent Management System</h4>
                    <p>
                        Job Portal site powered by blockchain technology.
                        <br /><br /><br />
                        We have 3 logins.<br/>
                        1) Job Seeker Login <br />
                        2) Company Login <br />
                        3) Admin Login <br />

                        <br /><br /><br />
                        Job Seeker needs to fill the application form to register into the app and he can view
                        job entries from various companies and apply for them. He can decide whether he wants his profile 
                        visible to all companies or only apply to some companies.
                        <br /><br /><br />
                        The company can post jobs on the portal and view job applicants who applied.
                        <br /><br /><br />
                        The Admin adds companies to the blockchain database.

                    </p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                    </div>
            </div>
        </div>

    </div>

  )
}

export default Footer