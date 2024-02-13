import React from 'react'
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";

const ProfileNav = () => {
    const logOut=()=>{
        
    }
    return (
        <div className="NavProfile">
            <div className="ProfileData">
                <img src={Avatar} className="profileImage" alt='avater' />
                <div className="profilename">name</div>
                <div className="profileemail">
                    email
                </div>
                <button onClick={() => editBlog} type="submit">
                    Extra
                </button>
            </div>
            <div className="ProfileLink">
                <Link to={"/"} className="Linkitem">
                    <h3>Home</h3>
                </Link>
                <div className="Linkitem" onClick={logOut}>
                    <h3>Logout</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav