import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navber from "./components/Navber";
import AddCar from "./pages/AddCar";
import MapDetails from "./pages/Map";
import Payment from "./pages/Payment";
const App = () => {
  return (
    <>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/mapDetails" element={<MapDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default App;