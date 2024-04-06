import React, { useContext, useEffect, useState } from 'react'
import locationmap from '../assets/locationMap.png'; // with import
import { useNavigate } from 'react-router-dom';
import context from '../context/Context';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleMap from '../components/GoogleMap';
const Map = () => {
    const [filterDrvers, setFilterDrvers] = useState();
    const navigate = useNavigate();
    const auth = useContext(context);
    console.log(auth);
    const { allDriver } = auth;
    const filterFuncton = (name) => {
        console.log(name);
        setFilterDrvers(allDriver.filter(driver => driver[5] == name));
    }
    const onBookfun = (dd) => {
        console.log("Booking Sucessfull");
        auth.setBook(dd);
        if (dd) {
            navigate("/userProfile")
        }

    }
    useEffect(() => {
        setFilterDrvers(allDriver);
        //auth.setBook(driver);
    }, [])
    console.log(filterDrvers);
    return (
        <>
            <h2 className='maph2'>List All Driver :</h2>

            <div className='mapContener'>
                <div className='showmapContener' >
                    <div className='mapCatagory'>
                        <button onClick={() => filterFuncton("MICRO")}>MICRO</button>
                        <button onClick={() => filterFuncton("SUV")}>SUV</button>
                        <button onClick={() => filterFuncton("MINIVAN")}>MINIVAN</button>
                    </div>
                    {(filterDrvers) ?
                        filterDrvers.map((driver) => {
                            return (
                                <>
                                    <div className='mapsubContener' key={driver[3].toString()}>
                                        <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {driver[1].toString()}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Name : </span> {driver[2]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {driver[3]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {driver[4]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Category : </span> {driver[5]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {driver[6]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {driver[7]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Rent : </span> {driver[8].toString()}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >From : </span> {driver[9]}</h5>
                                        <h5 className="carData"><span className="carDataSpan" >Dest : </span> {driver[10]}</h5>

                                        <button onClick={() => onBookfun(driver)} type="submit">
                                            Book
                                        </button>

                                    </div>
                                </>


                            )
                        }) : <h2 >NO DRIVER FOUND</h2>
                    }
                </div>
                <div className='map'>
                    <GoogleMap />
                </div>
            </div>


        </>
    )
}

export default Map;