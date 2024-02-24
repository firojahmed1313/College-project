import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import context from "../context/Context";
// DEPERT FROM       GOING TO 
const Location = () => {
    const auth = useContext(context);
    const navigate = useNavigate();
    const onSubmits = async (e) => {
        
        e.preventDefault();
        console.log(auth.depert, auth.goingto);

        navigate('/mapDetails' );
        
    }
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
                <form onSubmit={onSubmits} >
                    <h1>Choose Destination</h1>

                    <input
                        placeholder="DEPERT FROM"
                        type="text"
                        name="depert"
                        id="depert"
                        value={auth.depert}
                        onChange={(e)=>auth.setDepert(e.target.value)}
                    />
                    <input
                        placeholder="GOING TO"
                        type="text"
                        name="goingto"
                        id="goingto"
                        value={auth.goingto}
                        onChange={(e) => auth.setGoingto(e.target.value)}
                    />
                    <input type="submit" value="Find Car" />
                </form>
            </div>
        </>
    );
}

export default Location