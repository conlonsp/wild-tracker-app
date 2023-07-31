import React, { useState } from "react";
import monsterra from '../images/monsterra.jpg'

function About() {



  return (
    <div className='container images' style={{backgroundImage: `url(${monsterra})`}}>
      <div style={{width: '95%'}}>
        <div style={{color: 'black'}}>
          <h1 style={{fontSize: "60px"}}>Welcome!</h1>
          <h3 style={{fontSize: "15px"}}>We're happy you're here.</h3>
        </div>
        <h5 class='text-blurb--white'>The Wildlife Conservation Tracker application serves as a platform for users to engage with wildlife and conservation organizations, explore ongoing projects, make donations, and track their impact. It promotes awareness, involvement, and support towards wildlife conservation efforts while providing users with a personalized experience and the ability to contribute to specific projects and organizations they are passionate about.</h5>
      </div>
    </div>
  )
}

export default About

// style={{backgroundImage: "-webkit-linear-gradient(65deg, #1a75ff 50%, #b3d1ff 50%)", backgroundSize: "100% 100%"}}

