import React, { useState } from 'react'

const Payment = () => {
    const [book, setBook] = useState(false);
    const [payment, setPayment] = useState(false);
    const onPayment = (e) => {
        setPayment(true);
        console.log("Payment Sucessfull");
    }
    const onBook = (e) => {
        setBook(true);
        console.log("Booking Sucessfull");
    }
    return (
        <>
            <div className='mapContener'>
                <div className='mapsubContener'>
                    <h3>Name : MD FIROJ AHMED</h3>
                    <p>Phone No : 9876543210</p>
                    <p>Car No : WB 1421 1291</p>
                    <p>Licence Id : WB12356754</p>
                    <p>Depert Place  : KOLKATA</p>
                    <p>Destination : KALYANI</p>
                    <p>Rent : 1 ETHER </p>
                    <p>Available Seat : 03</p>
                    <div className='allButton'>
                    {(book) ? <button type="submit" className='bookedButton'>
                        Booked
                    </button> :
                        <button onClick={onBook} type="submit">
                            Book
                        </button>
                    }
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

export default Payment