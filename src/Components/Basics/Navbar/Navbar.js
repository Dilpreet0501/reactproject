import React from 'react'
import { useState,useEffect,useRef } from 'react';
import "./Navbar.scss"
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick,true);
    return () => {
      document.removeEventListener('click', handleOutsideClick,true);
    };
  }, []);
  return (
    <>
    <nav className={`navbar ${isDropdownOpen ? 'dropdown-open' : ''}`}>
    <div className='logo'>
        <span className={`name ${isDropdownOpen ? 'open' : ''}`}> XivTech </span><br/>
        <span className='brand'>RPA Experts </span>
    </div>
    <ul className='nav-link'>
    <div className='drop'ref={dropdownRef}>
    <li id='show' className={`link ${isDropdownOpen ? 'link-open' : ''}`}  onMouseEnter={handleDropdownToggle} >Services
  <span className='dropdown'> <i class=" fa fa-thin fa-caret-down"></i></span> </li>
  {isDropdownOpen && (
    <div className='content'>
     
       <div className='ai' >
        <span className='head'>Complete AI + RPA Automation</span>
        <div className='des'>
       <img src='./images/rp1.jpg' alt='ai'></img>
       <caption >Build, Deploy, and Scale Bots</caption>
       </div></div>
       <div className='build' >
        <span className='head'>Build Better Apps - The Cloud Native Way</span>
        <div className='des'>
       <img src='./images/a2.jpg' alt='build'></img>
       <caption >Build Apps - Deliver new apps users love <br/>Modernize Apps - Rearchitect valuable legacy apps</caption>
       </div></div>

       <div className='cloud' >
        <span className='head'>Simplify Cloud Ops - Apply The New Rules Of Ops</span>  <div className='des'>
       <img src='./images/cl2.jpg' alt='cloud'></img>
       <caption >Kubernetes - Enterprise-ready runtime<br/>CICD</caption>
       </div></div>
       <div className='clservices' >
        <span className='head'>Cloud Services</span>
        <div className='des'>
       <img src='./images/a1.jpg' alt='ai'></img>
       <caption >Azure <br/>
                 AWS</caption></div>
       </div>
        </div>)} 
        </div>
 
    <li className={`link ${isDropdownOpen ? 'link-open' : ''}`}  >Career</li>
    <li className={`link ${isDropdownOpen ? 'link-open' : ''}`}  >About</li>
    <li className={`link ${isDropdownOpen ? 'link-open' : ''}`}  >Contact</li>
   <li className={`link ${isDropdownOpen ? 'link-open' : ''}`}><i class="fas fa-search"></i></li>
   <div className='btn'>
  <button className='talk'>Let's Talk</button>
  </div>

    </ul>
  </nav>
    
    
    </>
      
   
  )
}

export default Navbar
