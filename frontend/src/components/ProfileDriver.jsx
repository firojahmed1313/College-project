import React from 'react'
import BookDetails from './BookDetails'
import AllCarDetails from './AllCarDetails'

const ProfileDriver = () => {
  return (
    <div className='ProfileDriver'>
      <div className='booked'>
        <BookDetails />
      </div>
      <div className='allCar'>
        <AllCarDetails />
      </div>
    </div>
  )
}

export default ProfileDriver