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
    <div class="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      {!isSuccessful ?
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
                  value={updated.name}
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
                  value={updated.location}
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
                  value={updated.mission}
                  onChange={handleChange}
                />
              </div>
              <div class="field padding-bottom--24 padding-top--24 grid--25-75">
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
      <div class="field text-blurb">
        <h1 >Update Complete</h1>
        <input type='button' name='back' value={`Back to ${organization.name}`} onClick={() => navigate(`/organizations/${params.id}`)} style={{opacity: 'none'}}/>
      </div>
      }
    </div>
    // <div className='container'>
    //   {!isSuccessful ?
    //     <div>
    //       <h1>Update an Organization!</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type='text'
    //           name='name'
    //           value={updated.name}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type='text'
    //           name='location'
    //           value={updated.location}
    //           onChange={handleChange}
    //         />
    //         <textarea
    //           type='text'
    //           name='mission'
    //           value={updated.mission}
    //           onChange={handleChange}
    //         />
    //         <button type='submit'>Submit</button>
    //       </form>
    //       {errors.map(err => {
    //         return (
    //           <p key={err} style={{color: 'red'}}>{err}</p>
    //         )
    //       })}
    //     </div>
    //   :
    //     <h1>Submit Successful!</h1>
    //   }
    //   <button onClick={() => navigate(`/organizations/${params.id}`)}>Close</button>
    // </div>
  )
}

export default UpdateOrg