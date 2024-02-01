import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layouy() {
  return (
    <div className=" h-auto min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layouy;
