import React, { useContext, useEffect, useState } from 'react'
import locationmap from '../assets/locationMap.png'; // with import
import { useNavigate } from 'react-router-dom';
import context from '../context/Context';
import axios from 'axios';
import Cookies
    from 'js-cookie';
const Map = () => {
    const [jbook, setjBook] = useState(false);
    const [driver, setdriver] = useState(false);
    const navigate = useNavigate();
    const auth = useContext(context);
    console.log(auth);
    const { allDriver } = auth;
    const onBook = (driver) => {
        
        console.log("Booking Sucessfull");
        console.log(driver);
        //setjBook(true);
        setdriver(driver);
        //navigate("/userProfile");

    }
    useEffect(() => {
        auth.setBook(driver);
    
    
      }, [])
    return (
        <>

            <h2 className='maph2'>MD FIROJ AHMED</h2>
            <div className='mapContener'>
                <div className='showmapContener' >

                    {
                        allDriver?.map((driver) => {
                            return (

                                <div className='mapsubContener' key={driver[3].toString()}>
                                    <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {driver[2].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >CarId : </span> {driver[3].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Name : </span> {driver[4]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {driver[5]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {driver[6]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Category : </span> {driver[7]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {driver[8]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {driver[9]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Rent : </span> {driver[10].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >From : </span> {driver[11]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Dest : </span> {driver[12]}</h5>
                                    {(jbook) ? <button type="submit" onClick={onBook(driver)} className='bookedButton'>
                                        Booked
                                    </button> :
                                        <button onClick={onBook(driver)} type="submit">
                                            Book
                                        </button>
                                    }
                                </div>

                            )
                        })
                    }
                </div>
                <div className='map'>
                    <img src={locationmap} alt='map' className='mapimg' />
                </div>
            </div>


        </>
    )
}

export default Map;