import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";

import RouterWrapper from "./components/router/RouterWrapper";

function App() {
  return (
    <>
      <RouterWrapper />
      <ToastContainer draggable theme="colored" />
    </>
  );
}

export default App;
