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
      <h3>{project.name}</h3>
      <div className='container--left'>
        <h6>{project.location}</h6>
        <div className='text-blurb--white'>
          <h5>{project.description}</h5>
          <h6>Start date: {project.start_date}</h6>
          <h6>End date: {project.end_date}</h6>
        </div>
        <p className='form-button' onClick={() => navigate(`/organizations/${orgId}`)}>back</p>
      </div>
    </div>
  )
}

export default Project