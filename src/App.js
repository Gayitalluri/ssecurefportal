import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import TransferFunds from "./components/TransferFunds";
import Navbar from "./components/Navbar";

const App = () => {
  return (
  <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transfer" element={<TransferFunds />} />
      </Routes>
  </>
    // <div>
    //   <h1>App is Working ✅</h1>
    //   <Home/>
    // </div>
  );
};

export default App;
