import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {FaBars,FaTimes} from 'react-icons/fa';
import "./Navbar.css";
import {selectUserRole} from "../features/userSlice"
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);
    const userRole = useSelector(selectUserRole);

    const handleClick=()=>setClick(!click);
    const changeColor=async()=>{
        if(window.screenY>=100)setColor(true);
        else setColor(false);
    }
    useEffect(async()=>{
        changeColor();
    },[]);

    return (
        

      <div className={color ? 'header header-bg':'header'}>
          <Link to="/">
              <h1>Job-Portal</h1>
          </Link>

          <ul className={click ? 'nav-menu active':'nav-menu'}>
              <li>
                  <Link to="/">Home</Link>
              </li>
          </ul>

          <div className="clickSection" onClick={handleClick}>
              {click ? (
                  <FaTimes size={20} style={{color:'white'}} />
              ) : (
                <FaBars size={20} style={{color:'white'}} />
              )}
          </div>
      </div>
    )
}

export default Navbar