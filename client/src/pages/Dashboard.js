import React, { useContext } from 'react'
import { UserContext } from '../Context'
import Chart from '../components/Chart'
import fernSpine from '../images/fern-spine.jpg'

function Dashboard({ donations }) {
  const { user } = useContext(UserContext)

  let donationNotes = donations.map(d => {
    if(d.note === '') {
      return null
    } else {
      return d.note
    }
  })

  let filterNotes = donationNotes.filter(d => d !== null)

  let notes = filterNotes.slice(-3)

  let noteList = notes.map(n => <p>{n}</p>)

  return (
    <div className="images" style={{backgroundImage: `url(${fernSpine})`}}>
      <div>
        <h1  style={{color: 'black', marginTop: '150px', marginBottom: '0', fontSize: '70px', alignItems: 'center'}}>Dashboard</h1>
        {user ?
          <div>
            <div className="user-info">
              <img src={user.avatar_url} alt='user-img' className="user-img" />
              <p className="welcome-tag">Welcome, {user.username}!</p>
              <h3 style={{ color: 'black', position: 'absolute', top: '-60px', left: '5%', right: '80%' }}>"{user.bio}"</h3>
            </div>
            {donations.length > 0 ?
              <div>
                <div className='container--chart' >
                  <Chart donations={donations} />
                </div>
                <div className='user-info'>
                  <h3 className='donation-notes'>Last 3 Donation Notes:</h3>
                  <p className='donation-item'>{noteList}</p>
                </div>
              </div>
            :
            <div>
              <p className='text-blurb--white' style={{marginTop: '5%'}}>Start donating to view progress!</p>
              <div className='user-info' style={{marginTop: '-140px'}}>
                <h3 className='donation-notes'>Last 3 Donation Notes:</h3>
                <p className='donation-item' style={{paddingTop: '20px'}}>Add notes to your donations to view!</p>
              </div>
            </div>
            }
          </div>
        :
          <div>
            <p className='text-blurb--white'><em>Log in or Sign up to access Dashboard features!</em></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard