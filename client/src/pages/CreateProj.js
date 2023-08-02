import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import leaves2 from '../images/leaves2.jpg'

function CreateProj({ orgId, orgProjects, setOrgProjects, organizations }) {
  
  const [newProj, setNewProj] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  })
  const [errors, setErrors] = useState([])
  const [isNext, setIsNext] = useState(false)

  const navigate = useNavigate()

  const organizationName = organizations.filter(org => org.id === orgId)[0].name

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
          navigate(`/organizations/${orgId}`)
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <div className='images' style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${leaves2})` }}>
    {!isNext ?
         <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
         <div className="formbg-outer">
           <div className="formbg">
             <div className="formbg-inner padding-horizontal--48">
               <span className="padding-bottom--15">Create a Project</span>
               <form>
                 <div className="field">
                   <div>
                    <label>Name</label>
                   </div>
                   <input
                     type='text'
                     name='name'
                     value={newProj.name}
                     onChange={handleChange}
                   />
                 </div>
                 <div className="field">
                   <div className="padding-top--10">
                     <label>Location</label>
                   </div>
                   <input
                     type='location'
                     name='location'
                     value={newProj.location}
                     onChange={handleChange}
                   />
                 </div>
                 <div className="field">
                   <div className="padding-top--10">
                     <label>Description</label>
                   </div>
                   <textarea
                     type='text'
                     name='description'
                     value={newProj.description}
                     onChange={handleChange}
                   />
                 </div>
                 <div className="field padding-bottom--24 padding-top--24">
                  <input type="submit" name="next" value="Next"onClick={() => setIsNext(true)}/>
                 </div>
                 {errors.map(err => {
                   return (
                     <p key={err} class='error'>{err}</p>
                   )
                 })}
               </form>
               <p style={{color: "rgb(84, 105, 212)", cursor: "pointer"}} onClick={() => navigate(`/organizations/${orgId}`)}>{`Back to ${organizationName}`}</p>
             </div>
           </div>
         </div>
       </div>
      :
      <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">What are the dates?</span>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Start Date</label>
                <input
                  type='text'
                  name='startDate'
                  value={newProj.startDate}
                  placeholder='YYYY-MM-DD'
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <div className="padding-top--10">
                  <label>End Date</label>
                </div>
                <input
                  type='text'
                  name='endDate'
                  placeholder='YYYY-MM-DD'
                  value={newProj.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className="field padding-bottom--24 padding-top--24 grid--25-75">
                <input type='button' name='back' value="<" onClick={() => setIsNext(false)}/>
                <input type="submit" name="submit" value="Continue"/>
              </div>
              {errors.map(err => {
                return (
                  <p key={err} class='error'>{err}</p>
                )
              })}
            </form>
            <p style={{color: "rgb(84, 105, 212)", cursor: "pointer"}} onClick={() => navigate(`/organizations/${orgId}`)}>{`Back to ${organizationName}`}</p>
          </div>
        </div>
      </div>
    </div>
    }
  </div>
  )
}

export default CreateProj