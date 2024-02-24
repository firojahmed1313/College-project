import React, { useState } from 'react'

const ProfileUser = (props) => {
  const [payment, setPayment] = useState(false);
  const onPayment = (e) => {
    setPayment(true);
    console.log("Payment Sucessfull");
  }
  //console.log(props.user);
  return (
    <>
      <div className='paymentProfilecontaner'>
        <div className='paymentProfilesubContaner'>
          <h3>Name : MD FIROJ AHMED</h3>
          <p>Phone No : 9876543210</p>
          <p>Car No : WB 1421 1291</p>
          <p>Licence Id : WB12356754</p>
          <p>Depert Place  : KOLKATA</p>
          <p>Destination : KALYANI</p>
          <p>Rent : 1 ETHER </p>
          <p>Available Seat : 03</p>
          <div className='allButton'>
            {(payment) ? <button type="submit" className='bookedButton'>
              Payment Sucessfull
            </button> :
              <button onClick={onPayment} type="submit">
                Payment
              </button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileUser