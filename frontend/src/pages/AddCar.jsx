import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import context from "../context/Context";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinIcon from '@mui/icons-material/Pin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PushPinIcon from '@mui/icons-material/PushPin';
import PaidIcon from '@mui/icons-material/Paid';
import Groups2Icon from '@mui/icons-material/Groups2';
import BusinessIcon from '@mui/icons-material/Business';
const initialData = {
    owner: "",
    vehicle: "",
    category: "",
    phone_no: "",
    car_no: "",
    depert: "",
    goingto: "",
    rent: "",
    available_seat: "",
};


const AddCar = () => {
    const [car, setCar] = useState(initialData);
    const navigation = useNavigate();
    const auth = useContext(context);
    const { contract } = auth.state;
    console.log(contract);
    console.log(auth.user);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const onSubmits = async (e) => {
        e.preventDefault();
        console.log(car);
        const carData = {
            "carOwner": car.owner,
            "num_of_seat": car.available_seat,
            "name": auth.user.name,
            "vehicle": car.vehicle,
            "vehicleNo": car.car_no,
            "category": car.category,
            "licence_id": auth.user.licence_id,
            "phoneNumber": car.phone_no,
            "rent": car.rent,
            'from': car.depert.toUpperCase(),
            'dest': car.goingto.toUpperCase()
        }
        const addCarFunction = async () => {
            try {
                console.log(carData);
                //console.log(car.owner, car.available_seat, auth.user.name, car.vehicle, car.car_no, car.category, auth.user.licence_id, car.phone_no, car.rent, car.depert, car.goingto)
                const data8 = await contract.addCar(carData.carOwner, carData.num_of_seat, carData.name, carData.vehicle, carData.vehicleNo, carData.category, carData.licence_id, carData.phoneNumber, carData.rent, carData.from, carData.dest);
                //const data8 = await contract.addCar("0x6501Baf726FA584f163C68379546fE3f059EA014", "2", "111", "Tata Nano", "WB124", "medium","789654", "789456123", "20", "KOL", "KAL");
                await data8.wait();
                if (data8) {
                    
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
                    navigation('/driverProfile');
                } else {
                    throw new Error("Contract addCar function returned undefined");
                }
            } catch (error) {
                console.warn(error);
            }
        }
        addCarFunction();

    };


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="formbody">

                <form onSubmit={onSubmits}>
                    <h1>ADD CAR</h1>
                    <div className="formiconplusi">
                        <BusinessIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Owner Address"
                            type="text"
                            name="owner"
                            id="owner"
                            value={car.owner}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <Groups2Icon fontSize="large" />
                        <input
                            placeholder="Enter Your Available Seat"
                            type="text"
                            name="available_seat"
                            id="available_seat"
                            value={car.available_seat}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <DirectionsCarFilledIcon fontSize="large" />
                        <input
                            placeholder="Enter Your vehicle"
                            type="text"
                            name="vehicle"
                            id="vehicle"
                            value={car.vehicle}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <PinIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Car No"
                            type="text"
                            name="car_no"
                            id="car_no"
                            value={car.car_no}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <FilterAltOffIcon fontSize="large" />
                        <input
                            placeholder="Enter Your category"
                            type="text"
                            name="category"
                            id="category"
                            value={car.category}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <LocalPhoneIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Phone No"
                            type="text"
                            name="phone_no"
                            id="phone_no"
                            value={car.phone_no}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <PaidIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Rent"
                            type="text"
                            name="rent"
                            id="rent"
                            value={car.rent}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <LocationOnIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Depert Place"
                            type="text"
                            name="depert"
                            id="depert"
                            value={car.depert}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className="formiconplusi">
                        <PushPinIcon fontSize="large" />
                        <input
                            placeholder="Enter Your Destination"
                            type="text"
                            name="goingto"
                            id="goingto"
                            value={car.goingto}
                            onChange={inputEvent}
                        />
                    </div>



                    <input type="submit" value="Add Car" />

                </form>
            </div>
        </>
    );
};

export default AddCar;