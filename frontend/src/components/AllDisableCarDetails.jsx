import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const AllDisableCarDetails = () => {
  const [carData, setCarData] = useState();
  const auth = useContext(context);
  const { contract } = auth.state;
  console.log(contract);
  console.log(auth.user)
  const burl = import.meta.env.VITE_URL;
  const enableCar = (car) => {
    console.log("enableCar");
    console.log(car);
    const carData = {
      "carOwner": car.carOwner,
      "num_of_seat": car.num_of_seat,
      "name": auth.user.name,
      "vehicle": car.vehicle,
      "vehicleNo": car.vehicleNo,
      "category": car.category,
      "licence_id": auth.user.licence_id,
      "phoneNumber": car.phoneNumber,
      "rent": car.rent,
      'from': car.from.toUpperCase(),
      'dest': car.dest.toUpperCase()
    }
    console.log(carData);
    const addCarFunction = async () => {
      try {
        console.log(carData);
        //console.log(car.owner, car.available_seat, auth.user.name, car.vehicle, car.car_no, car.category, auth.user.licence_id, car.phone_no, car.rent, car.depert, car.goingto)
        const data8 = await contract.addCar(carData.carOwner, carData.num_of_seat, carData.name, carData.vehicle, carData.vehicleNo, carData.category, carData.licence_id, carData.phoneNumber, carData.rent, carData.from, carData.dest);
        //const data8 = await contract.addCar("0x6501Baf726FA584f163C68379546fE3f059EA014", "2", "111", "Tata Nano", "WB124", "medium","789654", "789456123", "20", "KOL", "KAL");
        await data8.wait();
        if (data8) {
          const burl = import.meta.env.VITE_URL;
          try {
            const res = await axios.delete(`${burl}/api/driver/disableCar/${car._id}`);
          } catch (error) {
            console.warn(error);
          }
          console.log(data8);
          toast.success("Car Added", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigation('/');
        } else {
          throw new Error("Contract addCar function returned undefined");
        }
      } catch (error) {
        console.warn(error);
      }
    }
    addCarFunction();
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${burl}/api/driver/disableCar/${auth.user.licence_id}`
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

    (carData) ?
      <details>
        <summary >List Of Your Disabled Car : </summary>

        {carData.map((car) => {
          return (
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }} key={car._id}>
              <div className='AllCarDetails ' >
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
              <button onClick={() => enableCar(car)}>Enable Car</button>
            </div>
          )
        })}

      </details> : <h2>No DisableCar Found</h2>


  )
}

export default AllDisableCarDetails