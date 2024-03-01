import React from "react";
import { Link } from "react-router-dom";
const Navber = ({ d }) => {
  return (
    <>
      <div className="Navber">
        <div className="left">
          <Link to={"/"} className="">
            <h2>SMART POOL</h2>
          </Link>

        </div>
        <div className="right">
          {(d == "driver") && <Link to={"/driverProfile"} className="navitem"><h3>Driver Profile</h3></Link>}
          {(d == "user") && <Link to={"/userProfile"} className="navitem"><h3>User Profile</h3></Link>}

          {/*<Link to={"/register"} className="navitem">
            <h3>Register</h3>
          </Link>
          <Link to={"/login"} className="navitem">
            <h3>Login</h3>
          </Link>
          <div className="navitem"><h3>Logout</h3></div>*/}
        </div>
      </div>
    </>
  );
};

export default Navber;