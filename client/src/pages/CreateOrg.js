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
    <div class="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      <div class="formbg-outer">
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">Create an Organization</span>
            <form onSubmit={handleSubmit}>
              <div class="field">
                <label>Organization Name</label>
                <input
                  type='text'
                  name='name'
                  value={newOrg.name}
                  onChange={handleChange}
                />
              </div>
              <div class="field">
                <div class="padding-top--10">
                  <label>Location</label>
                </div>
                <input
                  type='text'
                  name='location'
                  value={newOrg.location}
                  onChange={handleChange}
                />
              </div>
              <div class="field">
                <div class="padding-top--10">
                  <label>Mission</label>
                </div>
                <textarea
                  type='text'
                  name='mission'
                  value={newOrg.mission}
                  onChange={handleChange}
                />
              </div>
              <div class="field padding-bottom--24 padding-top--24 grid--25-75">
                <input type='button' name='back' value="<"  onClick={() => navigate('/organizations')}/>
                <input type="submit" name="submit" value="Continue"/>
              </div>
              {errors.map(err => {
                return (
                  <p key={err} class='error'>{err}</p>
                )
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrg