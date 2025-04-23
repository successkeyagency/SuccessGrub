import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import PlaceOrder from "./views/PlaceOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

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
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
