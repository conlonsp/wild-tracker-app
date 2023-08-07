import React from "react";
import monsterra from '../images/monsterra.jpg'

function About() {



  return (
    // <div className='container images' style={{backgroundImage: `url(${monsterra})`}}>
    //   <div style={{width: '95%'}}>
    //     <div style={{color: 'black'}}>
    //       <h1 style={{fontSize: "60px"}}>Welcome!</h1>
    //       <h3 style={{fontSize: "15px"}}>We're happy you're here.</h3>
    //     </div>
    //     <h5 className='text-blurb--white'>The Wildlife Conservation Tracker application serves as a platform for users to engage with wildlife and conservation organizations, explore ongoing projects, make donations, and track their impact. It promotes awareness, involvement, and support towards wildlife conservation efforts while providing users with a personalized experience and the ability to contribute to specific projects and organizations they are passionate about.</h5>
    //   </div>
    // </div>
    <div className='images' style={{backgroundImage: `url(${monsterra})`}}>
      <div className='container--left' style={{marginLeft: '3%', marginTop: '-10%'}}>
        <div style={{color: 'black'}}>
          <h1 style={{fontSize: "70px", marginBottom: '0'}}>Welcome!</h1>
          <h3 style={{fontSize: "20px", marginTop: '0'}}>We're happy you're here.</h3>
        </div>
        <h5 style={{color: 'black', fontSize: '20px', lineHeight: '30px'}}>The Wild Tracker serves as a platform for users to engage with wildlife and conservation organizations, explore ongoing projects, make donations, and track their impact. It promotes awareness, involvement, and support towards wildlife conservation efforts while providing users with a personalized experience and the ability to contribute to specific projects and organizations they are passionate about.</h5>
      </div>
    </div>
  )
}

export default About



