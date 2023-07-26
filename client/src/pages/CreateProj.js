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
  const [isNext, setIsNext] = useState(false)
  const [submitted, setSubmitted] = useState(true)

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
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    {!isNext ?
         <div class="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
         <div class="formbg-outer">
           <div class="formbg">
             <div class="formbg-inner padding-horizontal--48">
               <span class="padding-bottom--15">Create a Project</span>
               <form>
                 <div class="field">
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
                 <div class="field">
                   <div class="padding-top--10">
                     <label>Location</label>
                   </div>
                   <input
                     type='location'
                     name='location'
                     value={newProj.location}
                     onChange={handleChange}
                   />
                 </div>
                 <div class="field">
                   <div class="padding-top--10">
                     <label>Description</label>
                   </div>
                   <textarea
                     type='text'
                     name='description'
                     value={newProj.description}
                     onChange={handleChange}
                   />
                 </div>
                 <div class="field padding-bottom--24 padding-top--24">
                  <input type="submit" name="next" value="Next"onClick={() => setIsNext(true)}/>
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
      :
      <div class="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      <div class="formbg-outer">
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">What are the dates?</span>
            <form onSubmit={handleSubmit}>
              <div class="field">
                <label>Start Date</label>
                <input
                  type='text'
                  name='startDate'
                  value={newProj.startDate}
                  placeholder='YYYY-MM-DD'
                  onChange={handleChange}
                />
              </div>
              <div class="field">
                <div class="padding-top--10">
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
              <div class="field padding-bottom--24 padding-top--24 grid--25-75">
                <input type='button' name='back' value="<" onClick={() => setIsNext(false)}/>
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
      {submitted ? <p class='form-button'>{`Back to organization`}</p> : null}
    </div>
    
    }
    
  </div>
    // <div class='container'>
    //   <h1>Project Create Form</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>Name: </label>
    //     <input
    //       type='text'
    //       name='name'
    //       placeholder="i.e. Earth Savers"
    //       value={newProj.name}
    //       onChange={handleChange}
    //     />
    //     <label>Location: </label>
    //     <input
    //       type='text'
    //       name='location'
    //       placeholder="i.e. New York City, New York, USA"
    //       value={newProj.location}
    //       onChange={handleChange}
    //     />
    //     <label>Start Date: </label>
    //     <input
    //       type='text'
    //       name='startDate'
    //       placeholder='i.e. YYYY-MM-DD'
    //       value={newProj.startDate}
    //       onChange={handleChange}
    //     />
    //     <label>End Date: </label>
    //     <input
    //       type='text'
    //       name='endDate'
    //       placeholder='i.e. YYYY-MM-DD'
    //       value={newProj.endDate}
    //       onChange={handleChange}
    //     />
    //     <label>Description: </label>
    //     <textarea
    //       type='text'
    //       name='description'
    //       placeholder='between 50 - 250 characters'
    //       value={newProj.description}
    //       onChange={handleChange}
    //     />
    //     <button type='submit'>Submit</button>
    //   </form>
    //   {errors.map(err => {
    //     return (
    //       <p key={err} style={{color: 'red'}}>{err}</p>
    //     )
    //   })}
    //   <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    // </div>
  )
}

export default CreateProj