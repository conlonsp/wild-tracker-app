import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateOrg({ organizations, setOrganizations }) {

  const navigate = useNavigate()

  const [newOrg, setNewOrg] = useState({
    name: '',
    location: '',
    mission: '',
  })
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    setNewOrg({
      ...newOrg,
      [e.target.name]: e.target.value
    })
  }

  console.log(organizations)

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/organizations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: newOrg.name,
        location: newOrg.location,
        mission: newOrg.mission
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(org => {
          setOrganizations([...organizations, org])
          setNewOrg({
            name: '',
            location: '',
            mission: '',
          })
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <h1>Create an Organization here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder="Organization Name"
          value={newOrg.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          placeholder="Based out of..."
          value={newOrg.location}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='mission'
          placeholder='Our mission is...'
          value={newOrg.mission}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
      <button onClick={() => navigate('/organizations')}>Close</button>
    </div>
  )
}

export default CreateOrg