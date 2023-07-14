import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateOrg({ organization, onUpdate }) {

  const {id, name, location, mission} = organization
  
  const [updated, setUpdated] = useState({
    name: name,
    location: location,
    mission: mission
  })
  const [errors, setErrors] = useState([])
  const [isSuccessful, setIsSuccessful] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  function handleChange(e) {
    setUpdated({
      ...updated,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updatedOrg = {
      name: updated.name,
      location: updated.location,
      mission: updated.mission
    }
    fetch(`/organizations/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedOrg)
    }).then(r => {
      if(r.ok) {
        r.json().then(org => {
          onUpdate(org)
          setIsSuccessful(true)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }
  
  return (
    <div>
      {!isSuccessful ?
        <div>
          <h1>Update an Organization!</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              value={updated.name}
              onChange={handleChange}
            />
            <input
              type='text'
              name='location'
              value={updated.location}
              onChange={handleChange}
            />
            <textarea
              type='text'
              name='mission'
              value={updated.mission}
              onChange={handleChange}
            />
            <button type='submit'>Submit</button>
          </form>
          {errors.map(err => {
            return (
              <p key={err} style={{color: 'red'}}>{err}</p>
            )
          })}
        </div>
      :
        <h1>Submit Successful!</h1>
      }
      <button onClick={() => navigate(`/organizations/${params.id}`)}>Close</button>
    </div>
  )
}

export default UpdateOrg