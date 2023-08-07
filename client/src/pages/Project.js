import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import leaves2 from '../images/leaves2.jpg'

function Project({ orgId }) {
  const [project, setProject] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/projects/${params.id}`)
    .then(r => r.json())
    .then(proj => setProject(proj))
  }, [])

  return (
    <div className='images' style={{backgroundImage: `url(${leaves2})`, color: "black"}}>
      <div className='container--left' style={{color: 'black', top: '15%', fontSize: '50px'}}>
        <h3 style={{marginTop: '45%', marginBottom: '0', width: '200%'}}>{project.name}</h3>
        <h6 style={{marginTop: '0'}}>{project.location}</h6>
      </div>
      <div className='container--left'>
        <div style={{width: '100%', padding: '5%'}}>
          <h3>{project.description}</h3>
          <h4>Start date: {project.start_date}</h4>
          <h4>End date: {project.end_date}</h4>
        </div>
        <p className='form-button' onClick={() => navigate(`/organizations/${orgId}`)}>back</p>
      </div>
    </div>
  )
}

export default Project