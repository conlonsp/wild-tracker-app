import React, { useState } from "react";

function DonationForm({ orgId, donations, setDonations }) {

  const [donation, setDonation] = useState({
    amount: '',
    note: '',
  })

  function handleChange(e) {
    setDonation({
      ...donation,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/donations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount: donation.amount,
        note: donation.note,
        organization_id: orgId
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(donation => {
          setDonation({
            amount: '',
            note: '',
          })
          setDonations([...donations, donation])
        })
      }
    })
  }

  return (
    <div>
      <div class="formbg-outer" style={{maxWidth: '1000px'}}>
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">Donate</span>
            <form onSubmit={handleSubmit}>
              <div class="field">
                <div>
                  <label>Amount</label>
                </div>
                <input
                  type='text'
                  name='amount'
                  value={donation.amount}
                  onChange={handleChange}
                />
              </div>
              <div class="field">
                <div class="padding-top--10">
                  <label>Note</label>
                </div>
                <input
                  type='text'
                  name='note'
                  value={donation.note}
                  onChange={handleChange}
                />
              </div>
              <div class="field padding-bottom--24 padding-top--24">
                <input type="submit" name="submit" value="Donate"/>
              </div>
              {/* {errors.map(err => {
                return (
                  <p key={err} class='error'>{err}</p>
                )
              })} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationForm

    // <div>
    //   <h1>Donation Form</h1>
    //   <p>{orgId}</p>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type='number'
    //       name='amount'
    //       placeholder='Amount'
    //       value={donation.amount}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='text'
    //       name='note'
    //       placeholder='Note'
    //       value={donation.note}
    //       onChange={handleChange}
    //     />
    //     <button type='submit'>Submit</button>
    //   </form>
    // </div>