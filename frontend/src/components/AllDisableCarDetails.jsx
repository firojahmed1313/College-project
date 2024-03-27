import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const AllDisableCarDetails = () => {
  const [carData, setCarData] = useState();
  const auth = useContext(context);
  console.log(auth.user)
  const burl = import.meta.env.VITE_URL;
  const enableCar=(car)=>{
    console.log("enableCar");
    console.log(car);
    alert("enableCar addCar" , car );
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${burl}/api/driver/disableCar/123456`
        const response = await axios.get(url);
        console.log(response.data.data);
        setCarData(response.data.data);
      } catch (error) {
        console.warn(error);
      }

    };
    fetchData();
  }, []);
  console.log(carData);
  return (
    <details>
      <summary >List Of Your Disabled Car : </summary>
      {
        carData?.map((car) => {
          return (
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <div className='AllCarDetails' key={car._id}>
                <h5 className="carData"><span className="carDataSpan" >Owner :</span> {(car.carOwner).substring(0, 20)}...</h5>
                <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {car.num_of_seat.toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >CarId : </span> {car.category.toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >Name : </span> {auth.user.name}</h5>
                <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {car.vehicle}</h5>
                <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {car.vehicleNo}</h5>
                <h5 className="carData"><span className="carDataSpan" >Category : </span> {car.category}</h5>
                <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {car.licence_id}</h5>
                <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {car.phoneNumber}</h5>
                <h5 className="carData"><span className="carDataSpan" >Rent : </span> {car.rent.toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >From : </span> {car.from}</h5>
                <h5 className="carData"><span className="carDataSpan" >Dest : </span> {car.dest}</h5>
              </div>
              <button onClick={()=>enableCar(car)}>Enable Car</button>
            </div>
          )
        })
      }
    </details>
  )
}

export default AllDisableCarDetails