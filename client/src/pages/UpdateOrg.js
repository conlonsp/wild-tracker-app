import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import vine from '../images/vine.jpg'

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
    <div className="box-root flex-flex flex-direction--column container images" style={{minHeight: '100vh', flexGrow: '1', backgroundImage: `url(${vine})`}}>
      {!isSuccessful ?
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
                  value={updated.name}
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
                  value={updated.location}
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
                  value={updated.mission}
                  onChange={handleChange}
                />
              </div>
              <div className="field padding-bottom--24 padding-top--24 grid--25-75">
                <input type='button' name='back' value="<"  onClick={() => navigate(`/organizations/${params.id}`)}/>
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
      :
      <div className="field text-blurb">
        <h1 >Update Complete</h1>
        <input type='button' name='back' value={`Back to ${organization.name}`} onClick={() => navigate(`/organizations/${params.id}`)} style={{opacity: 'none'}}/>
      </div>
      }
    </div>
  )
}

export default UpdateOrg