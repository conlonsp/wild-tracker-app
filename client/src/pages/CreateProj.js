import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProj({ orgId, orgProjects, setOrgProjects }) {
  
  const [newProj, setNewProj] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  })
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  function handleChange(e) {
    setNewProj({
      ...newProj,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/organizations/${orgId}/projects`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: newProj.name,
        location: newProj.location,
        start_date: newProj.startDate,
        end_date: newProj.endDate,
        description: newProj.description
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(project => {
          setOrgProjects([...orgProjects, project])
          setNewProj({
            name: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
          })
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <div>
      <h1>Project Create Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          placeholder="i.e. Earth Savers"
          value={newProj.name}
          onChange={handleChange}
        />
        <label>Location: </label>
        <input
          type='text'
          name='location'
          placeholder="i.e. New York City, New York, USA"
          value={newProj.location}
          onChange={handleChange}
        />
        <label>Start Date: </label>
        <input
          type='text'
          name='startDate'
          placeholder='i.e. YYYY-MM-DD'
          value={newProj.startDate}
          onChange={handleChange}
        />
        <label>End Date: </label>
        <input
          type='text'
          name='endDate'
          placeholder='i.e. YYYY-MM-DD'
          value={newProj.endDate}
          onChange={handleChange}
        />
        <label>Description: </label>
        <textarea
          type='text'
          name='description'
          placeholder='between 50 - 250 characters'
          value={newProj.description}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
      <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    </div>
  )
}

export default CreateProj