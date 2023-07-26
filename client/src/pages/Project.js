import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    <div class='container text-blurb'>
        <h3>{project.name}</h3>
        <h6>{project.location}</h6>
        <div class='text-blurb--white'>
          <h5>{project.description}</h5>
          <h6>Start date: {project.start_date}</h6>
          <h6>End date: {project.end_date}</h6>
        </div>
        <p class='form-button' onClick={() => navigate(`/organizations/${orgId}`)}>back</p>
    </div>
  )
}

export default Project