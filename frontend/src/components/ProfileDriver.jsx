import React from 'react'
import BookDetails from './BookDetails'
import AllCarDetails from './AllCarDetails'
import GetBlance from './GetBlance'

const ProfileDriver = ({ card }) => {
  return (
    <div className='ProfileDriver'>
      <div className='paymentProfilecontaner'>
        <GetBlance />
      </div>
      <div className='booked'>
        <BookDetails />
      </div>
      <div className='allCar'>
        <AllCarDetails cardetails={card} />
      </div>
    </div>
  )
}

export default ProfileDriver