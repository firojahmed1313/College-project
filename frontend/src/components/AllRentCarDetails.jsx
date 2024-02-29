import React from 'react'

const AllRentCarDetails = ({ carDetails }) => {
  console.log(carDetails);
  return (
    <>

      {(carDetails.length!=0) ?
        carDetails.map((data) => {

          return (
            <>
              <h2>List Of Your Booked Car : </h2>
              <div className='AllCarDetails' key={data[3].toString()}>
                <h5 className="carData"><span className="carDataSpan" >Owner :</span> {data[6][0]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Driver : </span> {data[6][1]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[6][2].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >CarId : </span> {data[6][3].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[6][4]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[6][5]}</h5>
                <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[6][6]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[6][7]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[6][8]}</h5>
                <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[6][9]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[6][10]?.toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >From : </span> {data[6][11]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[6][12]}</h5>
              </div>
            </>
          )
        })
        : <h2> NO CAR BOOKED</h2>}


    </>
  )
}

export default AllRentCarDetails