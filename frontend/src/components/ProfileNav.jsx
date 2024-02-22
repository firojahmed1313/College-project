import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import context from '../context/Context'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";

const ProfileNav = ({ d }) => {
    console.log(d);
    const auth = useContext(context);
    const navigator= useNavigate();
    console.log(auth);
    const logOut = () => {
        Cookies.remove("tokenSmartPool");
        auth.setIsAuth(false);
        toast.success("Logout Sucessfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setTimeout(() => {
            navigator('/');
        }, "3000");
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
            <div className="NavProfile">
                <div className="ProfileData">
                    <img src={Avatar} className="profileImage" alt='avater' />
                    <div className="profilename">{auth.user.name}</div>
                    <div className="profilename">{auth.user.phone}</div>
                    <div className="profileemail">
                        {auth.user.email}
                    </div>
                    <button onClick={() => editBlog} type="submit">
                        {d}
                    </button>
                </div>
                <div className="ProfileLink">
                    <Link to={"/"} className="Linkitem">
                        <h3>Home</h3>
                    </Link>

                    {(d == "Driver") ?
                        <Link to={"/addcar"} className="Linkitem">
                            <h3>Add Car</h3>
                        </Link>
                        :
                        <Link to={"/location"} className="Linkitem">
                            <h3>Book Rides</h3>
                        </Link>

                    }
                    <div className="Linkitem" onClick={logOut}>
                        <h3>Logout</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileNav