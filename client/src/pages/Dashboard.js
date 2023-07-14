import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context'
// import * as Plot from "@observablehq/plot";
// import PlotFigure from '../components/PlotFigure';

function Dashboard() {
  const { user, setUser } = useContext(UserContext)

  const [donations, setDonations] = useState([])

  useEffect(() => {
    fetch('/donations')
    .then(r => r.json())
    .then(donations => setDonations(donations))
  }, [])
  
  

  return (
    <div>
      {user ?
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user.username}!</p>
          <ul>
            {donations.map(d => {
              return (
                <li key={d.id}>{d.amount} || {d.organization_name}</li>
              )
            })}
          </ul>
          {/* <PlotFigure
            options={{
              marks: [
                Plot.barY(penguins, {x: "organization_name", y: "amount", fill: "organization_name"}),
                Plot.frame()
              ]
            }}
          /> */}
        </div>
      :
        <div>
          <h1>Dashboard</h1>
          <p>Please log in to access app features!</p>
        </div>
      }
      
    </div>
  )
}

export default Dashboard