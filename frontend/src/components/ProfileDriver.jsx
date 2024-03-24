import React from 'react'
import BookDetails from './BookDetails'
import AllCarDetails from './AllCarDetails'
import GetBlance from './GetBlance'
import AllDisableCarDetails from './AllDisableCarDetails'
import AllBookedCarDetails from './AllBookedCarDetails'

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
      <div className='allCar'>
        <AllDisableCarDetails cardetails={card} />
      </div>
      <div className='allCar'>
        <AllBookedCarDetails cardetails={card} />
      </div>
    </div>
  )
}

export default ProfileDriver