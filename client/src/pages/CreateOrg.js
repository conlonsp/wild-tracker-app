import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import plantVase from '../images/plant-vase.jpg'

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
    <div className="images" style={{backgroundImage: `url(${plantVase})`}}>
      <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Create an Organization</span>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label>Organization Name</label>
                  <input
                    type='text'
                    name='name'
                    value={newOrg.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <div className="padding-top--10">
                    <label>Location</label>
                  </div>
                  <input
                    type='text'
                    name='location'
                    value={newOrg.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <div className="padding-top--10">
                    <label>Mission</label>
                  </div>
                  <textarea
                    type='text'
                    name='mission'
                    value={newOrg.mission}
                    onChange={handleChange}
                  />
                </div>
                <div className="field padding-bottom--24 padding-top--24">
                  <input type="submit" name="submit" value="Continue"/>
                </div>
                {errors.map(err => {
                  return (
                    <p key={err} class='error'>{err}</p>
                  )
                })}
                <p style={{color: "rgb(84, 105, 212)", cursor: "pointer"}} onClick={() => navigate('/organizations')}>{`Back to organizations`}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrg