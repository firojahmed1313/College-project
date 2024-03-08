import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TagFacesIcon from '@mui/icons-material/TagFaces';
// DEPERT FROM       GOING TO 
import HomeImage from "../assets/carHome.jpg"
import HomeImageMobile from "../assets/smartpoolHome.jpeg"
import Extra from "../components/Extra";
import context from "../context/Context";
const Home = () => {
    const auth = useContext(context);
    console.log(auth);
    const onDrive = () => {

    }
    const onRide = () => {

    }
    return (
        <>
            {//<img className="homeImage" src={HomeImage} alt="Home Image"/>
            }
            <div className="homeImage" style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >
                <div className="homeData" >
                    <h3>driver :- licence_id- driver123 , password :driver && user :- phoneNo- 9830789651 , password :user</h3>
                </div>
                {(!auth.isAuth)?<div className="homeContainer" >
                    <div className="homeIcon">
                        <DirectionsCarIcon fontSize="large" style={{ margin: "10px 15px" }} />
                        <h3 style={{ margin: "10px 15px" }} >I Want To Drive</h3>
                        <Link to={"/registerdriver"} className="navitem">
                            <h3><ArrowForwardIcon /></h3>
                        </Link>
                    </div>
                    <div className="homeIcon" >
                        <TagFacesIcon fontSize="large" style={{ margin: "10px 15px" }} />
                        <h3 style={{ margin: "10px 15px" }} >I Want To Ride</h3>
                        <Link to={"/register"} className="navitem">
                            <h3><ArrowForwardIcon /></h3>
                        </Link>
                    </div>
                </div>:null}
            </div >



        </>
    );
};

export default Home;