import React from 'react'

import "./Ai.scss"
const Ai = () => {
  
  return (
    <>
    <div  className='colab' >
    <h2>Let's Collaborate</h2> 
   
    <div  className='what' >
    <div className='caption' >
    <h1>AI + RPA is what we do</h1>
    <p className='pr'>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
    <span className='msg'>AI + RPA Automation <i class="fas fa-arrow-right"></i></span>
    </div><div className='imges' style={{  backgroundImage:
      'url("./images/rp1.jpg")'}}></div>
    </div> 

    <div  className='choices'>
    <div className='caption' >
    <h1>Make Bolder Choices</h1><br/>
    <p className='pr'>Digital focused strategies to realize market-changing ideas</p><br/>
    <span className='msg'>Build Better Apps  <i class="fas fa-arrow-right"></i></span>
    </div>
    <div className='imges' style={{  backgroundImage:
      'url("./images/p1.png")'}}></div>
    </div>

    <div  className='speed'>
    <div className='caption' >
    <h1>Innovate with Speed</h1><br/>
    <p className='pr'>Create higher quality software, deliver on customer expectations and business goals</p><br/>
    <span className='msg'>DevOps  <i class="fas fa-arrow-right"></i></span>
    </div>
    <div className='imges' style={{  backgroundImage:
      'url("./images/p2.jpg")'}}></div>
    </div>

    <div className='cloud'>
    <div className='caption' >
    <h1>Embrace Cloud</h1><br/>
    <p className='pr'>With Cloud-First accelerate innovation and optimize performance</p><br/>
    <span className='msg'>Cloud Services  <i class="fas fa-arrow-right"></i></span>
    </div>
    <div className='imges' style={{  backgroundImage:
      'url("./images/p3.jpg")'}}></div>
    </div>

   <div className='contact'>
    <button className='btnn'>Get in touch</button>
   </div>

    </div>
<hr></hr>
    </>
  )
}

export default Ai
