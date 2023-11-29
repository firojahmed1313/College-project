import React from "react";
import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <>
      <div className="Navber">
        <div className="left">
          <Link to={"/"} className="">
            <h2>SMART POOL</h2>
          </Link>

        </div>
        <div className="right">
          <Link to={"/addcar"} className="navitem">
            <h3>Add Car</h3>
          </Link>
          <Link to={"/register"} className="navitem">
            <h3>Register</h3>
          </Link>
          <Link to={"/login"} className="navitem">
            <h3>Login</h3>
          </Link>
          <div className="navitem"><h3>Logout</h3></div>
        </div>
      </div>
    </>
  );
};

export default Navber;