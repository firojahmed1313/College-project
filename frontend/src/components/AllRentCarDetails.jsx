import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const AllRentCarDetails = ({ carDetails }) => {
  console.log(carDetails);
  const [userBookedCar, setUserBookedCar] = useState("")
  const auth = useContext(context);
  console.log(auth);
  const { contract } = auth.state;
  useEffect(() => {
    const getUserRentCar = async () => {
      try {
        console.log(auth.user.phone);
        const data2 = await contract.getAvailableUser(auth.user.phone);
        console.log(data2);
        setUserBookedCar(data2)

      } catch (error) {
        console.warn(error)
      }
    }

    getUserRentCar();
  }, [])
  console.log(userBookedCar);
  return (
    <>
      {(userBookedCar.length != 0) ?
        <>
          <details>
            <summary>List Of Your Booked Car : </summary>
            {userBookedCar.map((data) => {
              return (
                <div className='AllCarDetails' key={data[5][3].toString()}>
                  <h5 className="carData"><span className="carDataSpan" >Owner :</span> {data[5][0].substring(0, 20)}...</h5>
                  <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[5][1].toString()}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[5][2]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[5][3]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[5][4]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[5][5]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[5][6]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[5][7]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[5][8]?.toString()}</h5>
                  <h5 className="carData"><span className="carDataSpan" >From : </span> {data[5][9]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[5][10]}</h5>
                </div>

              )

            })}
          </details>
        </>
        : <h2> NO CAR BOOKED</h2>}


    </>
  )
}

export default AllRentCarDetails