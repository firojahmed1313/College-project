import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [name,setname] =useState("");
  const [password,setpassword] =useState("");

  const onSubmit=async (e)=>{
    e.preventDefault();
    console.log( name , password);
    
  }
  return (
    <>
      <div className="formbody">
        <form onSubmit={onSubmit} >
          <h1>LOGIN</h1>

          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;