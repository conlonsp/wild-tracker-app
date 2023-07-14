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
    <div>
      <h1>{project.name}</h1>
      <h2>{project.location}</h2>
      <h4>{project.description}</h4>
      <h5>Start date: {project.start_date}</h5>
      <h5>End date: {project.end_date}</h5>
      <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    </div>
  )
}

export default Project