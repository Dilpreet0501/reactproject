import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    <div className='logo'>
        <span className='name'> XivTech </span><br/>
        <span className='brand'>RPA Experts </span>
    </div>
    <ul className='nav-link'>
    <div className='drop'>
    <li className='link'>Services
    <i class="fa fa-sharp fa-light fa-caret-down"></i></li>
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
        </div> 
    </div>
 
    <li className='link'>Career</li>
    <li className='link'>About</li>
    <li className='link'>Contact</li>
    <i class="fas fa-solid fa-magnifying-glass" ></i>



    </ul>
  </nav>
    
    
    </>
      
   
  )
}

export default Navbar
