import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import PlaceOrder from "./views/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./views/Verify/Verify";
import Myorders from "./views/MyOrders/Myorders";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {


  const [showLogin,setShowLogin] = useState(false)

  return (
    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/Verify" element={<Verify/>} />
          <Route path="/myorders" element={<Myorders/>} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
