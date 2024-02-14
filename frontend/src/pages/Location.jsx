import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// DEPERT FROM       GOING TO 
const Location = () => {
    const [depert, setDepert] = useState();
    const [goingto, setGoingto] = useState();
    const navigate = useNavigate();
    const onSubmits = async (e) => {
        
        e.preventDefault();
        console.log(depert, goingto);

        navigate('/mapDetails');
        
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
                        value={depert}
                        onChange={(e)=>setDepert(e.target.value)}
                    />
                    <input
                        placeholder="GOING TO"
                        type="text"
                        name="goingto"
                        id="goingto"
                        value={goingto}
                        onChange={(e) => setGoingto(e.target.value)}
                    />
                    <input type="submit" value="Find Car" />
                </form>
            </div>
        </>
    );
}

export default Location